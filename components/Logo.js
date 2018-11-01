import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Img = styled.img`
  width: ${({ theme }) => theme.width};
  height: ${({ theme }) => theme.height};
`;

const Logo = ({ src, width, height }) => <Img src={src} width={width} height={height} />;

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};
Logo.defaultProps = {
  width: 'auto',
  height: 'auto',
};
export default Logo;
