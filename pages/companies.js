import React from 'react';
import PropTypes from 'prop-types';
import CompanyList from 'components/CompanyList';
import CompanyViewType from 'components/CompanyViewType';
import { fetchRequest } from '../redux/modules/companies/reducers';
import withLayout from '../lib/with-layout';
import DefaultLayout from '../layouts/DefaultLayout';
import CompanySVG from '../lib/svg/company.svg';

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
      { label: '기업 관리', url: '/companies' },
      { label: '로고, 대표이미지 관리', url: '/companies/logo-img' },
      { label: '제품 관리(1차)', url: '/companies/prod/first' },
      { label: '제품 관리(2차)', url: '/companies/prod/second' },
    ],
  },
  viewTypesChooser: props => <CompanyViewType {...props} />,
};

export default withLayout(DefaultLayout, extraProps)(Companies);
