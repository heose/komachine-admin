import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import IconButton from 'components/IconButton';
import SideNavItem from 'components/SideNavItem';

function SideNav({ active, items, icon, ...props }) {
  return (
    <Div active={active}>
      <IconButton width="270px" height="133.5px" iconWidth="50px" color="#5c6bc0" bgColor="white">
        {icon}
      </IconButton>
      <Items>
        {items.map(item => (
          <Link key={item.label} {...item}>
            <SideNavItem {...item} {...props} />
          </Link>
        ))}
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
  icon: null,
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
