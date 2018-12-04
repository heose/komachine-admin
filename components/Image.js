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
    tinyState: 'loading',
    originState: 'loading',
  };

  componentDidMount() {
    if (this.tinyRef.current.complete) {
      if (this.tinyRef.current.naturalWidth) {
        this.setState(() => ({ tinyState: 'complete' }));
      } else {
        this.setState(() => ({ tinyState: 'failure' }));
      }
    }
  }

  handleLoaded(type) {
    this.setState(() => ({ [type]: 'complete' }));
  }

  handleError(type) {
    this.setState(() => ({ [type]: 'failure' }));
  }

  render() {
    const { tinyState, originState } = this.state;
    const { width, height, src, minWidth, minHeight } = this.props;
    const regexp = /^(.*)\.([^.]*)$/;
    const match = regexp.exec(src);
    const tinySrc = `${match[1]}_tiny.${match[2]}`;
    let origin = null;
    if (tinyState !== 'loading') {
      origin = (
        <Origin
          as="img"
          ref={this.originRef}
          src={src}
          alt=""
          onLoad={() => this.handleLoaded('originState')}
          onError={this.handleError}
          originState={originState}
        />
      );
    }
    return (
      <Wrapper width={width} height={height} minWidth={minWidth} minHeight={minHeight}>
        <Default />
        <Tiny
          as="img"
          ref={this.tinyRef}
          src={tinySrc}
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

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
};

Image.defaultProps = {
  minWidth: '',
  minHeight: '',
};

const Wrapper = styled.div`
  height: ${props => props.height} !important;
  width: ${props => props.width} !important;
  min-width: ${props => props.minWidth} !important;
  min-height: ${props => props.minHeight} !important;
  position: relative;
  overflow: hidden;
  display: inline-block;
`;

const Default = styled.div`
  height: 100%;
  background-color: lightgray;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
