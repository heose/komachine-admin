import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.svg = null;
    this.checkboxRef = React.createRef();
    this.outerBox = null;
    this.innerBox = null;
    this.v = null;
    this.d =
      'M4,1 L16,1 C17.6568542,1 19,2.34314575 19,4 L19,16 C19,17.6568542 17.6568542,19 16,19 L4,19 C2.34314575,19 1,17.6568542 1,16 L1,4 C1,2.34314575 2.34314575,1 4,1 Z';
  }
  state = {};
  componentDidMount() {
    import('snapsvg-cjs').then(module => {
      const Snap = module.default;
      this.svg = Snap('#cbx1');
      const s = Snap('#cbx2');
      console.log(this.checkboxRef.current.checked);
      if (this.checkboxRef.current.checked) {
        s.select('#cbx-group polyline').attr({
          stroke: '#fff',
        });
        s.select('#cbx-group path').attr({ stroke: '#0a87ff', fill: '#0a87ff' });
      }
      this.outerBox = this.svg.path(this.d);
      const g = this.svg.group(this.outerBox);
      g.attr({
        stroke: 'none',
        strokeWidth: 1,
        fill: 'none',
        fillRule: 'evenodd',
      });
      this.outerBox.attr({ stroke: '#979797', strokeWidth: 2, fillRule: 'nonzero' });
      // this.innerBox = this.svg.rect(3, 3, 14, 14, 1);
      // this.innerBox.attr({ fill: 'white' });
    });
  }
  handleClick = () => {};
  handleOver = () => {
    // this.outerBox.attr({ fill: 'none', fillOpacity: 1 });
    // this.outerBox.animate({ fill: 'none', stroke: '#0a87ff', strokeWidth: 5 }, 400);
  };
  handleOut = () => {
    // this.outerBox.attr({ fill: '#4A4A4A', fillOpacity: 0.5, stroke: 'none' });
  };
  render() {
    const { name } = this.props;
    const id = 'cbx';
    return (
      <div>
        <label htmlFor={id} className="label-cbx" onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
          <input type="checkbox" name={name} id={id} ref={this.checkboxRef} checked />
          <svg id="cbx1" width="20px" height="20px" viewBox="0 0 20 20" />
          <svg id="cbx2" width="20px" height="20px" viewBox="0 0 20 20">
            <g id="cbx-group" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path id="cbx-box" d={this.d} id="Rectangle" stroke="#979797" strokeWidth="2" fillRule="nonzero" />
              <polyline
                id="Path-2"
                stroke="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="4.95121951 9.92998491 8.46616628 13.4137931 15.4878049 6.5862069"
              />
            </g>
          </svg>
          안녕하세요
          {/* <div className="checkbox">
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z" />
              <polyline points="4 11 8 15 16 6" />
            </svg>
          </div> */}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
};

const Div = styled.div`
  .label-cbx {
    user-select: none;
    cursor: pointer;
    margin-bottom: 0;
  }
  .label-cbx input:checked + .checkbox {
    border-color: #20c2e0;
  }
  .label-cbx input:checked + .checkbox svg path {
    fill: #20c2e0;
  }
  .label-cbx input:checked + .checkbox svg polyline {
    stroke-dashoffset: 0;
  }
  .label-cbx:hover .checkbox svg path {
    stroke-dashoffset: 0;
  }
  .label-cbx .checkbox {
    position: relative;
    top: 2px;
    float: left;
    margin-right: 8px;
    width: 20px;
    height: 20px;
    border: 2px solid #c8ccd4;
    border-radius: 3px;
  }
  .label-cbx .checkbox svg {
    position: absolute;
    top: -2px;
    left: -2px;
  }
  .label-cbx .checkbox svg path {
    fill: none;
    stroke: #20c2e0;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 71px;
    stroke-dashoffset: 71px;
    transition: all 0.6s ease;
  }
  .label-cbx .checkbox svg polyline {
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 18px;
    stroke-dashoffset: 18px;
    transition: all 0.3s ease;
  }
`;

export default Checkbox;
