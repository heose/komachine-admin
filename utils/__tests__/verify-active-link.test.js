import verifyActiveLink from '../verify-active-link';

describe('check if current url is active', () => {
  it('should false if router is null', () => {
    const router = null;
    const href = '/companies';
    expect(verifyActiveLink(router, href)).toBeFalsy();
  });
  it('should true if full match router.asPath and href', () => {
    const router = { asPath: '/companies/a/b' };
    const href = '/companies/a/b';
    expect(verifyActiveLink(router, href)).toBeTruthy();
  });

  it('should true if router.asPath contains href and begin by href', () => {
    const router = { asPath: '/companies/a/b/c' };
    const href = '/companies/a/b';
    expect(verifyActiveLink(router, href)).toBeFalsy();
  });

  it('should false if router.asPath does not begin by href', () => {
    const router = { asPath: '/companies/a/b/c' };
    const href = '/companies/a/b';
    expect(verifyActiveLink(router, href)).toBeFalsy();
  });
});
