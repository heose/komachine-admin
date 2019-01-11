import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavItem from 'components/NavItem';
import Link from 'components/Link';
import IconButton from 'components/IconButton';
import SideNavItem from 'components/SideNavItem';

function SideNav({ active, items, icon }) {
  return (
    <Div active={active}>
      <IconButton width="270px" height="133.5px" iconWidth="50px" color="#5c6bc0" bgColor="white">
        {icon}
      </IconButton>
      <Items>
        {items.map(item => (
          <Link key={item.label} {...item}>
            <SideNavItem {...item} />
          </Link>
        ))}
        {/* <NavItem href="/companies" title="기업" icon="align-left" rotation={270} />
        <NavItem href="/categories" title="카테고리" icon="sitemap" />
        <NavItem href="/terms" title="용어" icon="list-alt" />
        <NavItem href="/translations" title="번역" icon="language" />
        <NavItem href="/settings" title="설정" icon="cogs" /> */}
      </Items>
      <GoToKomachine>코머신 사이트로</GoToKomachine>
    </Div>
  );
}

SideNav.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  ),
};

SideNav.defaultProps = {
  active: false,
  items: [],
  icon: () => {},
};

const Div = styled.div`
  position: relative;
  width: 270px;
  min-width: 200px;
  background-color: #a5a4bf;
  color: #ededf0;
  display: ${props => (props.active ? 'block' : 'none')};
`;

const Items = styled.div`
  margin-top: 20px;
`;

const GoToKomachine = styled.div`
  position: absolute;
  bottom: 0;
`;

export default SideNav;
