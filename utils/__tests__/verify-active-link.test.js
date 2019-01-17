import verifyActiveLink from '../verify-active-link';

describe('check if href is active(router is null)', () => {
  it('should false if router is null', () => {
    const router = null;
    const href = '/companies';
    expect(verifyActiveLink(router, href)).toBeFalsy();
  });
});

describe('check if href is active(router is made up of only path)', () => {
  it('should true if router.asPath and href is full match', () => {
    const router = { asPath: '/companies/a/b' };
    const href = '/companies/a/b';
    expect(verifyActiveLink(router, href)).toBeTruthy();
  });

  it('should true if router.asPath contains href and begin by href', () => {
    const router = { asPath: '/companies/a/b/c' };
    const href = '/companies/a/b';
    expect(verifyActiveLink(router, href)).toBeTruthy();
  });

  it('should false if router.asPath contains href but not begin by href', () => {
    const router = { asPath: '/c/companies/a/b' };
    const href = '/companies/a/b';
    expect(verifyActiveLink(router, href)).toBeFalsy();
  });

  it('should false if router.asPath does not begin by href', () => {
    const router = { asPath: '/a/b' };
    const href = '/companies/a/b';
    expect(verifyActiveLink(router, href)).toBeFalsy();
  });
});

describe('check if href is active(href is made up of only query)', () => {
  it('should true if router.query and href is full match', () => {
    const router = { asPath: '/companies?a=b', query: { a: 'b' } };
    const href = '?a=b';
    expect(verifyActiveLink(router, href)).toBeTruthy();
  });

  it('should true if router.query and href is match just part', () => {
    const router = { asPath: '/companies?a=b&c=d', query: { a: 'b', c: 'd' } };
    const href = '?c=d';
    expect(verifyActiveLink(router, href)).toBeTruthy();
  });

  it('should true if router.query and href is match just part and random order', () => {
    const router = { asPath: '/companies?a=b&c=d&e=f', query: { a: 'b', c: 'd', e: 'f' } };
    const href = '?e=f&a=b';
    expect(verifyActiveLink(router, href)).toBeTruthy();
  });

  it('should false if router.query and href is not match', () => {
    const router = { asPath: '/companies?a=b&c=d&e=f', query: { a: 'b', c: 'd', e: 'f' } };
    const href = '?g=h';
    expect(verifyActiveLink(router, href)).toBeFalsy();
  });

  it('should false if router.query is empty', () => {
    const router = { asPath: '/companies', query: {} };
    const href = '?g=h';
    expect(verifyActiveLink(router, href)).toBeFalsy();
  });
});
