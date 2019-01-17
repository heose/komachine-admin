import React from 'react';
import Link from 'next/link';
import verifyActiveLink from '../utils/verify-active-link';

export default Wrapped => ({ router, children, href, needFullMatch, enabled, ...props }) => {
  const handleClick = e => {
    if (enabled === 'disabled') {
      e.preventDefault();
    }
  };
  let child = children;
  const extendedProps = { href, enabled, ...props };
  if (typeof children === 'object') {
    child = React.cloneElement(children, { isActive: verifyActiveLink(router, href, needFullMatch) });
  }
  return (
    <Link href={href} passHref>
      <Wrapped {...extendedProps} onClick={handleClick}>
        {child}
      </Wrapped>
    </Link>
  );
};
