import Option from '../option';

describe('class Option test', () => {
  it('empty initialize test', () => {
    const option = new Option();
    expect(option.toString()).toBe('');
  });

  it('initialize test', () => {
    const option = new Option({ a: 1, b: 2, c: null, d: undefined });
    expect(option.toString()).toBe('a=1&b=2');
  });

  it('update test', () => {
    const option = new Option({ a: 1, b: 2, c: null, d: undefined });
    option.update({ c: 3 });
    expect(option.toString()).toBe('a=1&b=2&c=3');
    option.update({ a: 'a' });
    expect(option.toString()).toBe('a=a&b=2&c=3');
    option.update();
    expect(option.toString()).toBe('a=a&b=2&c=3');
  });

  it('exclude test', () => {
    const option = new Option({ a: 1, b: 2, c: null, d: undefined });
    expect(option.excludedToString('a', 'b')).toBe('');
    expect(option.excludedToString('c')).toBe('a=1&b=2');
    expect(option.excludedToString()).toBe('a=1&b=2');
    expect(option.toString()).toBe('a=1&b=2');
  });
});
