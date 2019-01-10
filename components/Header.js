import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GlobalNav from 'components/GlobalNav';
import Profile from './Profile';
import OptionNav from './OptionNav';
import IconButton from './IconButton';
import WorkingLogSVG from '../lib/svg/working-log.svg';
import ProfileSVG from '../lib/svg/profile.svg';

const Header = ({ viewTypesChooser, ...props }) => (
  <Div>
    <Link href="/" passHref>
      <HomeLink>
        <span>KOMACHINE</span>
      </HomeLink>
    </Link>
    <GlobalNav />
    <OptionNav />
    <IconButton label="작업로그" width="146px" height="90px" iconWidth="40px" fontColor="white" fontSize="15px">
      <WorkingLogSVG />
    </IconButton>
    <IconButton label="" width="146px" height="90px" iconWidth="40px" fontColor="white" fontSize="15px">
      <ProfileSVG />
    </IconButton>
    {/* {viewTypesChooser(props)} */}
    {/* <Profile /> */}
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
  /* box-shadow: 0 3px 6px; */
`;

const HomeLink = styled.a`
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  background-color: #3b3b53;
  width: 200px;
  letter-spacing: 5px;
  & span {
    color: white;
    margin-left: 20px;
  }
`;

export default Header;
