import Link from 'next/link';
import React from 'react';
import CompanyList from '../components/CompanyList';


export default class Companies extends React.Component {

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
        <p>Companies Page</p>
        <CompanyList query={this.props.query} />
        <Link href="/">
          <a>home</a>
        </Link>
      </div>
    );
  }
}
