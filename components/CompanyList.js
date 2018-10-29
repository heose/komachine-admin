import React from 'react';
import Link from 'components/Link';
import {inject, observer} from 'mobx-react';
import YesOrNoFilter from './YesOrNoFilter';
import Table from 'components/form/table';

import {Button} from './form/button/Button';


@inject(({store}) => {
  return {companyStore: store.companyStore};
})
@observer
class CompanyList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {query, companyStore} = this.props;
    const {list, table, page, hasPrev, hasNext, queryMap} = companyStore;
    const prevEnabled = hasPrev ? 'enabled' : 'disabled';
    const nextEnabled = hasNext ? 'enabled' : 'disabled';
    const prevPage = hasPrev ? Number(page) - 1 : Number(page);
    const nextPage = hasNext ? Number(page) + 1 : Number(page);
    const tableComponent = Object.keys(table).map((key) => (
      <div key={key}>
        {key}, {table[key].slug}
      </div>
    ));
    return (
      <div>
        <YesOrNoFilter
          label={'기업활성화여부'}
          queryMap={queryMap}
          checkKey={'isActive'}
        />
        <YesOrNoFilter
          label={'기업연동여부'}
          queryMap={queryMap}
          checkKey={'hasRelation'}
        />
        <Table list={list} table={table} />
        <div>
          <Link
            enabled={prevEnabled}
            href={`?page=${prevPage}${companyStore.queryString}`}
            component={Button}
            as={'a'}
            theme={{size: 'small', shape: 'square', enabled: prevEnabled}}
          >
            이전
          </Link>
          <Link
            enabled={nextEnabled}
            href={`?page=${nextPage}${companyStore.queryString}`}
            component={Button}
            as={'a'}
            theme={{size: 'small', shape: 'square', enabled: nextEnabled}}
          >
            다음
          </Link>
        </div>
      </div>
    );
  }
}

export default CompanyList;
