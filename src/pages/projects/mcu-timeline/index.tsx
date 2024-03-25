/* eslint-disable react/no-unescaped-entities */
import ProjectPage from "@/components/ProjectPage";
import { ProjectPostMeta } from "@/lib/projects";

import Code from "@/components/Code";
import { Gif } from "@/components/Gif";
import Image from "next/image";
import cap from "./cap.gif";
import capFrame from "./cap_frame.png";
import thumbDepth from "./depth.png";
import thumb from "./mcuThumb.png";
import screenshot from "./screenshot.png";

export const projectData: ProjectPostMeta = {
    title: "MCU Timeline",
    date: "2022-02-28",
    thumb,
    thumbDepth,
};

export default function Component() {
    return (
        <ProjectPage {...projectData}>
            <p>
                Like most developers, at one point I made a quick tool in a weekend for one simple idea, and spawned
                myself half a decade of tech support.
            </p>

            <p>
                In the long long ago of 2016, Marvel had just started the fourth season of their spin off TV show Agents
                of S.H.I.E.L.D. and were full steam releasing Netflix shows. The Marvel Cinematic Universe was spinning
                out beyond the mainline movies and becoming harder to keep track of, so I created a list for myself
                where I worked out which order I should be watching these episodes in to make the most sense interweaved
                with the movies.
            </p>

            <p>
                Wouldn't it be great if someone was maintaining such a list online that I could reference? Wait, I'm a
                someone!
            </p>

            <div className="u-center">
                <Gif src={cap} thumb={capFrame} alt="A short clip of captain america jumping on a grenade" />
            </div>

            <p>
                Go give it a look here: <a href="https://mcu-timeline.com/">https://mcu-timeline.com/</a> and check out
                the full source code on <a href="https://github.com/dispossible/MCU-Timeline">GitHub</a>.
            </p>

            <Image src={screenshot} alt="Screenshot of a website showing a list of shows in order" />

            <h2>In the beginning</h2>

            <p>
                The first build of this site consisted of taking my ordered list, converting it into JSON and I wrote a
                javascript loop to convert that list into HTML at build time.
            </p>

            <p>
                Realising any interactivity I wanted to add would require a client side re-render, I bundled my JSON and
                the render loop into a script and added it to the page. The first interactivity I added was a toggle to
                use the exact release date order, or my opinionated ordering.
            </p>

            <Code language="json">
                {`[
    {
        "type": "Film",
        "name": "Iron Man",
        "releaseDate": [2008, 4, 2],
        "watchOrder": 10
    },
    {
        "type": "Film",
        "name": "The Incredible Hulk",
        "releaseDate": [2008, 5, 13],
        "watchOrder": 20
    },
    {
        "type": "Short Film",
        "name": "The Consultant",
        "releaseDate": [2011, 8, 13],
        "watchOrder": 30
    }
}`}
            </Code>

            <p>
                To this day my base data is essentially this same structure, but with a few extra properties added for
                new features, and some type safety.
            </p>

            <p>
                The first version of my build scripts were using Gulp to run tasks, which mostly consisted of
                concatenating all of my script files and running it through Babel to transpile for ES5. With some
                linting, minify any images, and I was using SASS to build my stylesheets.
            </p>

            <h2>New features</h2>

            <p>
                Over time I have been adding in new features. Nothing too notable, some additional filters and more
                sorting options. Spent way too long getting TV shows to split into multiple sections and wrap around
                films automatically.
            </p>

            <p>
                A year in and I dropped the jQuery dependency, moving all of my render logic into vanilla JS. I also
                added Webpack into the build to make actual use of <abbr title="ECMAScript Modules">ESM</abbr>, as nice
                as concatenating files was.
            </p>

            <p>
                I gave the UI a couple of makeovers over time, notably I added in movie posters, so I could make the
                maintenance that little bit harder having to find a poster for every show.
            </p>

            <h2>Rebuild</h2>

            <p>
                There came a point where I had outgrown the original setup for this project. I had learnt new
                technologies, and better ways of working over time that I wanted to implement here.
            </p>

            <p>
                I went back to the start and rebuilt the entire stack for the site. Did I add React? No we only build
                jank around here, and I wanted to stick with vanilla to remain light on the shipped dependencies.
            </p>

            <p>
                What I did add was Typescript and PostCSS into my build tooling, dropping SASS. ESLint and Prettier for
                keeping the code nice and tidy. Babel was gone, along with Gulp, moving my build scripting into npm
                scripts. Webpack made it though as the lone survivor.
            </p>

            <Code language="json">
                {`"scripts": {
    "build": "npm-run-all clean -p build:js build:css build:img build:public build:html",
    "start": "npm-run-all build -p watch:* start:server",
    "start:server": "browser-sync dist -w",
    "watch:js": "nodemon --watch src -e js,ts,json -x \\"npm run build:js\\"",
    "watch:css": "nodemon --watch src -e css,scss -x \\"npm run build:css\\"",
    "watch:img": "nodemon --watch src/img -x \\"npm run build:img\\"",
    "watch:public": "nodemon --watch src/public -x \\"npm run build:public\\"",
    "watch:html": "nodemon --watch src -e html -x \\"npm run build:html\\"",
    "clean": "rimraf dist",
    "build:js": "node ./scripts/webpack.mjs",
    "build:css": "postcss src/css/index.scss --no-map -o dist/style.css",
    "build:img": "node ./scripts/images.mjs",
    "build:public": "node ./scripts/public.mjs",
    "build:html": "npm-run-all html:clean html:js html:render html:minify html:clean",
    "html:clean": "rimraf .temp",
    "html:js": "tsc --outDir .temp/ --target esnext --allowSyntheticDefaultImports --esModuleInterop",
    "html:render": "node ./scripts/render.js",
    "html:minify": "html-minifier --input-dir dist --output-dir dist --file-ext html --remove-comments --collapse-whitespace"
},`}
            </Code>

            <p>
                Shortly after I did revive Babel as part of the Webpack build as I was using a handful of modern JS
                features that had fairly shallow backward compatibility.
            </p>

            <p>
                Will I switch to React at some point? Yea that probably makes some sense as the render logic continues
                to grow, but for now string formatting is getting me by.
            </p>

            <Code language="javascript">
                {`    render(index: number, additionalHtml?: string, released?: boolean): string {
        released = released ?? this.released;
        return \`<li>
                <div class="timeline-card timeline-card_\${this.type} \${!released ? "is-unreleased" : ""}">
                    <div class="timeline-posterFrame">
                        <img class="timeline-poster" src="\${this.imgUrl}" alt="Poster for \${this.name}"/>
                    </div>
                    <div class="timeline-detail">
                        <div class="timeline-vol"> \${index} </div>
                        <div class="timeline-type"> \${formatShowType(this.type)} </div>
                        <h2 class="timeline-title"> \${this.name} </h2>
                        \${this.renderAdditionalHeadings()}
                        \${this.notes ? \`<div class="timeline-notes">\${markdown(this.notes)}</div>\` : \`\`}
                        \${additionalHtml ?? ""}
                    </div>
                </div>
            </li>\`;
    }`}
            </Code>
        </ProjectPage>
    );
}
