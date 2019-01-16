import React from 'react';
import Link from 'next/link';

export default Wrapped => ({ router, children, href, isActivePattern, enabled, ...props }) => {
  const handleClick = e => {
    if (enabled === 'disabled') {
      e.preventDefault();
    }
  };

  const regex = new RegExp(isActivePattern || `^\\${href}($|\\/[\\w\\/\\d]*|\\?).*`);
  let child = children;
  console.log(router);
  const isActive = { isActive: regex.test(router.asPath) };
  const extendedProps = { href, enabled, ...props };
  if (typeof children === 'object') {
    child = React.cloneElement(children, isActive);
  }
  return (
    <Link href={href} passHref>
      <Wrapped {...extendedProps} onClick={handleClick}>
        {child}
      </Wrapped>
    </Link>
  );
};
