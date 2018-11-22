import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import momtz from 'moment-timezone';
import Link from 'components/Link';
import YesOrNoFilter from 'components/YesOrNoFilter';
import Table from 'components/Table';
import Logo from 'components/Logo';
import { Button } from 'components/form/button/Button';

class CompanyList extends React.Component {
  constructor(props) {
    super(props);
    console.log('');
  }
  render() {
    const { list, table, page, hasPrev, hasNext, queryMap } = this.props;
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
            href={`?page=${prevPage}`}
            component={Button}
            as="a"
            theme={{ size: 'small', shape: 'square', enabled: prevEnabled }}
          >
            이전
          </Link>
          <Link
            enabled={nextEnabled}
            href={`?page=${nextPage}`}
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
  companies: PropTypes.shape({}),
};

CompanyList.defaultProps = {
  companies: {},
};

const mapStateToProps = state => {
  const { companies } = state;
  return { ...companies };
};

export default connect(mapStateToProps)(CompanyList);
