import React from 'react';
import PropTypes from 'prop-types';
import InputText from 'components/form/InputText';
import withLayout from '../../lib/with-layout';
import DefaultLayout from '../../layouts/DefaultLayout';

class CompanyEdit extends React.Component {
  static async getInitialProps({ query, store }) {
    return {};
  }

  render() {
    return (
      <div>
        기업등록
        <InputText id="test" label="이름" />
        <InputText id="test" label="비밀번호" type="password" />
      </div>
    );
  }
}

CompanyEdit.propTypes = {};

export default withLayout(DefaultLayout)(CompanyEdit);
