import React from 'react';
// import styled from 'styled-components';
import Logo from './Logo';

// const Wrapper = styled.div`
//   height: 50px;
//   display: flex;
//   align-items: center;
//   border-bottom: 1px solid darkgray;
// `;

const CompanyListItem = ({id, logo, slug, homepage, title, isActive, hasRelation, productsCount}) => {
  const hasRelationStr = hasRelation ? 'O' : 'X';
  const isActiveStr = isActive ? 'O' : 'X';
  return (
    <div>
      {title}
      <Logo src={logo} height={'100%'} />
      <a href={homepage} target="_blank">Home</a>
      {hasRelationStr}
      {productsCount}
      {isActiveStr}
    </div>
  )
};

export default CompanyListItem;