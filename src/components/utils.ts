import fs from 'fs';
import path from 'path';
const sizeOf = require('image-size');
import { ExifParserFactory } from 'ts-exif-parser';
export interface PicType {
   fileName: string;
   id: string;
   fullPath: string;
   width: number;
   height: number;
   ratio: number;
   index: number;
   orientation?: number;
   dateTaken: number;
}

export interface GroupPicsType {
   [index: string]: PicType;
}

export async function getAllPhotos(): Promise<PicType[]> {
   var buffers: any[] = [];

   const picsDirectory = path.join(process.cwd(), 'public/images/photos');
   // Get file names
   const fileNames = fs.readdirSync(picsDirectory);
   const allPhotosData = await Promise.all(
      fileNames.map(async (fileName, index) => {
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
         await fs.promises
            .open(picsDirectory + '/' + fileName, 'r')
            .then(async (fd) => {
               // if (status) {
               //     console.log(status.message);
               //     return;
               // }

               const BUFFER_LENGTH = 65635;

               var buffer = Buffer.alloc(BUFFER_LENGTH);
               await fd
                  .read(buffer, 0, BUFFER_LENGTH, 0)
                  .then(async (value) => {
                     const parser = ExifParserFactory.create(buffer);
                     parser.enableReturnTags(true);
                     parser.enableTagNames(true);
                     try {
                        const result = parser.parse();
                        buffers.push(result.tags?.DateTimeOriginal);
                     } catch (err) {
                        // buffers.push(JSON.stringify(err));
                        console.log(err);
                     }

                     //  buffers.push([
                     //      buffer.toString('utf8', 0, value.bytesRead),
                     //      result,
                     //  ]);
                  });
            });
         // Combine the data and return it
         var dateTaken =
            typeof buffers[index] !== 'undefined' ? buffers[index] : 0;
         return {
            fileName,
            id,
            fullPath,
            width,
            height,
            ratio,
            index,
            orientation,
            dateTaken,
         };
      })
   );

   return allPhotosData;
}

export function getAllDesigns(): GroupPicsType {
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

import { ImageLoader, ImageLoaderProps } from 'next/image';
import { useState } from 'react';

export const customLoader: ImageLoader = (props: ImageLoaderProps) => {
   // return `https://example.com/${src}?w=${width}&q=${quality || 75}`
   return `https://cdn.statically.io/img/damiponce.github.io/${
      props.src
   }?w=${1000}&q=${props.quality || 75}`;
};
export const fullResCustomLoader: ImageLoader = (props: ImageLoaderProps) => {
   // return `https://example.com/${src}?w=${width}&q=${quality || 75}`
   return `https://damiponce.github.io/${props.src}?&q=${100}`;
};

export const blurCustomLoader = (src: string) => {
   // return `https://example.com/${src}?w=${width}&q=${quality || 75}`
   return `https://cdn.statically.io/img/damiponce.github.io/${src}?w=${10}&q=${75}`;
};
