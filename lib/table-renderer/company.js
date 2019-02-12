/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import get from 'lodash/get';
import momtz from 'moment-timezone';
import Image from '~/components/Image';
import ToggleBox from '~/components/ToggleBox';
import Checkbox from '~/components/Checkbox';
import Selector, { Div } from '~/components/Selector';

export default (key = 'index') => {
  const select = {
    key: 'select',
    width: '5%',
    header: actions => <Selector actions={actions} />,
    cell: (row, actions) => {
      const checkHandler = () => actions.selectRow(row.id);
      return (
        <Div>
          <Checkbox isActive={actions.isSelected(row.id)} checkHandler={checkHandler} />
        </Div>
      );
    },
  };
  const title = { key: 'title', header: '기업명', width: 'auto', cell: 'i18n.title' };
  const logo = {
    key: 'logo',
    width: '15%',
    header: '로고',
    cell: row => {
      const prefix = 'https://cdn.komachine.com/media';
      const src = `${prefix}/${get(row.logo, 'image_file', '')}`;
      return <Image src={src} height="40px" width="auto" minWidth="120px" minHeight="30px" />;
    },
  };
  const homepage = {
    key: 'homepage',
    header: '웹사이트',
    width: '10%',
    cell: ({ homepage: href }) => (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
        <FontAwesomeIcon icon="home" fixedWidth />
      </a>
    ),
  };
  const isActive = {
    key: 'isActive',
    header: '기업활성화',
    width: '10%',
    cell: ({ id, is_active }, actions) => {
      const toggleHandler = () => actions.toggleActive({ id, is_active: !is_active });
      return <ToggleBox isActive={is_active} toggleHandler={toggleHandler} />;
    },
  };
  const hasRelation = {
    key: 'hasRelation',
    header: '기업연동',
    width: '10%',
    cell: row => {
      const relationStr = row.has_relation === 1 ? '완료' : '대기';
      const style = row.has_relation === 1 ? { color: 'red', fontWeight: 'bold' } : { color: '#555555' };
      return <span style={style}>{relationStr}</span>;
    },
  };
  const productsCount = { key: 'productsCount', header: '제품수', width: '10%', cell: 'products_count' };
  const createdDate = {
    key: 'createdDate',
    header: '등록일',
    width: '15%',
    cell: ({ createdDate: date }) =>
      moment(
        momtz(date)
          .tz('Asia/Seoul')
          .format(),
      ).fromNow(),
  };

  const fieldMap = {
    index: [select, title, logo, homepage, isActive, hasRelation, productsCount],
  };
  return fieldMap[key];
};
