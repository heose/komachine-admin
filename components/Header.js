import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GlobalNav from '~/components/GlobalNav';
import WorkingLogSVG from '~/lib/svg/working-log.svg';
import ProfileSVG from '~/lib/svg/profile.svg';
import OptionNav from './OptionNav';
import IconButton from './IconButton';

const Header = () => (
  <Div>
    <Link href="/" passHref>
      <HomeLink>
        <span>KOMACHINE</span>
      </HomeLink>
    </Link>
    <TopMenus>
      <GlobalNav />
      <OptionNav />
      <IconButton label="작업로그" width="146px" height="90px" iconWidth="40px" color="white" fontSize="15px">
        <WorkingLogSVG />
      </IconButton>
      <IconButton label="" width="100px" height="90px" iconWidth="40px" color="white" fontSize="15px">
        <ProfileSVG />
      </IconButton>
    </TopMenus>
  </Div>
);

Header.propTypes = {
  viewTypesChooser: PropTypes.func,
};

Header.defaultProps = {
  viewTypesChooser: () => {},
};

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 90px;
  display: flex;
  flex-flow: row nowrap;
  background-color: #43425d;
`;

const HomeLink = styled.a`
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  background-color: #3b3b53;
  width: 270px;
  letter-spacing: 5px;
  & span {
    color: white;
    margin-left: 20px;
  }
`;

const TopMenus = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
  margin-right: 30px;
`;

export default Header;
