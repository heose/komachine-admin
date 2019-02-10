import React from 'react';
import { withRouter } from 'next/router';
import NextLink from 'next/link';
import styled from 'styled-components';
import verifyActiveLink from '~/utils/verify-active-link';
import { recomposeQueryStr } from '~/utils/query-string';

function Link({
  router,
  href,
  verifyHref = href,
  omitMap,
  omitKeys,
  needFullMatch,
  enabled = 'enabled',
  children,
  ...props
}) {
  const handleClick = e => {
    if (enabled === 'disabled' || !enabled) {
      e.preventDefault();
    }
  };
  let hyperlink = recomposeQueryStr(router.query, href, omitMap, omitKeys);
  hyperlink = hyperlink.endsWith('?') ? router.pathname : hyperlink;
  let child = children;
  if (typeof children === 'object') {
    const { isActive } = children.props;
    child = React.cloneElement(children, {
      isActive: isActive || verifyActiveLink(router, verifyHref, needFullMatch),
      enabled,
      ...props,
    });
  }
  // const extendedProps = { href: hyperlink, enabled, ...props };
  return (
    <NextLink href={hyperlink} passHref>
      <A onClick={handleClick}>{child}</A>
    </NextLink>
  );
}

const A = styled.a``;
export default withRouter(Link);
