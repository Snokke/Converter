import { getStreetTypes } from './files';

const streets = getStreetTypes();

const findStreetType = (str) => {
  let resultType = '';
  Object.keys(streets).forEach((type) => {
    const currentType = streets[type].some(regex => RegExp(`^${regex}`).test(str.toLowerCase()));
    if (currentType) {
      resultType = type;
    }
  });
  return resultType;
};

const checkDuplicates = (addresses) => {
  const resultAddresses = addresses;
  resultAddresses.forEach((address, index) => {
    let duplicateNum = 1;
    for (let i = 0; i < resultAddresses.length; i += 1) {
      if (address !== '' && i !== index && address === resultAddresses[i]) {
        if (duplicateNum === 1) {
          resultAddresses[index] = `${resultAddresses[i]}, поз.${duplicateNum}`;
          duplicateNum += 1;
        }
        resultAddresses[i] = `${resultAddresses[i]}, поз.${duplicateNum}`;
        duplicateNum += 1;
      }
    }
  });
  return addresses;
};

const converter = (address) => {
  const parts = address.split(' ');

  const streetType = parts.map(part => findStreetType(part)).filter(el => el !== '')[0];
  const streetName = parts[1].replace(/[,\.]/g, '');
  const buildingNumber = parts[2];

  const goodAddress = `${streetName} ${streetType}., д.${buildingNumber}`;

  return goodAddress;
};

export { converter, checkDuplicates };
