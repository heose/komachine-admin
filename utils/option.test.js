import Option from './option';


describe('class Option test', () => {
  it('empty initialize test', () => {
    const option = new Option();
    expect(option.toString()).toBe('');
  });

  it('initialize test', () => {
    const option = new Option({a: 1, 'b': 2, c:null, d: undefined});
    expect(option.toString()).toBe('?a=1&b=2&c=&d=');
  });

  it('update test', () => {
    const option = new Option({a: 1, 'b': 2, c:null, d: undefined});
    option.update({c: 3});
    expect(option.toString()).toBe('?a=1&b=2&c=3&d=');
    option.update({a: 'a'});
    expect(option.toString()).toBe('?a=a&b=2&c=3&d=');
    option.update();
    expect(option.toString()).toBe('?a=a&b=2&c=3&d=');
  });

  it('exclude test', () => {
    const option = new Option({a: 1, 'b': 2, c:null, d: undefined});
    expect(option.excludedToString('a', 'b')).toBe('?c=&d=');
    expect(option.excludedToString('c')).toBe('?a=1&b=2&d=');
    expect(option.excludedToString()).toBe('?a=1&b=2&c=&d=');
    expect(option.toString()).toBe('?a=1&b=2&c=&d=');

  });
});