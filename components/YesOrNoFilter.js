import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import { Button } from 'components/form/button/Button';
import { generateQueryStr } from '../utils/query-string-generator';

const YesOrNoFilter = ({ label, yes, no, queryMap, checkKey, valueStrings }) => {
  const value = queryMap[checkKey] || null;
  const getQueryStr = toBe => {
    const updatedMap = { ...queryMap, ...{ [checkKey]: toBe, page: '1' } };
    return generateQueryStr(updatedMap);
  };
  const filters = [null, yes, no].map(v => {
    const isActive = String(v) === String(value);
    const href = `?${getQueryStr(v)}`;
    const theme = { ...Button.defaultProps.theme, shape: 'round' };
    return (
      <Link key={v} href={href} active={isActive} component={Button} as="a" theme={theme}>
        {valueStrings[v]}
      </Link>
    );
  });
  return (
    <Div>
      <Title>
        <Span>{label}</Span>
      </Title>
      <Filters>{filters}</Filters>
    </Div>
  );
};

YesOrNoFilter.propTypes = {
  label: PropTypes.string,
  yes: PropTypes.string,
  no: PropTypes.string,
  queryMap: PropTypes.objectOf(PropTypes.any),
  checkKey: PropTypes.string,
  valueStrings: PropTypes.objectOf(PropTypes.string),
};

YesOrNoFilter.defaultProps = {
  label: '',
  yes: '1',
  no: '0',
  queryMap: {},
  checkKey: '',
  valueStrings: { null: '모두', 1: '네', 0: '아니오' },
};

const Div = styled.div`
  //display: flex;
  //flex-flow: column nowrap;
  //align-items: flex-end;
`;

const Title = styled.div``;

const Span = styled.div`
  //font-size: 1.2rem;
  //flex: 1 0 100%;
  //margin: 0 0 5px 10px;
  //justify-content: flex-end;
`;

const Filters = styled.div`
  //display: flex;
  //flex-flow: row nowrap;
`;

export default YesOrNoFilter;
