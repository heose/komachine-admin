import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Link from 'components/Link';
import YesOrNoFilter from 'components/YesOrNoFilter';
import { Button } from 'components/form/button/Button';
import Image from 'components/Image';
import Checkbox from 'components/Checkbox';
import ToggleBox from 'components/ToggleBox';
import RadioButton from 'components/RadioButton';
import DndFileUploader from 'components/DnDFileUploader';
import withStatus from 'lib/with-status';
import { generateQueryStr } from '../utils/query-string-generator';
import withViewType from '../lib/with-view-type';

function CompanyList({ lookups, entities, page, hasPrev, hasNext, isActive, hasRelation, viewType, isFetching }) {
  const prevEnabled = hasPrev ? 'enabled' : 'disabled';
  const nextEnabled = hasNext ? 'enabled' : 'disabled';
  const prevPage = hasPrev ? Number(page) - 1 : Number(page);
  const nextPage = hasNext ? Number(page) + 1 : Number(page);

  const bodyData = [];
  lookups.forEach(companyId => {
    const row = entities.company[companyId];
    const logoId = row.logo.find(id => entities.logo[id].language === 'ko') || row.logo[0];
    bodyData.push({
      ...row,
      logo: get(entities.logo, logoId, ''),
    });
  });
  const queryMap = { isActive, hasRelation, page };
  const queryStr = generateQueryStr({ isActive, hasRelation });
  const Table = withViewType(viewType);
  return (
    <div>
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
      <Image
        src="https://cdn.komachine.com/media/2013-Porsche-Cayenne-Gts-1920x2560.jpeg"
        height="100px"
        width="auto"
        minWidth="133px"
      />
      <div>
        <Checkbox name="test" />
      </div>
      <div>
        <ToggleBox id="111">토글박스</ToggleBox>
      </div>
      <div>
        <RadioButton id="rb-1" name="rb-test">
          라디오버튼1
        </RadioButton>
        <RadioButton id="rb-2" name="rb-test">
          라디오버튼2
        </RadioButton>
        <RadioButton id="rb-3" name="rb-test">
          라디오버튼3
        </RadioButton>
      </div>
      <div>
        <DndFileUploader />
      </div>
      &nbsp;&nbsp;
      <Link href="/companies/edit" component={Button} as="a" theme={{ size: 'small', shape: 'square', enabled: true }}>
        등록
      </Link>
      <YesOrNoFilter label="기업활성화여부" queryMap={queryMap} checkKey="isActive" />
      <YesOrNoFilter label="기업연동여부" queryMap={queryMap} checkKey="hasRelation" />
    </div>
  );
}

CompanyList.propTypes = {
  entities: PropTypes.shape({}),
  lookups: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hasPrev: PropTypes.bool,
  hasNext: PropTypes.bool,
  isActive: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  hasRelation: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  viewType: PropTypes.number,
  isFetching: PropTypes.bool,
};

CompanyList.defaultProps = {
  entities: {},
  lookups: [],
  page: '1',
  hasPrev: false,
  hasNext: false,
  isActive: null,
  hasRelation: null,
  viewType: 0,
  isFetching: false,
};

const mapStateToProps = ({ company }) => ({ ...company });

export default connect(mapStateToProps)(withStatus(CompanyList));
