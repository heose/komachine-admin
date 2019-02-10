import React from 'react';
import styled, { css } from 'styled-components';
import Link from '~/components/Link';

function Paginator({ page, hasPrev, hasNext, pageCount }) {
  return (
    <Div>
      <Link href="?page=1" enabled={page > 1}>
        <Button>처음</Button>
      </Link>
      <Link href={`?page=${page > 1 ? page - 1 : 1}`} enabled={hasPrev}>
        <Button>이전</Button>
      </Link>

      <Link enabled={hasNext} href={`?page=${page < pageCount ? page + 1 : pageCount}`}>
        <Button>다음</Button>
      </Link>
      <Link href={`?page=${pageCount}`} enabled={page < pageCount}>
        <Button>마지막</Button>
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
