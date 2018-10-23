import React from 'react';
import styled from 'styled-components';
import NavItem from 'components/NavItem';


const Div = styled.div`
  width: 200px;
  background-color: #43425d;
  color: #ededf0;
`;

const NavWrap = styled.div`
  color: #ededf0;
`;

const Nav = () => {
  return (
    <Div>
      <NavWrap>
        <NavItem href="/companies" title="기업" icon={'coffee'} />
        <NavItem href="/categories" title="카테고리" icon={'coffee'} />
        <NavItem href="/terms" title="용어" icon={'coffee'} />
        <NavItem href="/translations" title="번역" icon={'coffee'} />
        <NavItem href="/settings" title="설정" icon={'coffee'} />
      </NavWrap>
    </Div>
  );
};

export default Nav;