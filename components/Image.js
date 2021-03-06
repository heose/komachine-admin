/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class Image extends React.Component {
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

  shouldComponentUpdate(nextProps) {
    return !nextProps.isFetching;
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
    const tinySrc = match && match.length > 2 ? `${match[1]}_tiny.${match[2]}` : '';
    let origin = null;
    if (tinyState !== 'loading') {
      origin = (
        <Origin
          as="img"
          ref={this.originRef}
          src={`${src}`}
          alt=""
          onLoad={() => this.handleLoaded('originState')}
          onError={this.handleError}
          originState={originState}
        />
      );
    }
    const isDisableBlank = tinyState === 'complete' || originState === 'complete';
    return (
      <Wrapper width={width} height={height} minWidth={minWidth} minHeight={minHeight}>
        <Blank tinyState={tinyState} isDisableBlank={isDisableBlank} />
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
  src: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
  isFetching: PropTypes.bool,
};

Image.defaultProps = {
  src: '',
  minWidth: '',
  minHeight: '',
  isFetching: false,
};

const Wrapper = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  min-width: ${props => props.minWidth};
  min-height: ${props => props.minHeight};
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-bottom: -4.5px;
`;

const Default = styled.div`
  height: 100%;
  background-color: lightgray;
  width: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Blank = styled(Default)`
  width: 100%;
  opacity: 1;
  ${props =>
    props.isDisableBlank &&
    `
    opacity: 0;
    transition: opacity 0.5s;
  `};
`;

const Tiny = styled(Default)`
  opacity: 0;
  filter: blur(5px);
  ${props =>
    props.tinyState === 'complete' &&
    `
    opacity: 1;
    transition: opacity 0.3s;
  `};
`;

const Origin = styled(Default)`
  opacity: 0;
  ${props =>
    props.originState === 'complete' &&
    `
    opacity: 1;
    transition: opacity 0.3s .2s;
  `};
`;
