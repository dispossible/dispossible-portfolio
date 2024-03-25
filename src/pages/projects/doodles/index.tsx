/* eslint-disable react/no-unescaped-entities */
import ProjectPage from "@/components/ProjectPage";
import { ProjectPostMeta } from "@/lib/projects";

import Clock from "@/components/doodles/Clock";
import Clouds from "@/components/doodles/Clouds";
import Peel from "@/components/doodles/Peel";
import Pencil from "@/components/doodles/Pencil";
import Planet from "@/components/doodles/Planet";
import Radio from "@/components/doodles/Radio";
import RandomPlanet from "@/components/doodles/RandomPlanet";
import Record from "@/components/doodles/Record";
import SquareDance from "@/components/doodles/SquareDance";
import Stargate from "@/components/doodles/Stargate";
import Tardis from "@/components/doodles/Tardis";
import Image from "next/image";
import Link from "next/link";
import Candles from "../../../components/doodles/Candles";
import thumbDepth from "./depth.png";
import thumb from "./doodleThumb.png";
import techThing from "./tech-thing.png";

export const projectData: ProjectPostMeta = {
    title: "CSS Doodles",
    date: "2021-05-28",
    thumb,
    thumbDepth,
};

export default function Component() {
    return (
        <ProjectPage {...projectData}>
            <p>
                I keep drawing small pictures using CSS just for fun all the time, arguably this isn't a 'project' but I
                have built up a good set of these over time that make a fair body of work.
            </p>

            <p>
                Doodling with CSS I find very fun and frequently pushes me on my knowledge of CSS to achieve complex
                effects. I also find out about new techniques and research new ways to use styling which I can apply in
                my day job when styling actual UI.
            </p>

            <p>
                <strong>Disclaimer</strong>; If any of these don't look right in your browser of choice, they have not
                been extensively tested and use a bunch of weird CSS. All standards based, though I'm pushing some
                values to do effects they weren't meant to. I have checked in a few browsers that all looks well, but I
                make no promises.
            </p>

            <h2>Radio</h2>

            <p>
                This is a nice easy one to get the ball rolling. Created with a single html div element and a handful of
                CSS gradients and box shadows.
            </p>

            <Radio />

            <p>
                I was really pushing with this one to only use a single element and came up with a handful of
                interesting ways to apply background clipping, several overlaid gradients, and multiple box shadows.
            </p>

            <h2>Single element speed round</h2>

            <p>
                Following on from that first doodle I did a series of others all using a single element and pushing
                further into massive amounts of gradients.
            </p>

            <div style={{ display: "grid", gap: 32 }}>
                <Record />
                <Clock />
                <Pencil />
            </div>

            <h2>Planets</h2>

            <p>
                This drawing has a little bit of script needed to kick off the randomization but the actual drawing is
                fully CSS, and only uses a single html element.
            </p>

            <figure
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                    gap: 16,
                }}
            >
                <Planet seed={45815642784} hasRings={false} />
                <Planet seed={12332133211} hasRings={false} />
                <Planet seed={87569745687} hasRings={true} />
                <Planet seed={28159838271} hasRings={false} />
                <Planet seed={28159838274} hasRings={true} />
                <Planet seed={55458551600} hasRings={false} />
                <Planet seed={66666666666} hasRings={false} />
                <Planet seed={44584455455} hasRings={true} />
                <Planet seed={55985646135} hasRings={false} />
                <Planet seed={76348942344} hasRings={true} />
                <Planet seed={89999825736} hasRings={false} />
                <Planet seed={23313221233} hasRings={true} />
            </figure>

            <p>
                The original implementation of this was done in Nunjucks as I was working on an 11ty project at the
                time. However I have rewritten it here as a React component for this site, so I can create the
                variations. Once calculated these random numbers are handed off as a few CSS variables.
            </p>

            <RandomPlanet />

            <p>
                I must admit to a minor amount of cheating to get the cloud textures on this. I have a couple of SVG
                elements that are inlined inside the stylesheet that use a fractal noise as a basis for the texturing.
                There is still no bitmaps, and it's all in the CSS file, so I count it as a win.
            </p>

            <h2>Animated Doodles</h2>

            <p>The next pair of doodles are playing around with similar ideas of animating CSS shapes in fun ways.</p>

            <div style={{ display: "grid", gap: 32 }}>
                <SquareDance />
                <Peel />
            </div>

            <p>
                The second effect of the peeling circle is achieved mostly through an optical illusion and moving a set
                of circles around in sync with each other, as they get occluded.
            </p>

            <h2> Candles </h2>

            <p>
                This one was actually done as part of my day job and got implemented into a client website. The site in
                question was an e-commerce shop selling <em>legally distinct wizarding school</em> merchandise.
            </p>

            <Candles />

            <p>
                The fire effect here came out particularly nicely. It is created using a couple of box shadows that move
                upward, a little wobble on the scale transform, and a nice dose of the blur filter to blend it all
                together.
            </p>

            <h2>Stargate</h2>

            <Stargate />

            <p>
                Pulling this Stargate over from it's original environment proved a little tricky. I wrote this using
                SCSS when I was learning loops combined with some trigonometry functions, so there was a lot of code I
                needed to compile out into repetitive selectors with magic numbers. It was also written to be full
                screen and was making large use of <code>vmin</code> units, which all needed converting out to display
                here, which I did using a CSS variable as a stand-in for the viewport size.
            </p>

            <p>
                Then finally there is more cheating. The CSS is not drawing all of the glyphs on the ring, this is a
                custom font, which is inlined in the CSS to stay within the bounds of the rules&hellip; and a small SVG
                also inlined to get the ripples on the surface going.
            </p>

            <h2>TARDIS</h2>

            <p>
                So, CSS can do 3D transforms for some neat effects. Here I pushed that to an extreme and started
                constructing a full model.
            </p>

            <Tardis />

            <p>
                I have seen a tool out on the internet which makes this kind of thing easier to do using a UI that can
                drop in primitives and place them in 3D space to create a model, but it's all generated in JS, where
                here I coded this out by hand. But that's not a flex, I don't recommend this, don't be like me.
            </p>

            <p>
                I think I pushed this about as far as I can without tooling or creating a massive headache of a
                stylesheet. But on the plus side, no cheating in this one, it's all pure CSS.
            </p>

            <h2>Honorable mentions</h2>

            <h3>Clouds</h3>

            <p>
                This one has almost no CSS in it, it's really just an SVG, but I created it as an infinite background
                image that could support very large resolution displays without a break or loop point, as it can be set
                to any width and generates the cloud effect automatically.
            </p>

            <Clouds />

            <h3>Browser abuse</h3>

            <p>
                This last one I will link to with a warning; This drawing is <strong>very bad</strong> for your browser!
                I have made some attempts to reduce it to be run-able but only made limited gains. So view this live at
                your own risk.
            </p>

            <p>
                <Link href="doodles/tech-thing">View live</Link>
            </p>

            <p>Here's a static screenshot of it for the those not sporting a gaming PC:</p>

            <Image src={techThing} alt="A set of glowing lines hovering over a watery reflective surface" />

            <p>
                There is a bunch of SVG in this one as well to get the ripples and the fog. But the real trick of this
                one is the reflection, as the 3D perspective needs to be really paid attention to when creating the
                reflection as the stacking is all reversed and needs to be positioned bearing in mind how it looks when
                viewed from below.
            </p>
        </ProjectPage>
    );
}
