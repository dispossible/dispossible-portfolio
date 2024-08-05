/* eslint-disable react/no-unescaped-entities */
import ProjectPage from "@/components/ProjectPage";
import Video from "@/components/Video";
import { ProjectPostMeta } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import thumbDepth from "./depth.png";
import idea from "./idea.png";
import level from "./level.png";
import powers from "./powers.png";
import rays from "./rays.png";
import testLevel from "./testLevel.png";
import thumb from "./thumb.png";

export const projectData: ProjectPostMeta = {
    title: "Æther",
    date: "2024-07-14",
    thumb,
    //foreground,
    thumbDepth,
    depth: 1,
};

export default function Component() {
    return (
        <ProjectPage {...projectData}>
            <p>
                I tried entering a game jam, specifically the{" "}
                <Link href="https://itch.io/jam/pirate">Pirate Software game jam</Link>. I wanted to try out making a
                game and while I have dabbled with game design in the past I have never got anything into a workable
                state. So a game jam with a hard deadline felt like the push I needed to get a working prototype done.
            </p>

            <p>
                For anyone unaware, a game jam is a short event where solo developers or small teams work together to
                build games, which are then judged in some way. Usually a game jam will have a short duration of a
                couple weeks and will set some constraints and a theme that the games made should be based on.
            </p>

            <p>
                This game jam theme was set as &quot;Shadow and Alchemy&quot; with a deadline of two weeks. One of the
                submission requirements was a game design document, which would include details about your game idea,
                inspiration, and how it met the theme.
            </p>

            <h2>Planning</h2>

            <p>
                In the first few days I focused on filling out my{" "}
                <Link href="https://docs.google.com/document/d/1lRStZ1iAZyT5pfrmeFWT2QVK8ditV-jG6Xew_mwO9qg">
                    design document
                </Link>
                . I came up with some initial ideas and concepts while reading various articles and looking at imagery
                based around the theme. Once I had a few ideas mapped out I talked them through with some friends and
                other developers, getting their feedback and thoughts on the playability and practicality. Some of their
                feedback proved very insightful as I refined and started to write up my design document. I was also very
                aware of not over scoping any ideas given the tight time constraint.
            </p>

            <p>
                I mocked up a very simple sketch showing the major mechanic of the game that I had settled on, which was
                making shadows that the player could walk on. The game would function as a 2D platformer with puzzles
                based around turning lights on and off to create shadows, and the shadows allowing the player to reach
                new areas.
            </p>

            <figure>
                <Image
                    src={idea}
                    alt="A simple game level drawn with colored shapes indicating the player, platforms and objects"
                />
                <figcaption>
                    Cyan button toggles the two lights. Dark blue physics object does fall, only the player can stand on
                    shadows. Pink is the player and green entrance and exit doors. The player would walk on the shadow
                    to reach the button, pressing it would flip the two lights, casting the shadow over the second pit,
                    allowing for the player to reach the far side.
                </figcaption>
            </figure>

            <p>
                I would then pull in the Alchemy part of the theme as the basis for the players magic abilities. I
                settled on using the 4 classical elements (Fire, Earth, Air, Water) as well as an additional 4 powers
                based on mixing the elements together, e.g. Fire and Air combined to throw a fireball.
            </p>

            <h2>Starting development</h2>

            <p>
                To get stared I needed to choose an engine and I went with Godot, as it has strong 2D capabilities and,
                as required for the rules of the game jam, could export a web build. I did have a little familiarity
                with it but thought it would be a good opportunity to better learn the engine.
            </p>

            <p>
                I started out by creating a simple scene and quickly created the room from my initial sketch. I made
                sure I understood the mechanism for creating the platforms using Godot's TileSet functionality, and its
                lighting system for casting shadows.
            </p>

            <Image
                src={testLevel}
                alt="A screenshot from Godot, showing a set of platforms and some light sources casting shadows"
            />

            <p>
                I experimented for a while to find out if there was a way I could use Godot's built in shadows and make
                them solid as part of the physics. I fairly quickly gave up on this approach as I believe the rendering
                of the lights is separated from the physics within the engine and straddling that issue would take a
                much deeper understanding of the engine than I could acquire within the length of the jam. So I changed
                my approach and decided to calculate the collision shapes for the shadows myself.
            </p>

            <p>
                The idea I went with was to cast rays out from the light sources in the level and then compare each rays
                length with its neighbors to work out where there were big differences in distance from the light, and
                therefore where a shadow would be cast. Once I had all of these depth differences I could create a solid
                platform spanning from one endpoint to the next, which would approximately be in the same position as
                the shadows. Once this general idea was implemented I made a few optimizations to deal with only casting
                rays toward the player to cut down on unneeded calculations. Then a final optimization to stop
                calculating lights that did not have any line of sight to the player or were far enough away from the
                player to be irrelevant.
            </p>

            <figure>
                <Image
                    src={rays}
                    alt="A game screenshot showing a burst of rays from a point of light, that are all of different lengths based on where they reach platforms in the level"
                />
                <figcaption>
                    Each red line in this image is a depth check that the light is doing, and you can see how it very
                    closely mirrors the shape of the shadows.
                </figcaption>
            </figure>

            <h2>The player</h2>

            <p>
                My next task was the player. The basic movements all went fairly smoothly, as Godot has built in
                handling for creating a player that all worked well out of the box. Where I spent most of my time
                however was in the player animations. I opted to use a rigged character that functioned with a skeleton
                inside of Godot, rather than any flipbook style animation frames. My motivation for this was that I
                realized most of the time the player will be walking on a sloped surface, given most of the platforms
                were shadows, and that angle would be unpredictable. So it would be very cool if the players feet could
                be aligned with the floor dynamically as they walked to procedurally create any required angled walking
                animation.
            </p>

            <p>
                My first hurdle was figuring out Godot's <abbr title="Inverse Kinematics">IK</abbr> system for 2D
                characters. Which is a fancy way of saying, the knees need to bend when the foot moves up.
            </p>

            <p>
                I got this working after much experimentation, accounting for the documentation being very thin on how
                to set up an IK. I don't hold it against the documentation though, it is generally very thorough. I got
                the impression the version I was using (4.2) had just refactored the IK system and the documentation
                hadn't quite caught up. I did run into terminal problems however with mirroring the animations, which
                was needed for the player to walk both left and right. A bit of research lead me to using a community
                plugin for IKs called 'Souperior' which fixed up the mirroring issue.
            </p>

            <p>
                With the new IKs in place I created a basic walk animation using the Godot animation editor which would
                be the basis for my dynamic animation.
            </p>

            <Video youtubeId="VjoOPSqxuLI" title="Walk cycle in Godot" />

            <p>
                With the basic animation done I took my first run at moving the feet to match the slope. It did not go
                great...
            </p>

            <Video youtubeId="NZ9wK5h5GpA" title="Walking on slopes goes wrong" />

            <p>
                So I scrapped my first go and rewrote it. The basis of the approach was to attach two rays to the bottom
                of the characters feet that would check how far away from the ground they were and then move down to
                match it. With this check happening every frame, the foot would naturally adjust to whatever the floor
                below it was doing.
            </p>

            <p>
                The first problem to fix was getting the leading foot to move upwards from being initially underground.
                This involved the ray actually starting just above the characters foot and casting downwards through it,
                so then it would detect raised platforms. This however lead to a further issue, that with each step the
                foot would raise, it also raised the height of the detection ray, and if it raised up enough to be close
                to another shadow or platform, soon the characters leg was higher than their head. So I had to lock the
                ray to only cast at the height the foot was intended to be on level ground.
            </p>

            <p>
                The other problem to resolve was when lowing the back foot, I needed to lower it farther than the
                characters leg was actually able to extend. So I had to ensure that as the trailing foot lowered, the
                characters entire body would also lower to maintain a feasible leg extension. Which caused a whole host
                of mathematical issues that needed to be accounted for as the feet are positioned as an offset of the
                bodies position. Many lines of code later, I had a convincing walk:
            </p>

            <Video youtubeId="kKXDnMPUOlU" title="Walking on slopes in Godot" />

            <h2>Powers</h2>

            <p>
                At this point I was just over half way through the game jam with less than a week to go. It was time to
                implement the magic system. I spent an entire weekend coding in all 8 powers, which are a mix of light
                effecting powers and physics effecting powers.
            </p>

            <p>
                Once I had their basic effects programed in, I then created a UI system for the player that would allow
                them to both select a power and cast it on a button press. This turned out to be a little technical, and
                has a large amount of moving parts to indicate on screen which power is selected and what powers were
                available to the player. This is probably the part of the game which has the most state data to deal
                with and the most complex code interactions.
            </p>

            <Image
                src={powers}
                alt="A screenshot of Godot showing the player with a detailed UI menu above their head"
            />

            <p>
                The final part of the spell system was to create pickups that when the player touched them, unlocked
                each power. This system came together fairly quickly, but did lead to some fairly tightly coupled code
                between the player, the UI, and the pickups which I'm considering a refactor to at a later point in
                time, but right now I'm on a schedule.
            </p>

            <p>
                This area of my development is also where I made a terrible mistake for my games performance. But I will
                get to that in a moment.
            </p>

            <h2>The level</h2>

            <p>
                With the deadline approaching I decided I needed to make the place look nice. I spent the last few days
                of the game jam creating some basic puzzles, and put together a handful of assets to use in my level to
                get a sense of place and not simply black platforms in the void.
            </p>

            <p>
                I made some flaming torches to act as my lights, a couple of crates, a house, and some rocks. Which
                sounds very short as a list of assets, but served remarkably well to create what felt like a small town
                with a mine shaft.
            </p>

            <Image
                src={level}
                alt="A picture of the full level of Aether, a harbour leading into a small town and then onward to a mine shaft"
            />

            <p>
                I added in a couple of floating text boxes to explain the mechanics to the player, and created enough
                areas to get a short demonstration of the fire ability and the earth ability. As the deadline was
                approaching I decided to leave the remaining two powers at the end of the level as it stood and created
                a small area where the player could at least try them out, even without any puzzles to solve.
            </p>

            <p>
                As a last touch I added in a parallax background effect with some mist and trees. The trees I lifted out
                of another project I had been messing around with, as they were an existing asset I could reused and
                included a little swaying and wind animation. I attempted to use the Godot parallax system, but this
                didn't interact well with the shadow effects. I believe it's to do with how the engine adds together
                different layers, but I ended up coding my own simple system for moving the tree and mist layers at
                different speeds as the camera panned past them.
            </p>

            <h2>Sound and UI</h2>

            <p>
                In this last stretch I implemented a quick main menu screen, which was a duplicate of the levels
                background effect and a couple of buttons to navigate. As well as a pause menu to exit out of the game.
                I ran into a surprising amount of complications transitioning in and out of the main menu as the
                gameplay and menu had to hand off responsibility to each other in a controlled way, including a fade
                effect, not interrupting the music, and not causing the engine to freeze up as new assets loaded.
            </p>

            <p>
                As I just mentioned music, I also added in a music player. Which I massively over engineered, as I added
                in the ability for it to switch to any specified track at any moment as the level might call for it. The
                idea being that if the player entered an area of note, there could be a relevant piece of music that
                would play for that location. This handling included fading down the current track and then bringing in
                the new one, then when it was done, returning to what it was playing. I never used it. Otherwise the
                music player had about 8 tracks it played in a loop. The tracks themselves I picked up license free from{" "}
                <Link href="https://pixabay.com/music/search">Pixabay</Link> as well as some of the sound effects I
                used.
            </p>

            <h2>To the web!</h2>

            <p>The final task, with less than 24 hours of the jam remaining was to get the game onto a webpage.</p>

            <p>
                This went almost smoothly. The export was no problem at all, and it loaded up right away onto the
                itch.io page. However when I loaded into the game I was hit with some truly terrible performance issues.
                The game ran at only about 5 frames per second (fps).
            </p>

            <p>
                This was a concern as all of the builds on my local machine had been running at a smooth 60fps. It must
                be something that the web version of Godot was not as capable of handling as well as the build on my
                machines hardware. After some initial debugging in the built in Godot performance inspector I had
                nothing. I wasn't running any code that seemed to be slow, or had any notable spikes in performance. My
                only observation from playing the web build was that the low performance appeared to be worse in some
                areas of the level than others.
            </p>

            <p>
                Having dismissed the official debugging tools I went with the tried and true; turn features off one at a
                time until I get an export with good fps.
            </p>

            <p>
                The first feature I found made a large impact on performance was the background fog effect. Which I
                quickly resolved by dropping the amount of fog particles and increasing the opacity, it looked a little
                less effective, but still held up, and was a good win for performance. Following this I quickly realized
                that most of my performance drops were when I cast spells and when the flaming torches we on screen. I
                figured this out as all of those systems, including the fog, were using the Godot GPU particle system.
            </p>

            <p>
                I made a fairly quick improvement to the torches when I switched them from running the particle
                simulation on the GPU to the CPU. I suspect somewhere in the depths of the Godot web engine there is a
                good reason that CPU particles perform better than GPU based ones.
            </p>

            <p>
                So the final performance issue was all of my spells. I couldn't make the same quick win here that I had
                with the fog and the torches as the spells particle effects were tied into animations and were
                controlled via code. Both of these things would care if the type of particle system was changed. But
                change them I did, slowly and carefully I went back through all of my spells and recreated the effects
                with CPU particles, while also slightly lowering the particle counts.
            </p>

            <p>
                This change didn't totally solve the performance issues, but it got the game into a state where it was
                playable and I submitted my work with about 10 hours to spare.
            </p>

            <h2>Wrap up</h2>

            <p>
                Go <Link href="https://dispossible.itch.io/aether">give it a play</Link>!
            </p>

            <p>
                I learnt a massive amount about game development from putting this together. I feel like I got at least
                a little exposure to every aspect of building a game in this project. I touched on art, sound,
                programming, gameplay, level design, and UI. I mostly have a list of things not to do next time but I
                found the whole project very rewarding, and I have a short tech demo of a game to show for it.
            </p>
        </ProjectPage>
    );
}
