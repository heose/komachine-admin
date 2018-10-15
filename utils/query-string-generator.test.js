import generateQueryStr from './query-string-generator';


describe('generate query string test', () => {
  it('should be ok', () => {
    const genrated = generateQueryStr({page: 1, b: 'B'});
    expect(genrated).toBe('?page=1&b=B');
  });
  it('should be ok', () => {
    const genrated = generateQueryStr({page: undefined, b: 'B', c: null});
    expect(genrated).toBe('?page=&b=B&c=');
  });
});