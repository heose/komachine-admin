/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import get from 'lodash/get';
import momtz from 'moment-timezone';
import Image from '~/components/Image';
import ToggleBox from '~/components/ToggleBox';

export default (key = 'index', actions) => {
  const title = { key: 'title', str: '기업명', width: 'auto', render: 'i18n.title' };
  const logo = {
    key: 'logo',
    str: '로고',
    width: '15%',
    render: row => {
      const prefix = 'https://cdn.komachine.com/media';
      const src = `${prefix}/${get(row.logo, 'image_file', '')}`;
      return <Image src={src} height="40px" width="auto" minWidth="120px" minHeight="30px" />;
    },
  };
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
    render: ({ id, is_active }) => {
      const toggleHandler = () => actions.toggleActive({ id, is_active: !is_active });
      return <ToggleBox isActive={is_active} toggleHandler={toggleHandler} />;
    },
  };
  const hasRelation = {
    key: 'hasRelation',
    str: '기업연동',
    width: '10%',
    render: row => {
      const relationStr = row.has_relation === 1 ? '완료' : '대기';
      const style = row.has_relation === 1 ? { color: 'red', fontWeight: 'bold' } : { color: '#555555' };
      return <span style={style}>{relationStr}</span>;
    },
  };
  const productsCount = { key: 'productsCount', str: '제품수', width: '10%', render: 'products_count' };
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

  const headerDataMap = {
    index: [title, logo, homepage, isActive, hasRelation, productsCount],
  };
  return headerDataMap[key];
};
