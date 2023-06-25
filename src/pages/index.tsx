import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import PhotoGallery from "@/components/PhotoGallery";
import { ProjectGallery } from "@/components/ProjectGallery";
import { getPhotosData } from "@/lib/photos";
import { getProjectsData } from "@/lib/projects";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

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
            <Head>
                <title>Dispossible</title>
                <meta name="description" content="Dispossible - Timothy Bailey - Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#232620" />
                <meta name="msapplication-TileColor" content="#232620" />
                <meta name="theme-color" content="#232620" />
            </Head>
            <main>
                <Banner />
                <ProjectGallery projects={projects} />
                <AboutMe />
                <PhotoGallery photos={photos} />
                <Contact />
            </main>
        </>
    );
}
