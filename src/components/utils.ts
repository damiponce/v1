import fs from 'fs';
import path from 'path';
const sizeOf = require('image-size');

export function getAllPhotos() {
    const picsDirectory = path.join(process.cwd(), 'public/images/photos');
    // Get file names
    const fileNames = fs.readdirSync(picsDirectory);
    const allPhotosData = fileNames.map((fileName, index) => {
        // Remove extension from file name to get id
        const id = fileName.replace(/\.(png|jpe?g|svg)$/i, '');
        // Join full path of the item
        const fullPath = '/images/photos/' + fileName;
        // Get dimensions and ratio of item
        const dimensions = sizeOf('public/images/photos/' + fileName);
        const width = dimensions.width;
        const height = dimensions.height;
        const ratio =
            dimensions.orientation % 2 ||
            dimensions.type != 'jpg' ||
            (dimensions.type == 'jpg' && dimensions.orientation == null)
                ? width / height
                : height / width;
        const orientation = dimensions.orientation || null;
        // Combine the data and return it
        return {
            id,
            fullPath,
            width,
            height,
            ratio,
            index,
            orientation,
        };
    });

    return allPhotosData;
}

export function getAllDesigns() {
    const picsDirectory = path.join(process.cwd(), 'public/images/designs');
    // Get file names
    const fileNames = fs.readdirSync(picsDirectory);
    const allDesignsData = fileNames.map((fileName, index) => {
        // Remove extension from file name to get id
        const id = fileName.replace(/\.(png|jpe?g|svg)$/i, '');
        // Join full path of the item
        const fullPath = '/images/designs/' + fileName;
        // Get dimensions and ratio of item
        const dimensions = sizeOf('public/images/designs/' + fileName);
        const width = dimensions.width;
        const height = dimensions.height;
        const ratio =
            dimensions.orientation % 2 ||
            dimensions.type != 'jpg' ||
            (dimensions.type == 'jpg' && dimensions.orientation == null)
                ? width / height
                : height / width;
        // Combine the data and return it
        return {
            fileName,
            id,
            fullPath,
            width,
            height,
            ratio,
            index,
        };
    });

    const arr = [];

    for (let i = 0; i < allDesignsData.length; i++) {
        let tempArr = [allDesignsData[i]['fileName'], allDesignsData[i]];
        arr.push(tempArr);
    }

    return Object.fromEntries(arr);
}

interface Loader {
    src: string;
    width: number;
    quality: number;
}

export const customLoader = (loader: Loader) => {
    // return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    return `https://cdn.statically.io/img/damiponce.github.io/${
        loader.src
    }?w=${1000}&q=${loader.quality || 75}`;
};
