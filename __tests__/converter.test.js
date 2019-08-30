import { converter } from '../src/converter';

test('converter', () => {
  expect(converter('ул. Лыжная, 6')).toBe('Лыжная ул., д.6');
  expect(converter('пл. Гагарина, 3')).toBe('Гагарина пл., д.3');
  expect(converter('пр. Комсомольский, 15')).toBe('Комсомольский пр-т., д.15');
  expect(converter('ул. Белинского, 65А')).toBe('Белинского ул., д.65А');
  expect(converter('наб. Варкауса, 3')).toBe('Варкауса наб., д.3');
});
