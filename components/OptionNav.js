import React from 'react';
import styled from 'styled-components';
import IndustrySVG from '../lib/svg/industry.svg';
import DistrictSVG from '../lib/svg/district.svg';
import UserSVG from '../lib/svg/user.svg';
import OptionNavItem from './OptionNavItem';

function OptionNav() {
  return (
    <Div>
      <OptionNavItem label="산업단지">
        <IndustrySVG />
      </OptionNavItem>
      <OptionNavItem label="행정구역">
        <DistrictSVG />
      </OptionNavItem>
      <OptionNavItem label="유저">
        <UserSVG />
      </OptionNavItem>
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
