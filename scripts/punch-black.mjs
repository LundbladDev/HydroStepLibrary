import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

function isInk(data, i) {
  return data[i] < 22 && data[i + 1] < 22 && data[i + 2] < 22;
}

async function punchFromEdges(file) {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const seen = new Uint8Array(width * height);
  const stack = [];

  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const idx = y * width + x;
    if (seen[idx]) return;
    const i = idx * 4;
    if (!isInk(data, i)) return;
    seen[idx] = 1;
    stack.push(idx);
  };

  for (let x = 0; x < width; x++) {
    push(x, 0);
    push(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    push(0, y);
    push(width - 1, y);
  }

  while (stack.length) {
    const idx = stack.pop();
    const x = idx % width;
    const y = (idx / width) | 0;
    data[idx * 4 + 3] = 0;
    push(x + 1, y);
    push(x - 1, y);
    push(x, y + 1);
    push(x, y - 1);
  }

  const tmp = file + '.tmp.png';
  await sharp(data, { raw: { width, height, channels: 4 } }).png().toFile(tmp);
  fs.renameSync(tmp, file);
  console.log('edge-punched', file);
}

const mapping = [
  ['cc-18', 'polaroid-cc18.png'],
  ['hs-16', 'polaroid-hs16.png'],
  ['hs-17', 'polaroid-hs17.png'],
  ['hs-20', 'polaroid-hs20.png'],
  ['hs-22', 'polaroid-hs22.png'],
  ['hs-24', 'polaroid-hs24.png'],
  ['hs-28', 'polaroid-hs28.png'],
];

const root = path.resolve('src/content/boats');
const plates = path.resolve('assets/plates');

for (const [id, plate] of mapping) {
  const src = path.join(plates, plate);
  const cover = path.join(root, id, 'cover.png');
  const photo = path.join(root, id, 'photos', '01.png');
  fs.copyFileSync(src, cover);
  fs.copyFileSync(src, photo);
  await punchFromEdges(cover);
  fs.copyFileSync(cover, photo);
}
