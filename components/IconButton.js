import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function IconButton({
  children,
  label,
  width,
  height,
  color,
  bgColor,
  flow,
  iconWidth,
  fontSize,
  fontColor,
  labelMinWidth,
  href,
}) {
  return (
    <Div width={width} height={height} flow={flow} href={href} color={color} bgColor={bgColor}>
      <Icon iconWidth={iconWidth} color={color}>
        {children}
      </Icon>
      <Span fontSize={fontSize} fontColor={fontColor} labelMinWidth={labelMinWidth}>
        {label}
      </Span>
    </Div>
  );
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  iconWidth: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  label: PropTypes.string,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  labelMinWidth: PropTypes.string,
  flow: PropTypes.string,
  href: PropTypes.string,
};

IconButton.defaultProps = {
  label: '',
  color: 'inherit',
  bgColor: 'inherit',
  flow: 'row',
  fontSize: '1.4rem',
  fontColor: 'inherit',
  labelMinWidth: '0',
  href: '',
};

const Div = styled.div`
  display: flex;
  flex-flow: ${props => props.flow} nowrap;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  width: ${props => props.width};
  height: ${props => props.height};
  cursor: ${props => (props.href ? 'pointer' : 'default')};
`;

const Icon = styled.div`
  width: ${props => props.iconWidth};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: ${props => props.color};
  & svg path {
    fill: ${props => props.color};
  }
`;

const Span = styled.span`
  position: relative;
  color: ${props => props.fontColor};
  font-size: ${props => props.fontSize};
  min-width: ${props => props.labelMinWidth};
`;

export default IconButton;
