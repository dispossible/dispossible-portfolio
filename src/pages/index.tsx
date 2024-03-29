import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import PhotoGallery from "@/components/PhotoGallery";
import { ProjectGallery } from "@/components/ProjectGallery";
import { getPhotosData } from "@/lib/photos";
import { getProjectsData } from "@/lib/projects";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
    return {
        props: {
            projects: await getProjectsData(),
            photos: await getPhotosData(),
        },
    };
}

export default function Home({ projects, photos }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Banner />
            <ProjectGallery projects={projects} />
            <AboutMe />
            <PhotoGallery photos={photos} />
            <Contact />
        </>
    );
}
