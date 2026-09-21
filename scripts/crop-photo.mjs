import path from 'node:path';
import sharp from 'sharp';

const ids = ['cc-18', 'hs-16', 'hs-17', 'hs-20', 'hs-22', 'hs-24', 'hs-28'];

for (const id of ids) {
  const file = path.resolve('src/content/boats', id, 'cover.png');
  const buf = await sharp(file).trim().png().toBuffer();
  const meta = await sharp(buf).metadata();
  const left = Math.round(meta.width * 0.09);
  const top = Math.round(meta.height * 0.16);
  const width = Math.round(meta.width * 0.82);
  const height = Math.round(meta.height * 0.62);
  const photo = path.resolve('src/content/boats', id, 'photo.png');
  await sharp(buf).extract({ left, top, width, height }).png().toFile(photo);
  console.log(id, 'ok');
}
