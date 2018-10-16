test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

describe('default test', () => {
  it('', () => {
    expect(2 + 2).toBe(4);
  });
  it('test2', () => {
    expect(2 + 2).toBe(4);
  });
});