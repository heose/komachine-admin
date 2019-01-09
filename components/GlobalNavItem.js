import React from 'react';
import styled from 'styled-components';

function GlobalNavItem({ children, label }) {
  return (
    <Div>
      <Icon>{children}</Icon>
      <Span>{label}</Span>
    </Div>
  );
}

const Div = styled.div`
  width: 140px;
  height: 90px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 40px;
  height: auto;
  display: flex;
  margin-top: 15px;
  /* justify-content: left; */
  /* align-items: flex-start; */
`;

const Span = styled.span`
  position: absolute;
  bottom: 0;
  display: block;
  color: #9fabda;
  font-size: 15px;
  margin-bottom: 15px;
`;

export default GlobalNavItem;
