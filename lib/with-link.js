import React from 'react';
import Link from 'next/link';
import verifyActiveLink from '~/utils/verify-active-link';
import { generateQueryStr, toQueryMap } from '~/utils/query-string-generator';

export default Wrapped => ({ router, children, href, needFullMatch, enabled, ...props }) => {
  const handleClick = e => {
    if (enabled === 'disabled') {
      e.preventDefault();
    }
  };
  let child = children;
  const mergedHref = href.startsWith('?') ? `?${generateQueryStr({ ...router.query, ...toQueryMap(href) })}` : href;
  const extendedProps = { href: mergedHref, enabled, ...props };
  if (typeof children === 'object') {
    child = React.cloneElement(children, { isActive: verifyActiveLink(router, mergedHref, needFullMatch) });
  }
  return (
    <Link href={mergedHref} passHref>
      <Wrapped {...extendedProps} onClick={handleClick}>
        {child}
      </Wrapped>
    </Link>
  );
};
