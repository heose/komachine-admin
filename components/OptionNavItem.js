import React from 'react';
import styled from 'styled-components';

function OptionNavItem({ children, label }) {
  return (
    <Div>
      <Icon>{children}</Icon>
      <Span>{label}</Span>
    </Div>
  );
}

const Div = styled.div`
  width: 148.48px;
  height: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const Span = styled.span`
  position: relative;
  color: #9fabda;
  font-size: 15px;
  min-width: 51.8666px;
`;

export default OptionNavItem;
