import React from 'react';
import PropTypes from 'prop-types';
import withLayout from '../../lib/with-layout';
import DefaultLayout from '../../layouts/DefaultLayout';

class CompanyEdit extends React.Component {
  static async getInitialProps({ query, store }) {
    return {};
  }

  render() {
    return <div>기업등록</div>;
  }
}

CompanyEdit.propTypes = {};

export default withLayout(DefaultLayout)(CompanyEdit);
