import isMatch from 'lodash/isMatch';

export default function verifyActiveLink(router, { url, query, onlyUrl = true }) {
  if (!router || !router.asPath) {
    return false;
  }
  const path = router.asPath.split('?')[0];
  const regexUrl = new RegExp(onlyUrl ? `^\\${url}$` : `^\\${url}($|\\/[\\w\\/\\d]*$).*`);
  if (!regexUrl.test(path)) {
    return false;
  }
  if (query && !isMatch(router.query, query)) {
    return false;
  }
  return true;
}
