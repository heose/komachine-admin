import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Link from 'components/Link';
import generateQueryStr from '../utils/query-string-generator';
import {Button} from 'components/form/button/Button';


const Div = styled.div`
  //display: flex;
  //flex-flow: column nowrap;
  //align-items: flex-end;
`;

const Title = styled.div`
  
`;

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

const YesOrNoFilter = ({label, yes = '1', no = '0', queryMap = {}, checkKey = ''}) => {
  const value = queryMap[checkKey] || null;
  const getQueryStr = toBe => {
    const updatedMap = {...queryMap, ...{[checkKey]: toBe, page: 1}};
    return generateQueryStr(updatedMap);
  };
  const valueStrings = {null: '모두', 1: '네', 0: '아니오'};
  const title = label ? <Span>{label}</Span> : {};
  const filters = [null, yes, no].map(v => {
    const isActive = String(v) === String(value);
    const href = `?${getQueryStr(v)}`;
    const theme = {shape: 'round', size: 'medium'};
    return (
      <Link key={v} href={href} active={isActive} component={Button} as={'a'} theme={theme}>
        {valueStrings[v]}
      </Link>
    )
  });
  return (
    <Div>
      <Title>{title}</Title>
      <Filters>
        {filters}
      </Filters>
    </Div>
  );
};

export default YesOrNoFilter;