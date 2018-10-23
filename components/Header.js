import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import ViewType from './ViewType';
import Profile from './Profile';

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
`;

const HomeLink = styled.a`
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  background-color: #3c3b53;
  width: 200px;
  letter-spacing: 5px;
  & span {
    color: white;
    margin-left: 20px;
  }
`;

const Header = () => {
  return (
    <Div>
      <Link href="/" passHref>
        <HomeLink>
          <span>KOMACHINE</span>
        </HomeLink>
      </Link>
      <ViewType />
      <Profile />
    </Div>
  )
};

export default Header;