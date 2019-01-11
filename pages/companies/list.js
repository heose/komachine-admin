import React from 'react';
import PropTypes from 'prop-types';
import CompanyList from 'components/CompanyList';
import CompanyViewType from 'components/CompanyViewType';
import withLayout from '../../lib/with-layout';
import CompanySVG from '../../lib/svg/company.svg';
import { fetchRequest } from '../../redux/modules/companies/reducers';
import DefaultLayout from '../../layouts/DefaultLayout';

class Companies extends React.Component {
  static async getInitialProps({ query, store }) {
    store.dispatch(fetchRequest(query));
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

Companies.propTypes = {
  query: PropTypes.objectOf(PropTypes.string).isRequired,
};

const extraProps = {
  sideNavData: {
    active: true,
    parentPageName: '기업',
    icon: <CompanySVG />,
    items: [
      { label: '기업 관리', href: '/companies' },
      { label: '로고, 대표이미지 관리', href: '/companies/logo-img' },
      { label: '제품 관리(1차)', href: '/companies/product/first' },
      { label: '제품 관리(2차)', href: '/companies/product/second' },
    ],
  },
  viewTypesChooser: props => <CompanyViewType {...props} />,
};

export default withLayout(DefaultLayout, extraProps)(Companies);