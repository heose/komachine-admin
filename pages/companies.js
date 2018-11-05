import React from 'react';
import PropTypes from 'prop-types';
import CompanyList from 'components/CompanyList';
import withLayout from '../lib/with-layout';
import DefaultLayout from '../layouts/DefaultLayout';

class Companies extends React.Component {
  static async getInitialProps({ query, rootStore }) {
    const { companyStore } = rootStore;
    await companyStore.fetchCompanies(query);
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

export default withLayout(DefaultLayout)(Companies);
