import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import YesOrNoFilter from 'components/YesOrNoFilter';
// import Table from 'components/form/table';
import { Button } from 'components/form/button/Button';
import CompanyListItem from 'components/CompanyListItem';
import Table from 'components/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

@inject(({ store }) => ({ companyStore: store.companyStore }))
@observer
class CompanyList extends React.Component {
  render() {
    const { companyStore } = this.props;
    const { list, table, page, hasPrev, hasNext, queryMap } = companyStore;
    const prevEnabled = hasPrev ? 'enabled' : 'disabled';
    const nextEnabled = hasNext ? 'enabled' : 'disabled';
    const prevPage = hasPrev ? Number(page) - 1 : Number(page);
    const nextPage = hasNext ? Number(page) + 1 : Number(page);
    const companyListItem = list.map(id => <CompanyListItem key={id} {...table[id]} />);
    const headerData = [
      { key: 'title', str: '기업명', width: '50%', render: 'title' },
      {
        key: 'homepage',
        str: '홈페이지',
        width: '50%',
        render: props => (
          <a href={props.homepage} target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
            <FontAwesomeIcon icon="home" fixedWidth />
          </a>
        ),
      },
    ];
    const bodyData = list.map(id => table[id]);
    return (
      <div>
        <YesOrNoFilter label="기업활성화여부" queryMap={queryMap} checkKey="isActive" />
        <YesOrNoFilter label="기업연동여부" queryMap={queryMap} checkKey="hasRelation" />
        <Table headerData={headerData} data={bodyData} />
        {companyListItem}
        {/* <Table list={list} table={table} /> */}
        <div>
          <Link
            enabled={prevEnabled}
            href={`?page=${prevPage}${companyStore.queryString}`}
            component={Button}
            as="a"
            theme={{ size: 'small', shape: 'square', enabled: prevEnabled }}
          >
            이전
          </Link>
          <Link
            enabled={nextEnabled}
            href={`?page=${nextPage}${companyStore.queryString}`}
            component={Button}
            as="a"
            theme={{ size: 'small', shape: 'square', enabled: nextEnabled }}
          >
            다음
          </Link>
        </div>
      </div>
    );
  }
}

CompanyList.propTypes = {
  companyStore: PropTypes.shape({}),
};

CompanyList.defaultProps = {
  companyStore: {},
};

export default CompanyList;
