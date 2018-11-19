import React from 'react';
import PropTypes from 'prop-types';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import momtz from 'moment-timezone';
import Link from 'components/Link';
import YesOrNoFilter from 'components/YesOrNoFilter';
import Table from 'components/Table';
import Logo from 'components/Logo';
import { Button } from 'components/form/button/Button';

@inject(({ store }) => ({ companyStore: store.companyStore }))
@observer
class CompanyList extends React.Component {
  constructor(props) {
    super(props);
    const viewType = observable.box('company');
    // console.log(viewType);
  }
  render() {
    const { companyStore } = this.props;
    const { list, table, page, hasPrev, hasNext, queryMap } = companyStore;
    const prevEnabled = hasPrev ? 'enabled' : 'disabled';
    const nextEnabled = hasNext ? 'enabled' : 'disabled';
    const prevPage = hasPrev ? Number(page) - 1 : Number(page);
    const nextPage = hasNext ? Number(page) + 1 : Number(page);
    const headerData = [
      { key: 'title', str: '기업명', width: 'auto', render: 'title' },
      { key: 'logo', str: '로고', width: '15%', render: props => <Logo src={props.logo} height="30px" /> },
      {
        key: 'homepage',
        str: '웹사이트',
        width: '10%',
        render: props => (
          <a href={props.homepage} target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
            <FontAwesomeIcon icon="home" fixedWidth />
          </a>
        ),
      },
      { key: 'isActive', str: '기업활성화', width: '10%', render: 'isActive' },
      { key: 'hasRelation', str: '기업연동', width: '10%', render: 'hasRelation' },
      { key: 'productsCount', str: '제품수', width: '10%', render: 'productsCount' },
      {
        key: 'createdDate',
        str: '등록일',
        width: '15%',
        render: props =>
          moment(
            momtz(props.createdDate)
              .tz('Asia/Seoul')
              .format(),
          ).fromNow(),
      },
    ];
    const bodyData = list.map(id => table[id]);
    return (
      <div>
        <YesOrNoFilter label="기업활성화여부" queryMap={queryMap} checkKey="isActive" />
        <YesOrNoFilter label="기업연동여부" queryMap={queryMap} checkKey="hasRelation" />
        <Table headerData={headerData} data={bodyData} />
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
