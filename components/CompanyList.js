import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import YesOrNoFilter from 'components/YesOrNoFilter';
import { Button } from 'components/form/button/Button';
import Image from 'components/Image';
import { generateQueryStr } from '../utils/query-string-generator';
import withViewType from '../lib/with-view-type';

function CompanyList({ list, table, page, hasPrev, hasNext, isActive, hasRelation, viewType, isFetching }) {
  const prevEnabled = hasPrev ? 'enabled' : 'disabled';
  const nextEnabled = hasNext ? 'enabled' : 'disabled';
  const prevPage = hasPrev ? Number(page) - 1 : Number(page);
  const nextPage = hasNext ? Number(page) + 1 : Number(page);

  const bodyData = list.map(id => table[id]);
  const queryMap = { isActive, hasRelation, page };
  const queryStr = generateQueryStr({ isActive, hasRelation });
  const Table = withViewType(viewType);
  return (
    <div>
      <Image
        src="https://cdn.komachine.com/media/2013-Porsche-Cayenne-Gts-1920x2560.jpeg"
        height="100px"
        width="auto"
        minWidth="133px"
      />
      <YesOrNoFilter label="기업활성화여부" queryMap={queryMap} checkKey="isActive" />
      <YesOrNoFilter label="기업연동여부" queryMap={queryMap} checkKey="hasRelation" />
      <Table data={bodyData} isFetching={isFetching} />
      <div>
        <Link
          enabled={prevEnabled}
          href={`?page=${prevPage}&${queryStr}`}
          component={Button}
          as="a"
          theme={{ size: 'small', shape: 'square', enabled: prevEnabled }}
        >
          이전
        </Link>
        <Link
          enabled={nextEnabled}
          href={`?page=${nextPage}&${queryStr}`}
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

CompanyList.propTypes = {
  table: PropTypes.shape({}),
  list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hasPrev: PropTypes.bool,
  hasNext: PropTypes.bool,
  isActive: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  hasRelation: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  viewType: PropTypes.number,
  isFetching: PropTypes.bool,
};

CompanyList.defaultProps = {
  table: {},
  list: [],
  page: '1',
  hasPrev: false,
  hasNext: false,
  isActive: null,
  hasRelation: null,
  viewType: 0,
  isFetching: false,
};

const mapStateToProps = state => {
  const { companies } = state;
  return { ...companies };
};

export default connect(mapStateToProps)(CompanyList);
