import React from "react";
import styled from "styled-components";
import Link from 'next/link';
import { withRouter } from "next/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";


const A = styled.a`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 50px;
  & > svg {
    padding-left: 20px;
  }
  & span {
    color: #ededf0;
    padding-left: 10px;
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
  ${({active}) => active && `
    background-color: #3c3b53;
    &:before {
      display: block;
    }
  `}
`;

const NavItem = ({router, href, title, icon}) => {
  return (
    <Link href={href} passHref>
      <A active={router.pathname === href}>
        <FontAwesomeIcon icon={icon} fixedWidth />
        <span>{title}</span>
      </A>
    </Link>
  )
};

export default withRouter(NavItem);