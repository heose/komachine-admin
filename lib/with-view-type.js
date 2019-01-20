import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import momtz from 'moment-timezone';
import Table from 'components/Table';
import Image from 'components/Image';
import ToggleBox from 'components/ToggleBox';

const withViewType = viewType => props => {
  const title = { key: 'title', str: '기업명', width: 'auto', render: 'title' };
  const logo = {
    key: 'logo',
    str: '로고',
    width: '15%',
    render: ({ logo: src }) => (
      <Image src={src} height="40px" width="auto" minWidth="120px" minHeight="30px" isFetching={props.isFetching} />
    ),
  };
  const logoStr = { key: 'logo', str: '로고', width: 'auto', render: 'logo' };
  const homepage = {
    key: 'homepage',
    str: '웹사이트',
    width: '10%',
    render: ({ homepage: href }) => (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
        <FontAwesomeIcon icon="home" fixedWidth />
      </a>
    ),
  };
  const isActive = {
    key: 'isActive',
    str: '기업활성화',
    width: '10%',
    render: ({ id, isActive: active }) => {
      const toggleHandler = toggleId => console.log(`${toggleId} call toggle handler`);
      return <ToggleBox id={id} isActive={active} toggleHandler={toggleHandler} />;
    },
  };
  const hasRelation = { key: 'hasRelation', str: '기업연동', width: '10%', render: 'hasRelation' };
  const productsCount = { key: 'productsCount', str: '제품수', width: '10%', render: 'productsCount' };
  const createdDate = {
    key: 'createdDate',
    str: '등록일',
    width: '15%',
    render: ({ createdDate: date }) =>
      moment(
        momtz(date)
          .tz('Asia/Seoul')
          .format(),
      ).fromNow(),
  };
  let headerData = [title, logo, homepage, isActive, hasRelation, productsCount, createdDate];
  if (viewType === 1) {
    headerData = [title, logo, homepage, isActive, hasRelation];
  } else if (viewType === 2) {
    headerData = [title, logoStr, homepage, productsCount, createdDate];
  }
  return <Table headerData={headerData} {...props} />;
};

export default withViewType;
