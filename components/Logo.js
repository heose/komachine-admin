import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
  }
  componentDidMount() {
    // const { src, width, height } = this.props;
    // const tinyImg = new Image();
    // tinyImg.addEventListener('load', e => {
    //   console.log('load');
    //   console.log(e);
    // });
    // tinyImg.addEventListener('error', e => {
    //   console.log('error');
    //   console.log(e);
    // });
    // tinyImg.src = 'cascor-768_vhxboc_tiny.JPG';
  }
  render() {
    const { src, width, height } = this.props;
    return <Img ref={this.imgRef} src={src} width={width} height={height} />;
  }
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};
Logo.defaultProps = {
  width: 'auto',
  height: 'auto',
};

export const Img = styled.img`
  width: ${({ theme }) => theme.width};
  height: ${({ theme }) => theme.height};
`;

export default Logo;
