/* eslint-disable react/no-unescaped-entities */
import ProjectPage from "@/components/ProjectPage";
import { ProjectPostMeta } from "@/lib/projects";

import Image from "next/image";
import blender from "./blender.png";
import lmsh1 from "./lmsh1.png";
import lmsh2 from "./lmsh2.jpg";
import thumb from "./lmshThumb.jpg";
import maya1 from "./maya1.jpg";
import maya2 from "./maya2.png";
import maya3 from "./maya3.png";
import print from "./print.png";
import printed from "./printed.jpg";
import sword from "./sword.png";

export const projectData: ProjectPostMeta = {
    title: "Let Me Solo Her",
    date: "2023-02-28",
    thumb,
};

export default function Component() {
    return (
        <ProjectPage {...projectData}>
            <p>
                The end point of this project, a scale model of the Elden Ring character Let Me Solo Her, was not
                intended or planned, but the end point of a weird journey that started with an interest in modding dark
                souls.
            </p>

            <Image
                src={lmsh1}
                alt="two images, one from the fount and another behind a scale model of a person holding two katanas wearing a jar on their head"
            />

            <h2>Dark Souls modding</h2>

            <p>
                This process began based on a passing idea that I was going to try to mod Dark Souls 1. Acting on this
                passing fancy I started jumping into the community and seeing what the tools were like.
            </p>

            <p>
                The tools turned out to be incredibly scattered, hard to get hold of, and downloaded from questionable
                websites. Got to keep Defender on it's toes sometimes. One even had to be pulled out of the internet
                archive from a link on a forum post.
            </p>

            <p>
                As I was figuring the tools, and reading guides, wikis, and old forum posts, I quickly realised that
                most of the tools actually worked across all of From Softwares games, and tools made for any of the
                Souls games, or bloodborne could be used mostly interchangeably.
            </p>

            <h2>Extracting models</h2>

            <p>
                So the tooling that I got working first was the ability to export models. I'm going to give a brief
                overview of the workflow to do this so you understand my pain.
            </p>

            <p>
                First I had to unpack my game files. This was done with some software specifically for extracting From
                Softwares data files. This resulted in a huge directory that was very deep and named at every level with
                only numbers. Next I used a spreadsheet of model IDs to look up the ID of the model I wanted from the
                game. This ID could then be search for in the extracted files and I could grab a set of 4-8 files with
                that ID.
            </p>

            <p>
                These files were all of various formats nobody has ever heard of. Getting from these files to something
                useable is a 2 step process with 2 separate pieces of software. The first process 'decodes' the files, I
                can't say I understand what they did but the file format changes. Then the second piece of software was
                able to take in these decoded files and convert them out into another set of formats. So far so many
                more file formats I'd never heard of. But it turns out at this stage I would have some files in SMD
                format.SMD format is the format that is used by Valve Source Filmmaker. Why did I end up in that format?
                No idea, I guess the software author liked it.
            </p>

            <p>
                Once I had an SMD file some 3D software is actually able to import that format, one of which is Blender.
                I absolutely should have been done here, however I was taught Maya at an early age and it stuck, and I
                find Blender has enough different idea from Maya that I have never been able to make the switch without
                enough friction that I revert back to Maya.
            </p>

            <p>
                Once in blender I could re-export the file back out into FBX, a much more common file format that
                maintains rigging data, so I was able to maintain any skeletons throughout the process. FBX could then
                be loaded into Maya, and I was able to use it.
            </p>

            <h2>Elden Ring</h2>

            <p>
                Once I had the extraction workflow down I started extracting a few models, and then moved between other
                From Software games that I had installed. Which it turned out Elden Ring was almost fully compatible
                with all of these random tools and converters.
            </p>

            <p>
                Elden Ring turned out to be far more interesting to get models out of. Thoughts of creating mods and
                trying to revert that export process into an import lay abandoned.
            </p>

            <p>
                Up to now I was limited to being able to extract only models I had the ID of. Which had restrictions,
                firstly to the communities documentation of what character had what ID, but also characters in the game
                only get model IDs if they are using a unique model. Which means that all characters that are human are
                using a separate system which takes a base 'human' model and applies morphs to the face, applies a hair
                style, and then equips armour pieces. The unique models being mostly used only for monsters, and bosses.
            </p>

            <h2>Map viewer</h2>

            <p>
                I next found another piece of software from the modding community that was a godsend; the map viewer.
                This software would load in the game world in full 3D and allow me to select and inspect everything in
                that section of the map. This included all of the model IDs for places characters and objects.
            </p>

            <p>
                The static objects were actually of interest and I exported a number of statues and landmarks which I
                right away wanted to print.
            </p>

            <Image src={lmsh2} alt="A statue of a woman in a long dress on a pedestal, arms spread" />

            <p>
                I was really happy with this print of a statue of the character Marika. I was then asked by a friend of
                mine if he could have the same thing but of Let Me Solo Her. I was up for the challenge.
            </p>

            <h2>Extracting models part 2</h2>

            <p>
                I wanted to be able to export out a human model. So I went on a hunt and found yet another piece of
                software which was capable of inspecting the game files and reporting back file IDs along with their in
                game reference names. This was a major win as the in game name was frequently just the name of the
                character the file was for, and indicated if it was a model file.
            </p>

            <p>
                With this lookup tool I started figuring out how the human models were assembled. I managed to export
                out the base male body, and his underwear. Though I never managed to work out the faces, which were tied
                up with the morph system for making different faces. But I was in luck here, for the character I wanted
                had no need of face geometry.
            </p>

            <Image src={blender} alt="A human model in Blender with no face" />

            <p>
                Using much the same method I then started tracking down clothing items and dug out the jar helm and
                exported it. Then after a little googling to find out which swords were the correct ones, I dug up their
                IDs and exports them and their sheathes.
            </p>

            <p>
                Each one of these making their way through the parade of file formats to eventually all turn up in Maya.
                I even managed to end up with the rig for the body maintained, which was a welcome bonus, even if it had
                none of the controls (like IKs or morphs), the raw bones were more than I hoped.
            </p>

            <Image src={maya1} alt="A full character in a t-pose in Maya with swords on the floor around him" />

            <h2>Modelling</h2>

            <p>
                Now as I had the rig my first step was to ditch the T-pose and get him into a decent stance, as well as
                placing the swords and sheaths.
            </p>

            <Image src={maya2} alt="Screenshot from Maya with a character in a walking stance holding dual katanas" />

            <p>
                Once posed I then began getting the model ready for printing. The first step was to combine all of the
                segments of body into a single hull. You can see the parts by colour in the screenshot above. Then I
                needed to remove all polygons from the model that were not 'manifold'. The most notable non-manifold
                polygons were being used for texturing work, like bodyhair, which is done in game by having a forest of
                single sided polygons sticking off of the main body which have a texture applied with transparency to
                achieve the effect of small detailed hairs or pieces of cloth that are separate from the skin.
            </p>

            <p>
                Once shaved, the next step was a quick pass with some re-meshing and smoothing tools to iron out any
                noticeable polygons in the surface. In game polygon edges can be hidden with shading effects that
                instruct the graphics to not show an angled edge but cast light as if the edge was smooth. 3D printing
                has no such trickery, you see the polygons as god intended, so the solution is to simply have more to
                emulate a smoothed shape closer.
            </p>

            <p>
                I also chucked in a quick base podium that would allow him to stand freely without needing to worry
                about balance.
            </p>

            <Image
                src={maya3}
                alt="Screenshot from Maya where two version of a character and next to each other, one is much higher poly count that the other"
            />

            <p>
                I then had to apply the same treatment to the swords mesh, which was much more work as I had to maintain
                the sharp edges, and one of the sword, Rivers of Blood, has a distinct jagged look, which I couldn't
                smooth out. So I had to break each sword apart into the blade, the crossguard and the grip, plus any
                additional features, so each could be made manifold and then smoothed or not individually.
            </p>

            <p>
                Same thing for the sheathes. However the Rivers of Blood katanas sheath had a fun bonus amount of
                geometry attached. None of this additional geometry was large enough to be printed at any decent quality
                level and was a nightmare to deal with. In the end I stripped most of it off without much loss to the
                model. Unless someone is really up on what the swords sheath looks like, nobody is going to even notice.
                One of the few pieces I kept was the platted ribbon that wound around the sheath, and that detail was
                particularly horrible to make manifold, as it was all only a single polygon thick, so needed to be
                modeled out into a closed mesh, which the platting made a nightmare.
            </p>

            <figure>
                <Image
                    src={sword}
                    alt="Two images of sword sheaths, one has a huge amount of ribbons and clasps around it, where the other is very plain"
                />
                <figcaption>Before (left) and after (right)</figcaption>
            </figure>

            <h2>Printing</h2>

            <p>
                Now to get this thing to print I had to overcome some issues with overhanging details and dealing with
                the swords.
            </p>

            <p>
                The first major element to deal with was the jar, and was a fairly easy fix. Take the jar off the head
                and put it on the floor. With some minor changes to remove the remnants of the head geometry and place a
                peg at the end of the neck, and the corresponding hole in the base of the jar.
            </p>

            <p>
                I then removed the sheaths and went with a very similar idea of using a peg and hole so that they could
                be pushed back into the side of the leg after printing.
            </p>

            <p>
                I did a few test prints at this stage and quickly realised the sword were going to also be a massive
                problem remaining in the hands. The blades were way too thin and at an unhelpful angle to be printed in
                place. So those also had to be detached. I went with separating the blades at the crossguard and
                creating a small inset to allow for aligning them after printing with a touch of glue to hold them on.
            </p>

            <Image src={print} alt="The model separated out into multiple pieces and arranged on a surface" />

            <Image src={printed} alt="The model separated out into multiple pieces and arranged on a surface" />

            <p>
                You can grab the finished{" "}
                <a href="https://www.printables.com/model/522150-let-me-solo-her" rel="noreferrer noopener">
                    model files from Printables
                </a>
                .
            </p>

            <p>
                The final step was a lick of paint. Which is a new skill that I have been picking on recently to put the
                finishing touch on my prints. Turns out not playing Warhammer for my teenage years was an oversight, but
                I think it came out passably.
            </p>

            <figure>
                <Image
                    src={lmsh1}
                    alt="two images, one from the fount and another behind a scale model of a person holding two katanas wearing a jar on their head"
                />
                <figcaption>
                    I would retake this photo against a plain background, but I have since gifted the model to the
                    requester, so we all have to live with it.
                </figcaption>
            </figure>
        </ProjectPage>
    );
}
