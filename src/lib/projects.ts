/*
    This is a really jank way of getting a list of files in a directory so they can be listed elsewhere,
    Next.js has no good mechanism I can find for doing this in a non horrible way.
*/

import fs from "fs";
import { StaticImageData } from "next/image";
import path from "path";

const projectsPath = "src/pages/projects";
const projectsDirectory = path.join(process.cwd(), projectsPath);

export async function getProjectsData() {
    // Get file names under /projects
    const folders = fs.readdirSync(projectsDirectory);

    const projectsData: ProjectPost[] = [];

    for (let folderName of folders) {
        const folderStats = fs.statSync(`${projectsPath}/${folderName}`);

        // Filter out any files
        if (!folderStats.isDirectory()) {
            continue;
        }

        // Make sure the path has an index
        if (!fs.existsSync(`${projectsPath}/${folderName}/index.tsx`)) {
            continue;
        }

        // import data
        const data = await import(`../pages/projects/${folderName}/index.tsx`);

        // Combine the data with the id
        projectsData.push({
            id: folderName,
            ...data.projectData,
        } as ProjectPost);
    }

    // Sort posts by date
    return projectsData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });
}

export interface ProjectPostMeta {
    title: string;
    date: string | number;
    thumb: StaticImageData;
}

export interface ProjectPost extends ProjectPostMeta {
    id: string;
}
