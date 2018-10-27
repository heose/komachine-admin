import React from 'react';
import Link from 'next/link';


export default (Wrapped) => {
  return ({href, children, enabled, ...props}) => {
    const handleClick = e => {
      if (enabled === 'disabled') {
        e.preventDefault();
      }
    };
    return (
      <Link href={href} passHref>
        <Wrapped {...props} onClick={handleClick}>{children}</Wrapped>
      </Link>
    );
  };
}