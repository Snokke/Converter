import fs from 'fs';
import path from 'path';

const readFile = pathToFile => fs.readFileSync(pathToFile, 'utf-8');

const getStreetTypes = (pathToFile = 'streets.json') => {
  const pathToJson = path.join(__dirname, pathToFile);
  const file = readFile(pathToJson);
  return JSON.parse(file);
};

export { readFile, getStreetTypes };
