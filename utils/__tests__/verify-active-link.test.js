import verifyActiveLink from '../verify-active-link';

describe('check if current url is active', () => {
  it('empty', () => {
    const router = { asPath: '/companies' };
    const activeTestData = { url: '/companies' };
    expect(verifyActiveLink(router, activeTestData)).toBeTruthy();
  });

  it('empty', () => {
    const router = { asPath: '/companies' };
    const activeTestData = { url: '/companies?a=b' };
    expect(verifyActiveLink(router, activeTestData)).toBeFalsy();
  });

  it('empty', () => {
    const router = { asPath: '/companies?a=b', query: { a: 'b', c: 'd' } };
    const activeTestData = { url: '/companies', query: { a: 'b' } };
    expect(verifyActiveLink(router, activeTestData)).toBeTruthy();
  });
});
