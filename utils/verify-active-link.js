import { isMatch } from 'lodash-es';

export default function verifyActiveLink(router, { url, query, onlyUrl = true }) {
  if (!router || !router.asPath) {
    return false;
  }
  const [a, b] = url.split('?');
  console.log(url);
  console.log('a', a);
  console.log('b', b);
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
