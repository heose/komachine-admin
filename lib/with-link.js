import React from 'react';
import Link from 'next/link';
import isMatch from 'lodash/isMatch';
import omit from 'lodash/omit';
import verifyActiveLink from '~/utils/verify-active-link';
import { generateQueryStr, toQueryMap } from '~/utils/query-string-generator';

export const recomposeQueryStr = (source, href, ...omitQuerys) => {
  if (href.startsWith('?')) {
    const hrefMap = typeof href === 'string' ? toQueryMap(href) : href;
    let queryMap = { ...source, ...hrefMap };
    omitQuerys.forEach(query => {
      if (typeof query === 'object' && isMatch(queryMap, query)) {
        queryMap = omit(queryMap, Object.keys(query));
      } else if (Array.isArray(query)) {
        queryMap = omit(queryMap, query);
      }
    });
    return `?${generateQueryStr(queryMap)}`;
  }
  return href;
};

export default Wrapped => ({
  router,
  href,
  verifyHref,
  omitMap,
  omitKeys,
  needFullMatch,
  clickHandler,
  enabled = 'enabled',
  children,
  ...props
}) => {
  const handleClick = e => {
    if (clickHandler && typeof clickHandler === 'function') {
      clickHandler(e);
    }
    if (enabled === 'disabled' || !enabled) {
      e.preventDefault();
    }
  };
  let hyperlink = recomposeQueryStr(router.query, href, omitMap, omitKeys);
  hyperlink = hyperlink.endsWith('?') ? router.pathname : hyperlink;
  const toVerifyHref = verifyHref || hyperlink;
  let child = children;
  if (typeof children === 'object') {
    child = React.cloneElement(children, { isActive: verifyActiveLink(router, toVerifyHref, needFullMatch) });
  }
  const extendedProps = { href: hyperlink, enabled, ...props };
  return (
    <Link href={hyperlink} passHref>
      <Wrapped {...extendedProps} onClick={handleClick}>
        {child}
      </Wrapped>
    </Link>
  );
};
