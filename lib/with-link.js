import React from 'react';
import Link from 'next/link';
import isMatch from 'lodash/isMatch';
import omit from 'lodash/omit';
import verifyActiveLink from '~/utils/verify-active-link';
import { generateQueryStr, toQueryMap } from '~/utils/query-string-generator';

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
  let hyperlink = href;
  if (hyperlink.startsWith('?')) {
    let queryMap = { ...router.query, ...toQueryMap(hyperlink) };
    if (omitMap && isMatch(queryMap, omitMap)) {
      queryMap = omit(queryMap, Object.keys(omitMap));
    }
    queryMap = omit(queryMap, omitKeys);
    hyperlink = `?${generateQueryStr(queryMap)}`;
  }
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
