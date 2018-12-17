import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.checkboxRef = React.createRef();
    this.svg = null;
    this.box = null;
    this.boxOutline = null;
    this.checkSymbol = null;
    this.d =
      'M4,1 L16,1 C17.6568542,1 19,2.34314575 19,4 L19,16 C19,17.6568542 17.6568542,19 16,19 L4,19 C2.34314575,19 1,17.6568542 1,16 L1,4 C1,2.34314575 2.34314575,1 4,1 Z';
    this.symbolLength = 0;
    this.boxLength = 0;
  }
  state = { checked: false };
  componentDidMount() {
    import('snapsvg-cjs').then(module => {
      const Snap = module.default;
      this.svg = Snap('#cbx2');
      this.box = this.svg.select('#cbx-group #box');
      this.boxOutline = this.svg.select('#cbx-group #box-outline');
      this.checkSymbol = this.svg.select('#cbx-group #check-symbol');
      this.boxLength = this.boxOutline.getTotalLength();
      this.boxOutline.attr({
        'stroke-dasharray': `${this.boxLength} ${this.boxLength}`,
        'stroke-dashoffset': this.boxLength,
      });
      this.symbolLength = this.checkSymbol.getTotalLength();
      this.checkSymbol.attr({
        'stroke-dasharray': `${this.symbolLength} ${this.symbolLength}`,
        'stroke-dashoffset': this.symbolLength,
      });
      if (this.checkboxRef.current.checked) {
        this.box.attr({ stroke: '#0a87ff', fill: '#0a87ff' });
      }
    });
  }
  handleClick = () => {
    if (this.state.checked) {
      this.setState(() => ({ checked: false }));
      this.box.attr({ stroke: '#c8ccd4', fill: 'none' });
      this.checkSymbol.animate({ strokeDashoffset: this.symbolLength - 1 }, 140, () =>
        this.checkSymbol.attr({ stroke: 'none' }),
      );
    } else {
      this.setState(() => ({ checked: true }));
      this.box.attr({ stroke: '#0a87ff', fill: '#0a87ff' });
      this.checkSymbol.attr({ stroke: '#fff' });
      this.checkSymbol.animate({ strokeDashoffset: 0 }, 140);
    }
  };
  handleOver = () => {
    this.boxOutline.attr({ stroke: '#0a87ff' });
    this.boxOutline.animate({ strokeDashoffset: 0 }, 300);
  };
  handleOut = () => {
    this.boxOutline.animate({ strokeDashoffset: this.boxLength - 1 }, 200, () =>
      this.boxOutline.attr({ stroke: 'none' }),
    );
  };
  render() {
    const { name, children } = this.props;
    const id = 'cbx';
    return (
      <Div>
        <Label htmlFor={id} onMouseEnter={this.handleOver} onMouseLeave={this.handleOut}>
          <input type="checkbox" name={name} id={id} ref={this.checkboxRef} onClick={this.handleClick} />
          <svg id="cbx2" width="20px" height="20px" viewBox="0 0 20 20">
            <g id="cbx-group" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path id="box" d={this.d} stroke="#c8ccd4" strokeWidth="2" fillRule="nonzero" />
              <path
                id="box-outline"
                d={this.d}
                stroke="none"
                strokeWidth="2"
                fillRule="nonzero"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                id="check-symbol"
                stroke="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="4.95121951 9.92998491 8.46616628 13.4137931 15.4878049 6.5862069"
              />
            </g>
          </svg>
        </Label>
      </Div>
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string,
};

Checkbox.defaultProps = {
  children: '',
};
const Div = styled.div`
  margin-top: 20px;
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

export default Checkbox;
