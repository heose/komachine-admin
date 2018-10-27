import React from 'react';
import Link from 'next/link';


export default (Wrapped) => {
  return ({href, children, ...props}) => {
    // console.log(props);
    return (
      <Link href={href} passHref>
        <Wrapped {...props}>{children}</Wrapped>
      </Link>
    );
  };
}