// import { isMatch } from 'lodash-es'; //왜 이건 안되는거지?..
import isMatch from 'lodash/isMatch';
import has from 'lodash/has';
import { toMapFromQueryStr } from './query-string';

export default function verifyActiveLink(router, href, needFullMatch = false) {
  if (!router || !router.asPath) {
    return false;
  }
  const [hrefPath, hrefQuery] = href.split('?');
  if (hrefPath) {
    const routerPath = router.asPath.split('?')[0];
    const regex = new RegExp(needFullMatch ? `^\\${hrefPath}$` : `^\\${hrefPath}($|\\/[\\w\\d\\-\\_\\/]*$).*`);
    if (regex.test(routerPath)) {
      return true;
    }
  }
  if (hrefQuery) {
    if (isMatch(router.query, toMapFromQueryStr(hrefQuery))) {
      return true;
    }
    if (!has(router.query, 'page') && hrefQuery === 'page=1') {
      return true;
    }
  }
  return false;
}
