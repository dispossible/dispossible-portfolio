import ProjectPage from "@/components/ProjectPage";
import { ProjectPostMeta } from "@/lib/projects";

export const projectData: ProjectPostMeta = {
    title: "Custom Keyboard",
    date: "2023-03-10",
    thumb: "photo-1677741447050-e166cf1a1f14.jpg",
};

export default function Component() {
    return (
        <ProjectPage {...projectData}>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quibusdam voluptates atque sunt,
                autem eius. Modi accusantium deleniti at dolorem repellat officia voluptas esse sit dolorum sint, et
                quod quis blanditiis rem eos eligendi repellendus natus enim quaerat nulla commodi aut deserunt est.
                Quas suscipit ad ut nesciunt quia? Laborum!
            </p>
            <p>
                Laboriosam tempora laudantium commodi quis quas. Incidunt alias impedit consequuntur provident atque
                quis facere, officia cumque perspiciatis fugit nesciunt quo corporis reiciendis. Iure beatae odio
                mollitia, corporis fuga praesentium quo consequatur provident, adipisci cumque nostrum alias ad est
                vitae dolore natus dolorum harum id veniam molestiae dolorem veritatis? In, illo.
            </p>
            <p>
                Voluptatum architecto corporis dolor cupiditate? Aliquam perspiciatis officiis est autem reiciendis
                dolore molestiae ratione ipsum culpa omnis, sunt eveniet? Dolores quae eligendi molestias beatae veniam
                qui animi laboriosam et officiis possimus nobis voluptate architecto, obcaecati quibusdam totam corporis
                sed sapiente dolorum? Facere temporibus facilis illum possimus excepturi voluptates magnam illo?
            </p>
            <p>
                Repellendus assumenda, quibusdam modi voluptatum consequuntur eaque inventore, placeat molestias
                excepturi aspernatur officia corporis est architecto ratione. Provident eum distinctio, quos porro quod
                molestias cum cumque voluptatem quaerat quae est id esse eos autem harum aspernatur aliquid fugiat sequi
                quisquam consequuntur? Fuga velit ad eligendi saepe officia autem blanditiis quod.
            </p>
            <p>
                Quasi pariatur animi, nam natus corrupti tempora itaque cum recusandae totam est id commodi omnis,
                tenetur earum veritatis dolorem deserunt. Magni eaque commodi labore. Doloremque quas laborum inventore
                hic, deleniti molestias debitis delectus id architecto officiis excepturi fuga eveniet, sit, modi iste
                provident esse cupiditate quibusdam? Iste sapiente voluptatum quidem.
            </p>
        </ProjectPage>
    );
}
