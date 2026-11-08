import { cpSync, existsSync, mkdirSync } from 'node:fs';

const source = 'images';
const destination = 'dist/images';

if (!existsSync(source)) {
  throw new Error(`Required image directory not found: ${source}`);
}

mkdirSync('dist', { recursive: true });
cpSync(source, destination, { recursive: true });
