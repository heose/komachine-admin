import React from 'react';
import styled, { css } from 'styled-components';
import Link from '~/components/Link';

function Paginator({ page, hasPrev, hasNext, pageCount }) {
  console.log(page);
  return (
    <Div>
      {/* <Link enabled={hasPrev} isActive={hasPrev} href={`?page=${page > 1 ? page - 1 : 1}`}>
        <Button>Prev</Button>
      </Link> */}
      <Link isActive={hasNext} href={`?page=${page < pageCount ? page + 1 : pageCount}`}>
        <Button enabled={hasNext}>next</Button>
      </Link>
    </Div>
  );
}

const Div = styled.div`
  display: inline-block;
`;

const Button = styled.button`
  cursor: not-allowed;
  ${props =>
    props.enabled &&
    css`
      cursor: pointer;
    `}
`;

export default Paginator;
