import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
`;

const A = styled.a`

`;

const Header = () => {
  return (
    <Div>
      <Link href="/">
        <a>
          KOMACHINE
        </a>
      </Link>
    </Div>
  )
};

export default Header;