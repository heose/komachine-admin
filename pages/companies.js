import React from 'react';
import CompanyList from 'components/CompanyList';
import withLayout from '../lib/with-layout';
import DefaultLayout from '../layouts/DefaultLayout';


class Companies extends React.Component {

  static async getInitialProps ({req, query, rootStore}) {
    const isServer = !!req;
    const { companyStore } = rootStore;
    await companyStore.fetchCompanies(query);
    return { query }
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CompanyList query={this.props.query} />
      </div>
    );
  }
}

export default withLayout(DefaultLayout)(Companies);
