import React from 'react';
import styled from 'styled-components';
import Link from 'components/Link';
import generateQueryStr from '../utils/query-string-generator';
import Button from 'components/form/button/Button';


const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
`;

const Title = styled.div`
  
`;

const Span = styled.div`
  font-size: 1.2rem;
  flex: 1 0 100%;
  margin: 0 0 5px 10px;
  justify-content: flex-end;
`;

const Filters = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const YesOrNoFilter = ({
  label,
  yes = '1',
  no = '0',
  queryMap = {},
  checkKey = '',
}) => {
  const value = queryMap[checkKey] || null;
  const isAll = value !== yes && value !== no;
  const getQueryStr = (toBe) => {
    const updatedMap = {...queryMap, ...{[checkKey]: toBe, page: 1}};
    return generateQueryStr(updatedMap);
  };
  const title = label ? <Span>{label}</Span> : {};
  return (
    <Div>
      <Title>{title}</Title>
      <Filters>
        <Link href={`?${getQueryStr()}`} active={isAll} component={Button} as={'a'}>모두</Link>
        <Link href={`?${getQueryStr(yes)}`} active={String(value) === String(yes) ? 1 : 0} component={Button}>네</Link>
        <Link href={`?${getQueryStr(no)}`} active={String(value) === String(no) ? 1 : 0} component={Button}>아니오</Link>
      </Filters>
    </Div>
  );
};

export default YesOrNoFilter;