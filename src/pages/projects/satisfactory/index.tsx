import ProjectPage from "@/components/ProjectPage";
import { ProjectPostMeta } from "@/lib/projects";

import thumb from "./satisfactoryThumb.png";

export const projectData: ProjectPostMeta = {
    title: "Satisfactory",
    date: "2021-05-28",
    thumb,
};

export default function Component() {
    return (
        <ProjectPage {...projectData}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laborum atque voluptatibus sapiente totam
                maxime consectetur repudiandae rem sint excepturi ipsum qui quasi, corrupti alias quas cum? Optio sunt
                consequatur veritatis nostrum, eum, voluptate, consectetur rerum quisquam ipsa alias expedita.
            </p>
            <p>
                Atque optio molestias beatae. Similique ad labore atque ducimus. Nostrum nulla ad vero doloribus
                molestiae. Rem fuga, voluptas nostrum voluptatem, reiciendis corrupti dolore officia, saepe dignissimos
                a perferendis ea architecto laboriosam eos. Unde, cupiditate minima. Id sit pariatur quis aperiam?
            </p>
            <p>
                Necessitatibus, impedit commodi id modi odio tenetur officia magni accusantium architecto sed provident
                eos magnam maxime tempore est dolore quod sequi at ratione aspernatur exercitationem repellendus
                voluptatum unde. Beatae, fugit. Temporibus natus sint beatae impedit deleniti dicta sapiente eum facere?
            </p>
            <p>
                Quisquam incidunt iure deserunt dignissimos quam soluta sed doloribus, perspiciatis saepe est ab
                voluptatum repellat placeat? Voluptas facilis accusamus ab, dicta architecto inventore voluptates earum
                adipisci aliquam nemo corrupti pariatur, ipsa harum animi nobis provident fugiat. Eveniet delectus in
                laudantium?
            </p>
            <p>
                Fuga odio, quibusdam, vel esse rem nostrum suscipit repellat praesentium ullam voluptatum necessitatibus
                omnis voluptatem, temporibus libero. Eius exercitationem perspiciatis asperiores aspernatur natus ex.
                Fugiat eveniet quaerat enim id illo, doloribus minus eos quos et non, excepturi sequi optio magnam!
            </p>
            <p>
                Minus iure fugit dolor saepe alias ipsa ullam. Officia sunt harum at modi vero obcaecati earum fugit
                nihil alias, natus nostrum ipsa soluta iure porro nulla facere dolor. Consequatur dignissimos doloribus
                commodi exercitationem quo labore vel cupiditate libero accusantium sapiente?
            </p>
        </ProjectPage>
    );
}
