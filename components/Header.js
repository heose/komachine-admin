import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
`;

const HomeLink = styled.a`
  text-decoration: none;
`;

const Header = () => {
  return (
    <Div>
      <Link href="/" passHref>
        <HomeLink>
          KOMACHINE
        </HomeLink>
      </Link>
    </Div>
  )
};

export default Header;