import ProjectPage from "@/components/ProjectPage";
import { ProjectPostMeta } from "@/lib/projects";

import thumb from "./lmshThumb.jpg";

export const projectData: ProjectPostMeta = {
    title: "Let Me Solo Her",
    date: "2023-02-28",
    thumb,
};

export default function Component() {
    return (
        <ProjectPage {...projectData}>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique impedit at rem culpa. Nesciunt
                sequi mollitia quis. Atque, blanditiis dolore. Ipsum sed veniam officiis quia tempore impedit! Quasi
                amet accusantium consequatur animi neque fugit aliquid, sunt, iste officiis reiciendis vel. Eligendi nam
                neque quia in consectetur iste, aut ea.
            </p>
        </ProjectPage>
    );
}
