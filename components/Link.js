import React from 'react';
import NextLink from 'next/link';
import {compose, defaultProps, componentFromProp} from 'recompose';


const enhance = compose(defaultProps({component: 'a'}));
const A = enhance(componentFromProp('component'));

const Link = ({href, children, ...props}) => {
  return (
    <NextLink href={href} passHref>
      <A {...props} as={'a'}>{children}</A>
    </NextLink>
  )
};

export default Link;

