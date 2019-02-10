import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Link from '~/components/Link';
import FilterGroup from '~/components/FilterGroup';
import { Button } from '~/components/form/button/Button';
import Image from '~/components/Image';
import Checkbox from '~/components/Checkbox';
import ToggleBox from '~/components/ToggleBox';
import RadioButton from '~/components/RadioButton';
import DndFileUploader from '~/components/DnDFileUploader';
import Table from '~/components/Table';
import Search from '~/components/Search';
import withStatus from '~/lib/with-status';
import headerDataMap from '~/lib/table-header-data/company';
import Paginator from './Paginator';

function CompanyList({ lookups, entities, query, pagination }) {
  const page = Number(get(query, 'page', '1'));
  const bodyData = [];
  lookups.forEach(companyId => {
    const row = entities.company[companyId];
    const logoId = row.logo.find(id => entities.logo[id].language === 'ko') || row.logo[0];
    bodyData.push({
      ...row,
      logo: get(entities.logo, logoId, ''),
    });
  });
  const filters = [
    { id: 'filter-company-active', title: '기업활성화', name: 'company_active' },
    {
      id: 'filter-company-relation',
      title: '기업연동',
      name: 'related',
      values: ['approved', 'rejected'],
      labels: ['완료', '대기'],
    },
  ];
  return (
    <div>
      <Search />
      <Paginator page={page} {...pagination} />
      <FilterGroup filters={filters} />
      <Table headerData={headerDataMap('index')} data={bodyData} />
      <div />
      <Image
        src="https://cdn.komachine.com/media/2013-Porsche-Cayenne-Gts-1920x2560.jpeg"
        height="100px"
        width="auto"
        minWidth="133px"
      />
      <div>
        <Checkbox id="checkbox-test" name="checkbox-test">
          활성화
        </Checkbox>
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
      {/* <Link href="/companies/edit" component={Button} as="a" theme={{ size: 'small', shape: 'square', enabled: true }}>
        등록
      </Link> */}
    </div>
  );
}

CompanyList.propTypes = {
  entities: PropTypes.shape({}),
  lookups: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  query: PropTypes.objectOf(PropTypes.string),
};

CompanyList.defaultProps = {
  entities: {},
  lookups: [],
  query: {},
};

const mapStateToProps = ({ company }) => ({ ...company });

export default connect(mapStateToProps)(withStatus(CompanyList));
