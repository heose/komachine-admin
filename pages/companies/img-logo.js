import React from 'react';
import PropTypes from 'prop-types';
import CompanyList from 'components/CompanyList';
import withLayout from '../../lib/with-layout';
import CompanySVG from '../../lib/svg/company.svg';
import { companyActions } from '../../redux/modules/companies/reducers';
import DefaultLayout from '../../layouts/DefaultLayout';

class Companies extends React.Component {
  static async getInitialProps({ req, query, store }) {
    store.dispatch(companyActions.company.fetchRequest({ query, req }));
    return { query };
  }

  render() {
    const { query } = this.props;
    return (
      <div>
        <CompanyList query={query} />
      </div>
    );
  }
}
/**
 * 기업관리 - 기업명, 로고, 웹사이트, 기업활성화, 제품활성화, 기업연동, 멤버등급, 제품수, 카테고리, 수정일
 * 로고    - 기업명, 웹사이트, 로고, 대표이미지, 기업활성화
 * 제품1차 - 기업명, 로고, 웹사이트, 기업활성화, 제품활성화, 우선순위, 1차완료, 제품수, 코멘트, 수정일
 * 제품2차 - 기업명, 로고, 웹사이트, 제품활성화, 우선순위, 제품수, 코멘트, 수정일
 */
Companies.propTypes = {
  query: PropTypes.objectOf(PropTypes.string).isRequired,
};

const extraProps = {
  sideNavData: {
    active: true,
    parentPageName: '기업',
    icon: <CompanySVG />,
    items: [
      {
        label: '기업 관리',
        href: '/companies',
        needFullMatch: true,
      },
      {
        label: '로고, 대표이미지 관리',
        href: '/companies/img-logo',
      },
      {
        label: '제품 관리(1차)',
        href: '/companies/prod-proc1',
      },
      {
        label: '제품 관리(2차)',
        href: '/companies/prod-proc2',
      },
    ],
  },
};

export default withLayout(DefaultLayout, extraProps)(Companies);
