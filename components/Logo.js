import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: ${({width}) => width || 'auto'};
  height: ${({height}) => height || 'auto'};
`;

const Logo = ({src, width, height}) => {
  return <Img src={src} width={width} height={height} />;
};

export default Logo;