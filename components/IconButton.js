import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function IconButton({ children, label, width, height, flow, iconWidth, fontSize, fontColor, labelMinWidth }) {
  return (
    <Div width={width} height={height} flow={flow}>
      <Icon iconWidth={iconWidth}>{children}</Icon>
      <Span fontSize={fontSize} fontColor={fontColor} labelMinWidth={labelMinWidth}>
        {label}
      </Span>
    </Div>
  );
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  iconWidth: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  labelMinWidth: PropTypes.string,
  flow: PropTypes.string,
};

IconButton.defaultProps = {
  flow: 'row',
  fontSize: '1.4rem',
  fontColor: 'black',
  labelMinWidth: '0',
};

const Div = styled.div`
  display: flex;
  flex-flow: ${props => props.flow} nowrap;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
  cursor: pointer;
`;

const Icon = styled.div`
  width: ${props => props.iconWidth};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const Span = styled.span`
  position: relative;
  color: ${props => props.fontColor};
  font-size: ${props => props.fontSize};
  min-width: ${props => props.labelMinWidth};
`;

export default IconButton;
