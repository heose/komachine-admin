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
  let child = children;
  const mergedHref = href.startsWith('?') ? `?${generateQueryStr({ ...router.query, ...toQueryMap(href) })}` : href;
  const omittedHref =
    href.startsWith('?') && omitMap && isMatch(toQueryMap(mergedHref), omitMap)
      ? `?${generateQueryStr(omit(toQueryMap(mergedHref), Object.keys(omitMap)))}`
      : mergedHref;
  const omittedKeysHref = `?${generateQueryStr(omit(toQueryMap(omittedHref), omitKeys))}`;
  const toVerifyHref = verifyHref || omittedKeysHref;
  if (typeof children === 'object') {
    child = React.cloneElement(children, { isActive: verifyActiveLink(router, toVerifyHref, needFullMatch) });
  }
  const extendedProps = { href: omittedKeysHref, enabled, ...props };
  return (
    <Link href={omittedKeysHref} passHref>
      <Wrapped {...extendedProps} onClick={handleClick}>
        {child}
      </Wrapped>
    </Link>
  );
};
