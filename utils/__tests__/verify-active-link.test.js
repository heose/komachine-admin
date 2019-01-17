import verifyActiveLink from '../verify-active-link';

describe('check if current href is active(router is null)', () => {
  it('should false if router is null', () => {
    const router = null;
    const href = '/companies';
    expect(verifyActiveLink(router, href)).toBeFalsy();
  });
});

describe('check if current href is active(router is made up of only path)', () => {
  it('should true if router.asPath and href is full match', () => {
    const router = { asPath: '/companies/a/b' };
    const href = '/companies/a/b';
    expect(verifyActiveLink(router, href)).toBeTruthy();
  });

  it('should true if router.asPath contains href and begin by href', () => {
    const router = { asPath: '/companies/a/b/c' };
    const href = '/companies/a/b';
    expect(verifyActiveLink(router, href)).toBeFalsy();
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

describe('check if current path is active(router is made up of path and query)', () => {
  it('should true if router.asPath and href is full match', () => {
    const router = { asPath: '/companies?a=b' };
    const href = '/companies?a=b';
    expect(verifyActiveLink(router, href)).toBeTruthy();
  });

  it('should true if router.asPath and href is match only path', () => {
    const router = { asPath: '/companies?a=b' };
    const href = '/companies?a=b';
    expect(verifyActiveLink(router, href)).toBeTruthy();
  });

  it('should true if router.asPath contains href and begin by href', () => {
    const router = { asPath: '/companies/a/b/c?d=e' };
    const href = '/companies/a/b';
    expect(verifyActiveLink(router, href)).toBeFalsy();
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
