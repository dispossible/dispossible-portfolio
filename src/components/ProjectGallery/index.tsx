import { ProjectPost } from "@/lib/projects";
import PageWrapper from "../PageWrapper";
import ThumbnailThree from "../ThumbnailThree";
import styles from "./projectGallery.module.css";

interface ProjectGalleryProps {
    projects: ProjectPost[];
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
    return (
        <PageWrapper className={styles.root}>
            <div className={styles.intro} id="projects">
                <h2>Projects</h2>
                <p>
                    I love to work on creative projects in my spare time, exploring new technologies, techniques, and
                    ideas. I love to be challenged and solve puzzles to improve my skills. Here is a selection of some
                    of my recent favorite projects that I have worked on.
                </p>
            </div>
            {projects.map((project) => {
                return (
                    <ThumbnailThree
                        key={project.id}
                        className={styles.card}
                        image={project.thumb}
                        imageDepth={project.thumbDepth}
                        foreground={project.foreground}
                        title={project.title}
                        depth={project.depth}
                        href={`/projects/${project.id}`}
                    />
                );
            })}
        </PageWrapper>
    );
}
