import fs from 'fs';
import path from 'path';
const sizeOf = require('image-size');

const picsDirectory = path.join(process.cwd(), 'public/images/photos');

export function getAllPictures() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(picsDirectory);
    const allPostsData = fileNames.map((fileName, index) => {
        // Remove extension from file name to get id
        const id = fileName.replace(/\.(png|jpe?g|svg)$/i, '');
        // Read markdown file as string
        const fullPath = '/images/photos/' + fileName;

        const dimensions = sizeOf('public/images/photos/' + fileName);
        const width = dimensions.width;
        const height = dimensions.height;
        const ratio =
            dimensions.orientation % 2 || dimensions.type != 'jpg'
                ? width / height
                : height / width;
        // Combine the data with the id
        return {
            id,
            fullPath,
            width,
            height,
            ratio,
            index,
        };
    });

    return allPostsData;
}
