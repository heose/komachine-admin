/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import styled from 'styled-components';

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.tinyRef = React.createRef();
    this.tinyRef1 = React.createRef();
    this.originRef = React.createRef();
    this.handleLoad = this.handleLoad.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.tinyRef.current.complete);
    console.log(this.tinyRef.current.naturalWidth);
    console.log(this.tinyRef1.current.naturalWidth);
    // const src = 'https://cdn.komachine.com/media/company-logo/cascor-768_vhxboc.JPG';
    // const tinyImg = new Image();
    // tinyImg.addEventListener('load', e => {
    //   console.log('Image object load');
    //   console.log(e);
    // });
    // tinyImg.addEventListener('error', e => {
    //   console.log('error');
    //   console.log(e);
    // });
    // tinyImg.src = src;
  }

  handleLoad() {
    console.log('img tag load');
  }

  handleError() {
    console.log('error');
  }

  render() {
    return (
      <Wrapper>
        <Empty />
        <Tiny
          ref={this.tinyRef}
          src="https://cdn.komachine.com/media/company-logo/cascor-768_vhxboc_tiny11.jpg"
          alt=""
          onLoad={this.handleLoad}
          onError={() => console.log('error')}
        />
        <Tiny
          ref={this.tinyRef1}
          src="https://cdn.komachine.com/media/company-logo/cascor-768_vhxboc_tiny.jpg"
          alt=""
          onLoad={this.handleLoad}
          onError={() => console.log('error')}
        />
        {/* <Origin ref={this.originRef} src="https://cdn.komachine.com/media/company-logo/cascor-768_vhxboc.JPG" alt="" /> */}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 400px;
`;

const Empty = styled.div`
  height: 100px;
  background-color: gray;
  width: 300px;
  margin-bottom: 20px;
`;

const Tiny = styled.img`
  height: 100px;
  display: block;
  margin-bottom: 20px;
  filter: blur(10px);
`;

const Origin = styled.img`
  height: 100px;
  display: block;
`;
