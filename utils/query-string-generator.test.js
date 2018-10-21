import generateQueryStr, {toMapFromQueryStr, excludeQueryStr, updateQueryStr} from './query-string-generator';


describe('generate query string test', () => {
  it('valid', () => {
    const genrated = generateQueryStr({page: 1, b: 'B'});
    expect(genrated).toBe('page=1&b=B');
  });
  it('should be ok', () => {
    const genrated = generateQueryStr({page: undefined, b: 'B', c: null});
    expect(genrated).toBe('b=B');
  });
});

describe('convert map from query string', () => {
  it('invalid query test', () => {
    expect(toMapFromQueryStr('a=1&b=2&c=&d')).toEqual({a: '1', b: '2'});
  });

  it('exclude query test', () => {
    expect(toMapFromQueryStr('a=1&b=2&c=&d', ['a'])).toEqual({b: '2'});
  });

  it('null test', () => {
    const a = {a: 1};
    expect({...a, ...{a: null}}).toEqual({a: null});
  });
});

describe('recompose query string', () => {
  it('not exclude', () => {
    expect(excludeQueryStr('a=1&b=2&c=&d')).toEqual('a=1&b=2');
  });

  it('recompose query test', () => {
    expect(excludeQueryStr('a=1&b=2&c=&d', ['a'])).toEqual('b=2');
  });
});

describe('update query string', () => {
  it('not update', () => {
    expect(updateQueryStr('a=1&b=2&c=&d')).toEqual('a=1&b=2');
  });

  it('recompose query test', () => {
    expect(updateQueryStr('a=1&b=2&c=&d', {a: 'a'})).toEqual('a=a&b=2');
    expect(updateQueryStr('a=1&b=2', {a: null})).toEqual('b=2')
  });
});
