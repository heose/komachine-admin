import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #e7e7ea;
  color: darkblue;
`;

const Footer = () => {
  return (
    <Div>
      Footer
    </Div>
  )
};

export default Footer;