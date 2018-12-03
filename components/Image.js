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
    const { height, src } = this.props;
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

Image.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  height: ${props => props.height};
  width: auto;
  position: relative;
  padding: 2px;
`;

const Default = styled.div`
  height: 100%;
  background-color: lightgray;
  width: auto;
  margin-bottom: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Init = styled(Default)`
  height: ${props => props.height};
  min-width: 48px;
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
