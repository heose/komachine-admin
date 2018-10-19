import React from 'react';
import Link from 'next/link'
import {inject, observer} from 'mobx-react';
import CompanyListItem from './CompanyListItem';
import IsActiveFilter from './IsActiveFilter';

@inject(({store}) => {
  return {companyStore: store.companyStore};
})
@observer
class CompanyList extends React.Component {

  constructor(props) {
    super(props);
    this.handleClickPage = this.handleClickPage.bind(this);
    this.handleClickFilter = this.handleClickFilter.bind(this);
  }

  componentDidMount() {
  }

  handleClickPage = (page) => {
    const {companyStore} = this.props;
    companyStore.fetchCompanies({page});
  };

  handleClickFilter = (paramMap) => {
    const {companyStore} = this.props;
    companyStore.setFilter(paramMap);
  };


  render() {
    const {query, companyStore} = this.props;
    const {list, table} = companyStore;
    const listComponent = list.map(id => (
      <CompanyListItem key={id} {...table[id]} />
    ));
    const tableComponent = Object.keys(table).map((key) => (
      <div key={key}>
        {key}, {table[key].slug}
      </div>
    ));
    return (
      <div>
        <IsActiveFilter
          isActive={companyStore.isActive}
          handleClick={this.handleClickFilter}
          queryString={companyStore.queryString}
          options={companyStore.options}
        />
        <div>
          isActive: {companyStore.isActive}
        </div>
        <div>
          hasRelation: {companyStore.hasRelation}
        </div>
        <div>
          queryString: {companyStore.queryString}
        </div>
        <div>
          {companyStore.state}
        </div>
        <div>
          Page: {companyStore.page}
        </div>
        <div>
          List: {listComponent}
        </div>
        <div>
          <h3>Table</h3>
          {tableComponent}
          <br/>
        </div>
        <div>
          <Link href={`/companies?page=1${companyStore.queryString}`}><a>1</a></Link>
          <Link href={`/companies?page=2${companyStore.queryString}`}><a>2</a></Link>
          <Link href={`/companies?page=3${companyStore.queryString}`}><a>3</a></Link>
        </div>
      </div>
    );
  }
}

export default CompanyList;
