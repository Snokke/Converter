
import { readFile } from './files';
import { converter, checkDuplicates } from './converter';

export default (pathToFile) => {
  const file = readFile(pathToFile);
  const lines = file.split('\r\n').map(line => line.trim());
  const goodAddresses = lines.map(address => (address !== '' ? converter(address) : ''));
  const finalAddresses = checkDuplicates(goodAddresses);
  return finalAddresses.join('\r\n');
};
