import React from 'react';
import styled from 'styled-components';

export const Img = styled.img`
  width: ${({theme}) => theme.width || 'auto'};
  height: ${({theme}) => theme.height || 'auto'};
`;

const Logo = ({src, width, height}) => {
  return <Img src={src} width={width} height={height} />;
};

export default Logo;