import React from 'react';
import styled from 'styled-components';
import NavItem from 'components/NavItem';

const Div = styled.div`
  width: 200px;
  min-width: 200px;
  background-color: #43425d;
  color: #ededf0;
`;

const NavWrap = styled.div`
  color: #ededf0;
`;

const Nav = () => (
  <Div>
    <NavWrap>
      <NavItem href="/companies" title="기업" icon="align-left" rotation={270} />
      <NavItem href="/categories" title="카테고리" icon="sitemap" />
      <NavItem href="/terms" title="용어" icon="list-alt" />
      <NavItem href="/translations" title="번역" icon="language" />
      <NavItem href="/settings" title="설정" icon="cogs" />
    </NavWrap>
  </Div>
  );

export default Nav;
