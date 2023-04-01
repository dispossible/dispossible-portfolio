/*
    This is a really jank way of getting a list of files in a directory so they can be listed elsewhere,
    Next.js has no good mechanism I can find for doing this in a non horrible way.
*/
import sharp from "sharp";

const photos = [
    {
        src: "photo_001.jpg",
        alt: "A robin perched on a branch",
    },
    {
        src: "photo_002.jpg",
        alt: "Barn in the woods, with some machinery out in front",
    },
    {
        src: "photo_003.jpg",
        alt: "A person stood in the desert looking out past the camera with a sunset behind them",
    },
    {
        src: "photo_006.jpg",
        alt: "Looking up a muddy path with fences on either side overgrown with ivy",
    },
    {
        src: "photo_007.jpg",
        alt: "A row of bicycles in a rack alongside a path in a city",
    },
    {
        src: "photo_008.jpg",
        alt: "A road through a forest curving away to the right over a hill",
    },
    {
        src: "photo_009.jpg",
        alt: "Closeup of a sunflower",
    },
    {
        src: "photo_010.jpg",
        alt: "A small twiggy tree that appears alone in the center of the photo, behind it is an empty field and a stark blue sky",
    },
    {
        src: "photo_012.jpg",
        alt: "A black cat looking away from the camera down a concrete path",
    },
    {
        src: "photo_014.jpg",
        alt: "Closeup of some rocks in long grass that form an empty waterway",
    },
    {
        src: "photo_016.jpg",
        alt: "Landscape shot at dusk where the sky is an orange to blue gradient with the moon visible. On the horizon are some small trees and electrical towers",
    },
    {
        src: "photo_018.jpg",
        alt: "A shadowy figure walking toward the camera at night with a street light behind, casting harsh shadows",
    },
    {
        src: "photo_021.jpg",
        alt: "Closeup of brightly colored balls in a ball pit",
    },
    {
        src: "photo_024.jpg",
        alt: "A small plastic boat that is 'sailing' on a blue tarpaulin",
    },
    {
        src: "photo_026.jpg",
        alt: "A city building with a few parked cars in front on the side of the road",
    },
];

export async function getPhotosData() {
    const photosData: PhotoData[] = [];

    for (let photo of photos) {
        // Remove ".jpg" from file name to get id
        const id = photo.src.replace(/\.jpg$/, "");
        const path = `/photos/${photo.src}`;

        const metadata = await getPhotoMeta(`public/${path}`);

        // Combine the data with the id
        photosData.push({
            id,
            path,
            alt: photo.alt,
            width: metadata.width,
            height: metadata.height,
            isLandscape: (metadata.width ?? 0) > (metadata.height ?? 0),
        } as PhotoData);
    }

    // Sort posts by date
    return photosData;
}

export interface PhotoData {
    id: string;
    path: string;
    alt: string;
    width: number;
    height: number;
    isLandscape: boolean;
}

function getPhotoMeta(path: string): Promise<sharp.Metadata> {
    return new Promise((resolve, reject) => {
        sharp(path).metadata((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
