import {parseFirebaseObjetToHomeItem} from '../../src/utils/parse';

const mock = {
  '-MY6OCtsSsRskHDI4_gA': {
    completed: false,
    description: 'Teste novo 1',
    title: 'Frigideira 3',
  },
  '-MY6OFR_99-wRVebNqXp': {
    completed: true,
    description: 'Teste novo 2',
    title: 'Geladeira',
  },
};

it('should return a HomeItem Object', () => {
  const result = parseFirebaseObjetToHomeItem(mock);
  expect(result.length).toBe(2);

  expect(result[0].id).toBe('-MY6OCtsSsRskHDI4_gA');
  expect(result[0].completed).toBe(false);
  expect(result[0].description).toBe('Teste novo 1');
  expect(result[0].title).toBe('Frigideira 3');

  expect(result[1].id).toBe('-MY6OFR_99-wRVebNqXp');
  expect(result[1].completed).toBe(true);
  expect(result[1].description).toBe('Teste novo 2');
  expect(result[1].title).toBe('Geladeira');
});
