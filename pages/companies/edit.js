import React from 'react';
import InputText from 'components/form/InputText';
import DropDown from 'components/DropDown';
import withLayout from '../../lib/with-layout';
import DefaultLayout from '../../layouts/DefaultLayout';

class CompanyEdit extends React.Component {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    const listDemo = [
      { value: 'ko', label: '한국어' },
      { value: 'en', label: '영어' },
      { value: 'zh-hans', label: '중국어' },
      { value: 'vi', label: '베트남어' },
    ];
    return (
      <div>
        기업등록
        <InputText id="i18n.company-name" name="i18n.company_name" label="기업명" width="200px" />
        <InputText id="password-test" label="비밀번호" type="password" />
        <DropDown id="dropdown-test1" list={listDemo} width="100px" />
      </div>
    );
  }
}

CompanyEdit.propTypes = {};

export default withLayout(DefaultLayout)(CompanyEdit);
