import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import {updateQueryStr} from '../utils/query-string-generator';


const Span = styled.span`
  cursor: pointer;
  border: 0;
  ${({active}) => active && `
    background-color: gray;
  `}
`;

const HasRelationFilter = ({hasRelation, queryString}) => {
  return (
    <div>
      <h3>기업연동필터</h3>
      <Link href={`/companies?${updateQueryStr(queryString, {hasRelation: null})}&page=1`}>
        <a><Span active={hasRelation === null}>모두</Span></a>
      </Link>
      <Link href={`/companies?${updateQueryStr(queryString, {hasRelation: '1'})}&page=1`}>
        <a><Span active={hasRelation === '1'}>활성화</Span></a>
      </Link>
      <Link href={`/companies?${updateQueryStr(queryString, {hasRelation: '0'})}&page=1`}>
        <a><Span active={hasRelation === '0'}>비활성화</Span></a>
      </Link>
    </div>
  )
};

export default HasRelationFilter;
