import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import generateQueryStr, {updateQueryStr} from '../utils/query-string-generator';


const Span = styled.span`
  cursor: pointer;
  border: 0;
  ${({active}) => active && `
    background-color: gray;
  `}
`;

const IsActiveFilter = ({isActive, queryString, queryMap}) => {
  return (
    <div>
      <h3>기업활성화필터</h3>
      {/*<Link href={`/companies?${updateQueryStr(queryString, {isActive: null})}&page=1`}>*/}
        {/*<a><Span active={isActive === null}>모두</Span></a>*/}
      {/*</Link>*/}
      {/*<Link href={`/companies?${updateQueryStr(queryString, {isActive: '1'})}&page=1`}>*/}
        {/*<a><Span active={isActive === '1'}>활성화</Span></a>*/}
      {/*</Link>*/}
      {/*<Link href={`/companies?${updateQueryStr(queryString, {isActive: '0'})}&page=1`}>*/}
        {/*<a><Span active={isActive === '0'}>비활성화</Span></a>*/}
      {/*</Link>*/}
      <Link href={`/companies?${generateQueryStr({...queryMap, ...{isActive: null, page: 1}})}`}>
        <a><Span active={isActive === null}>모두</Span></a>
      </Link>
      <Link href={`/companies?${generateQueryStr({...queryMap, ...{isActive: '1', page: 1}})}`}>
        <a><Span active={isActive === '1'}>활성화</Span></a>
      </Link>
      <Link href={`/companies?${generateQueryStr({...queryMap, ...{isActive: '0', page: 1}})}`}>
        <a><Span active={isActive === '0'}>비활성화</Span></a>
      </Link>
    </div>
  )
};

export default IsActiveFilter;
