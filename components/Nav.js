import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const Div = styled.div`
  width: 200px;
  background-color: #43425d;
  color: #ededf0;
`;

const NavWrap = styled.div`
  color: #ededf0;
`;

const NavItem = styled.a`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 50px;
  & span {
    color: #ededf0;
    padding-left: 20px;
  }
  &:hover {
    background-color: #3c3b53;
    &:before {
      display: block;
    }
  }
  &:before {
    display: none;
    position: absolute;
    left: 0;
    content: '';
    height: 100%;
    border-left: 5px solid #a3a0fb;
  }
`;

const Nav = () => {
  return (
    <Div>

      <NavWrap>
        <Link href={'/companies'} passHref>
          <NavItem>
            {/*<FontAwesomeIcon icon={faCoffee} fixedWidth />*/}
            <span>기업</span>
          </NavItem>
        </Link>
        <Link href={'/categories'} passHref>
          <NavItem>
            <span>카테고리</span>
          </NavItem>
        </Link>
        <Link href={'/terms'} passHref>
          <NavItem>
            <span>용어</span>
          </NavItem>
        </Link>
        <Link href={'/translations'} passHref>
          <NavItem>
            <span>번역</span>
          </NavItem>
        </Link>
        <Link href={'/settings'} passHref>
          <NavItem>
            <span>설정</span>
          </NavItem>
        </Link>
      </NavWrap>
    </Div>
  );
};

export default Nav;