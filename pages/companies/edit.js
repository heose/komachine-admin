import React from 'react';
import InputText from '~/components/form/InputText';
import DropDown from '~/components/DropDown';
import DropDownText from '~/components/DropDownText';
import Flags from '~/components/Flags';
import InputButton from '~/components/InputButton';
import withLayout from '~/lib/with-layout';
import DefaultLayout from '~/layouts/DefaultLayout';

class CompanyEdit extends React.Component {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    const nationList = [
      { value: 'ko', label: <Flags nation="kr" /> },
      { value: 'en', label: <Flags nation="us" /> },
      { value: 'zh-hans', label: <Flags nation="cn" /> },
      { value: 'vi', label: <Flags nation="vn" /> },
    ];
    const listDemo = [
      { value: 'ko', label: '1. 사과' },
      { value: 'en', label: '2. 오렌지' },
      { value: 'zh-hans', label: '3. 수박' },
      { value: 'vi', label: '4. 키위' },
    ];
    return (
      <div>
        <div>
          <InputText id="i18n.company-name1" name="i18n.company_name" label="이름" width="200px" />
          <DropDown id="dropdown-test1" list={listDemo} width="100px" />
          <InputText id="i18n.company-name2" name="i18n.company_name" label="나이" width="200px" />
        </div>
        <div>
          <InputText id="i18n.company-name3" name="i18n.company_name" label="성별" width="100px" />
          <InputText id="i18n.company-name4" name="i18n.company_name" label="주소" width="200px" />
        </div>
        &nbsp;
        <div>
          <DropDownText id="dropdowntext-test1" list={nationList} width="200px" label="기업명" />
        </div>
        &nbsp;
        <div>
          <DropDownText id="dropdowntext-test2" list={nationList} width="200px" label="기업명" />
          <InputButton>저장</InputButton>
        </div>
      </div>
    );
  }
}

CompanyEdit.propTypes = {};

export default withLayout(DefaultLayout)(CompanyEdit);
