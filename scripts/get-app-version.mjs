import { readdirSync } from 'node:fs';
import path from 'node:path';

const getAppVersion = () => {
  const dirname = path.dirname(new URL(import.meta.url).pathname, '../apps');
  const filePath = path.resolve(dirname, '../apps');
  const files = readdirSync(filePath);
  return files.filter((file) => file.endsWith('.zip'))[0].slice(10, 17);
};

getAppVersion();
