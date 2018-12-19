/* eslint-disable dot-notation */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

class DnDFileUploader extends React.Component {
  constructor(props) {
    super(props);
    const divRef = React.createRef();
  }
  state = { enterCount: 0, isSelectable: false };
  render() {
    if (process.browser) {
      window.addEventListener('dragover', e => e.preventDefault(), false);
      window.addEventListener('drop', e => e.preventDefault(), false);
    }

    const handleFileChange = e => {
      console.log(e.type);
      console.log(e.target.files);
    };

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

    const handleDrop = e => {
      e.preventDefault();
      console.log(e.type);
      console.log(e.dataTransfer.items);
      console.log(typeof e.dataTransfer.files);
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
      console.log(file);
      const presignedUrl = await axios
        .head('http://localhost:8000/en/test/presigned/', {
          headers: { 'x-file-name': file.name, 'x-file-type': file.type },
        })
        .then(res => res.headers['x-pre-signed-url']);
      console.log(presignedUrl);
      const contentUrl = await readFile(file, 'readAsDataURL');
      console.log(contentUrl);
      document.querySelector('#preview').src = contentUrl;
      const contentBuffer = await readFile(file);
      const config = {
        onUploadProgress: ProgressEvent => {
          const percentCompleted = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
          console.log(percentCompleted);
        },
      };
      axios
        .put(presignedUrl, contentBuffer, config)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };
    return (
      <Div
        ref={this.divRef}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleFile}
        isSelectable={this.state.isSelectable}
      >
        <span>드래그 or </span>
        <label htmlFor="dndfile">
          <input type="file" id="dndfile" onChange={handleFile} />
          <span>파일선택</span>
        </label>
      </Div>
    );
  }
}

DnDFileUploader.propTypes = {};

const Div = styled.div`
  width: 130px;
  height: 60px;
  background-color: #fff;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  ${props =>
    props.isSelectable &&
    `
      border: 1px solid green;
  `};
  input[type='file'] {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }
  span {
    margin: 3px auto;
  }
  label {
    display: inline-flex;
    width: 90px;
    height: 25px;
    color: #fff;
    background-color: lightgray;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: gray;
    }
  }
`;

export default DnDFileUploader;
