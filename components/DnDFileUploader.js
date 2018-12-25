/* eslint-disable dot-notation */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

class DnDFileUploader extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  state = {
    enterCount: 0,
    isSelectable: false,
    isSelect: false,
    contentUrl: '',
    fileName: '',
  };
  render() {
    if (process.browser) {
      window.addEventListener('dragover', e => e.preventDefault(), false);
      window.addEventListener('drop', e => e.preventDefault(), false);
    }

    const handleDragEnter = e => {
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer.files) {
        e.dataTransfer.dropEffect = 'copy';
        this.setState(state => ({ enterCount: state.enterCount + 1, isSelectable: true }));
      }
    };

    const handleDragLeave = () => {
      this.setState(
        state => ({ enterCount: state.enterCount - 1 }),
        () => {
          if (this.state.enterCount === 0) {
            this.setState(() => ({ isSelectable: false }));
          }
        },
      );
    };

    const readFile = (file, method = 'readAsArrayBuffer') =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader[method](file);
      });

    const handleFile = async e => {
      const [file] = e.target.files || e.dataTransfer.files;
      this.setState(() => ({ fileName: file.name, isSelect: true }));
      const presignedUrl = await axios
        .head('http://localhost:8000/en/test/presigned/', {
          headers: { 'x-file-name': file.name, 'x-file-type': file.type },
        })
        .then(res => res.headers['x-pre-signed-url']);
      const contentUrl = await readFile(file, 'readAsDataURL');
      this.setState(() => ({ contentUrl }));
      const contentBuffer = await readFile(file);
      const config = {
        headers: {
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': `attachment; filename=${file.name}`,
        },
        onUploadProgress: ProgressEvent => {
          const percentCompleted = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
          console.log(percentCompleted);
        },
      };
      axios
        .put('http://localhost:8000/en/test/upload/', contentBuffer, config)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    const handleCancel = () => {
      this.inputRef.current.value = '';
      this.setState(() => ({
        enterCount: 0,
        isSelectable: false,
        isSelect: false,
        contentUrl: '',
        fileName: '',
      }));
    };
    return (
      <Wrapper>
        <Div
          ref={this.divRef}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleFile}
          isSelectable={this.state.isSelectable}
          contentUrl={this.state.contentUrl}
        >
          <Inner isSelect={this.state.isSelect}>
            <Desc>드래그 or </Desc>
            <Label htmlFor="dndfile">
              <InputFile ref={this.inputRef} type="file" id="dndfile" onChange={handleFile} />
              <span>파일선택</span>
            </Label>
          </Inner>
        </Div>
        <span>{this.state.fileName}</span>
        <Button isSelect={this.state.isSelect} onClick={handleCancel}>
          삭제
        </Button>
      </Wrapper>
    );
  }
}

DnDFileUploader.propTypes = {};

const Wrapper = styled.div`
  width: 240px;
  height: 100px;
`;

const Div = styled.div`
  width: 240px;
  height: 80px;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  background-color: #fff;
  border: 1px solid lightgray;
  position: relative;
  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.contentUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 0;
    transition: all 0.2s;
  }
  &:hover {
    &:after {
      opacity: 0.2;
    }
  }
  ${props =>
    props.isSelectable &&
    `
      border: 1px solid green;
  `};
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  z-index: 1;
  position: relative;
  transition: all 0.3s;
  ${Div}:hover & {
    opacity: 1;
  }
  ${props =>
    props.isSelect &&
    `
      opacity: 0;
      
  `};
`;

const InputFile = styled.input`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;

const Desc = styled.span`
  margin: 3px auto;
`;

const Label = styled.label`
  display: inline-flex;
  width: 90px;
  height: 25px;
  color: #fff;
  background-color: #596ac6;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #3c3b55;
  }
`;

const Button = styled.button`
  display: none;
  cursor: pointer;
  border: 0;
  color: red;
  ${props =>
    props.isSelect &&
    `
    display: inline;
  `};
`;

export default DnDFileUploader;
