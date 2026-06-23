import sharp from 'sharp';
import path from 'path';

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

const images = [
  {
    name: 'hero_cleaning_1782142868662.png',
    outName: 'hero_cleaning_1782142868662.webp',
    width: 1600
  },
  {
    name: 'deep_cleaning_1782142904067.png',
    outName: 'deep_cleaning_1782142904067.webp',
    width: 800
  },
  {
    name: 'office_cleaning_1782142887701.png',
    outName: 'office_cleaning_1782142887701.webp',
    width: 800
  }
];

async function optimize() {
  console.log('Starting image optimization...');
  for (const img of images) {
    const inputPath = path.join(IMAGES_DIR, img.name);
    const outputPath = path.join(IMAGES_DIR, img.outName);

    console.log(`Processing ${img.name} -> ${img.outName} (width: ${img.width})...`);
    try {
      await sharp(inputPath)
        .resize({ width: img.width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Successfully saved ${img.outName}`);
    } catch (err) {
      console.error(`Failed to process ${img.name}:`, err.message);
    }
  }
  console.log('Image optimization complete!');
}

optimize();
