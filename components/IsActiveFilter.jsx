import React from 'react';
import Router from 'next/router';
import Link from 'next/link'
import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  ${({active}) => active && `
    background-color: gray;
  `}
`;

const IsActiveFilter = ({router, isActive, handleClick, queryString}) => {
  console.log(isActive);
  const onClick = value => {
    handleClick({isActive: value});
    Router.push(`/companies?${queryString}`);
  };
  return (
    <div>
      <h3>기업활성화필터</h3>
      <Button active={isActive === null} onClick={() => onClick(null)}>모두</Button>
      <Button active={isActive === 1} onClick={() => onClick(1)}>활성화</Button>
      <Button active={isActive === 0} onClick={() => onClick(0)}>비활성화</Button>
      {/*<Link href={'/companies?page=1'} active={isActive === null}><a>모두</a></Link>*/}
      {/*<Link href={`/companies?page=1&isActive=1`} active={isActive === 1}><a>활성화</a></Link>*/}
      {/*<Link href={`/companies?page=1&isActive=0`} active={isActive === 0}><a>비활성화</a></Link>*/}
    </div>
  )
};

export default IsActiveFilter;
