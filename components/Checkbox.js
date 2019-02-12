import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.checkboxRef = React.createRef();
  }
  state = { checked: false };
  handleChange = () => this.setState(state => ({ checked: !state.checked }));
  render() {
    const { isActive, children } = this.props;
    const checked = isActive || this.state.checked;
    return (
      <Div>
        <Label>
          <input type="checkbox" ref={this.checkboxRef} checked={checked} onChange={this.handleChange} />
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <Inner d="M4,1 L16,1 C17.6568542,1 19,2.34314575 19,4 L19,16 C19,17.6568542 17.6568542,19 16,19 L4,19 C2.34314575,19 1,17.6568542 1,16 L1,4 C1,2.34314575 2.34314575,1 4,1 Z" />
              <Outer d="M4,1 L16,1 C17.6568542,1 19,2.34314575 19,4 L19,16 C19,17.6568542 17.6568542,19 16,19 L4,19 C2.34314575,19 1,17.6568542 1,16 L1,4 C1,2.34314575 2.34314575,1 4,1 Z" />
              <Symbol points="4.95121951 9.92998491 8.46616628 13.4137931 15.4878049 6.5862069" />
            </g>
          </svg>
          <Span>{children}</Span>
        </Label>
      </Div>
    );
  }
}

Checkbox.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Checkbox.defaultProps = {
  isActive: null,
  children: '',
};
const Div = styled.div`
  user-select: none;
  display: inline-block;
  input {
    display: none;
  }
`;

const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Outer = styled.path`
  stroke: #0a87ff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill-rule: nonzero;
  stroke-dasharray: 66.852;
  stroke-dashoffset: 66.852;
  transition: all 0.3s ease;
  label:hover & {
    stroke-dashoffset: 0;
  }
`;

const Inner = styled.path`
  stroke: #c8ccd4;
  stroke-width: 2;
  fill-rule: nonzero;
  fill: none;
  input:checked + svg & {
    stroke: #0a87ff;
    fill: #0a87ff;
  }
`;

const Symbol = styled.polyline`
  stroke: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 14.7428, 14.7428;
  stroke-dashoffset: 14.7428;
  transition: all 0.15s ease;
  input:checked + svg & {
    stroke: #fff;
    stroke-dashoffset: 0;
  }
`;

const Span = styled.span`
  margin-left: 5px;
  margin-top: 2px;
  text-decoration: none;
  color: #707070;
`;

export default Checkbox;
