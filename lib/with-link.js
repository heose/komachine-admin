import React from 'react';
import Link from 'next/link';

export default Wrapped => ({ router, href, children, enabled, ...props }) => {
  const handleClick = e => {
    if (enabled === 'disabled') {
      e.preventDefault();
    }
  };
  const regex = new RegExp(`^\\${href}($|\\/[\\w\\/\\d]*$)`);
  let child = children;
  if (typeof children === 'object') {
    child = React.cloneElement(children, { active: regex.test(router.asPath) });
  }
  return (
    <Link href={href} passHref>
      <Wrapped active={regex.test(router.asPath)} href={href} enabled={enabled} {...props} onClick={handleClick}>
        {child}
      </Wrapped>
    </Link>
  );
};
