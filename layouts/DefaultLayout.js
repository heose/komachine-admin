import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from 'components/Header';
import SideNav from 'components/SideNav';
import Footer from 'components/Footer';
import NormalizeCSS from './normalize.css';
import GlobalStyle from './global-style';
import * as errorActions from '../redux/modules/error/reducers';

function DefaultLayout({ children, sideNavData, ...props }) {
  return (
    <Div>
      <NormalizeCSS />
      <GlobalStyle />
      <Header {...props} />
      <Central>
        <SideNav {...sideNavData} {...props} />
        <Page>{children}</Page>
      </Central>
      <Footer />
    </Div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  sideNavData: PropTypes.shape({
    active: PropTypes.bool,
    parentPageName: PropTypes.string,
    icon: PropTypes.node,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        href: PropTypes.string,
        needFullMatch: PropTypes.bool,
      }),
    ),
  }),
};

DefaultLayout.defaultProps = {
  children: null,
  sideNavData: {},
};

export const Div = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  min-height: 100%;
  min-width: 1400px;
  overflow: scroll;
  height: auto;
`;

export const Central = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1 0 auto;
  min-height: 500px;
  overflow: scroll;
`;

export const Page = styled.div`
  flex: 1 1 auto;
  background-color: #f0f0f7;
  padding: 10px 0 20px 20px;
`;

export default connect(
  ({ error }) => ({ ...error }),
  dispatch => ({ ErrorActions: bindActionCreators(errorActions, dispatch) }),
)(DefaultLayout);
