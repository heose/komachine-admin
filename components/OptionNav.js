import React from 'react';
import styled from 'styled-components';
import IndustrySVG from '../lib/svg/complex.svg';
import DistrictSVG from '../lib/svg/district.svg';
import UserSVG from '../lib/svg/user.svg';
import IconButton from './IconButton';

function OptionNav() {
  const props = {
    width: '148.48px',
    height: '30px',
    iconWidth: '15px',
    color: '#9fabda',
    fontSize: '15px',
    labelMinWidth: '51.86666px',
  };
  return (
    <Div>
      <IconButton label="산업단지" {...props}>
        <IndustrySVG />
      </IconButton>
      <IconButton label="행정구역" {...props}>
        <DistrictSVG />
      </IconButton>
      <IconButton label="유저" {...props}>
        <UserSVG />
      </IconButton>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 148.48px;
  height: 90px;
`;

export default OptionNav;
