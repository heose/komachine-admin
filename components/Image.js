/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.tinyRef = React.createRef();
    this.originRef = React.createRef();
    this.handleLoaded = this.handleLoaded.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  state = {
    offsetWidth: '',
    offsetHeight: '',
    tinyState: 'loading',
    originState: 'loading',
  };

  componentDidMount() {
    if (this.tinyRef.current.complete) {
      if (this.tinyRef.current.naturalWidth) {
        console.log(this.tinyRef.current);
        this.setState(() => ({ tinyState: 'complete' }));
      } else {
        this.setState(() => ({ tinyState: 'failure' }));
      }
    }
  }

  handleLoaded(type) {
    console.log(this.tinyRef.current);
    this.setState(() => ({ [type]: 'complete' }));
  }

  handleError(type) {
    this.setState(() => ({ [type]: 'failure' }));
  }

  render() {
    const { offsetWidth, offsetHeight, tinyState, originState } = this.state;
    const { width, height, src } = this.props;
    let origin = null;
    if (tinyState !== 'loading') {
      origin = (
        <Origin
          as="img"
          ref={this.originRef}
          src="https://cdn.komachine.com/media/2013-Porsche-Cayenne-Gts-1920x2560.jpeg"
          alt=""
          onLoad={() => this.handleLoaded('originState')}
          onError={this.handleError}
          originState={originState}
        />
      );
    }
    return (
      <Wrapper height={height}>
        <Init tinyState={tinyState} height={height} />
        <Tiny
          as="img"
          ref={this.tinyRef}
          src="https://cdn.komachine.com/media/2013-Porsche-Cayenne-Gts-1920x2560_tiny.jpg"
          alt=""
          onLoad={() => this.handleLoaded('tinyState')}
          onError={() => this.handleError('tinyState')}
          tinyState={tinyState}
          originState={originState}
        />
        {origin}
      </Wrapper>
    );
  }
}
const requiredLeastOne = (props, propName, componentName) => {
  if (!props.width && !props.height) {
    return new Error(`One of 'width' or 'height' is required by '${componentName}' component.`);
  }
  return null;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: requiredLeastOne,
  height: requiredLeastOne,
};

Image.defaultProps = {
  width: '',
  height: '',
};

const Wrapper = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  min-width: 133px;
  position: relative;
  overflow: hidden;
  display: inline-block;
`;

const Default = styled.div`
  height: 100%;
  background-color: lightgray;
  width: auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Init = styled(Default)`
  opacity: ${props => (props.tinyState === 'complete' ? 0 : 1)};
  height: ${props => props.height};
  width: 100%;
  transition: opacity 1s;
`;

const Tiny = styled(Default)`
  opacity: ${props => (props.tinyState === 'complete' ? 1 : 0)};
  transition: opacity 0.3s;
  filter: blur(5px);
`;

const Origin = styled(Default)`
  opacity: ${props => (props.originState === 'complete' ? 1 : 0)};
  transition: opacity 0.3s;
`;
