import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.svg = null;
  }
  componentDidMount() {
    import('snapsvg-cjs').then(module => {
      const Snap = module.default;
      this.svg = Snap('#cbx1');
      const bigCircle = this.svg.circle(100, 100, 20);
      bigCircle.attr({
        fill: '#bada55',
        stroke: '#000',
        strokeWidth: 5,
      });
      bigCircle.click(this.handleClick);
      // Now lets create another small circle:

      // Despite our small circle now is a part of a group
      // and a part of a mask we could still access it:
    });
  }
  handleClick = e => {
    const smallCircle = this.svg.circle(100, 150, 70);
    // Lets put this small circle and another one into a group:
    const discs = this.svg.group(smallCircle, this.svg.circle(200, 150, 70));
    // Now we can change attributes for the whole group
    discs.attr({
      fill: '#fff',
    });
    // Now more interesting stuff
    // Lets assign this group as a mask for our big circle
    smallCircle.animate({ r: 50 }, 1000);
  };
  render() {
    const { name } = this.props;
    return (
      <div>
        <label htmlFor="cbx" className="label-cbx">
          <input type="checkbox" name={name} id="cbx" />
          <svg id="cbx1" style={{ width: '200px', height: '200px' }} />
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
