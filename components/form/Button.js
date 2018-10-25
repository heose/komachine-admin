import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrimaryButton = ({title, ...props}) => {
  return (
    <Button {...props}>
      {title}
    </Button>
  );
};

export default PrimaryButton;