import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

class DnDFileUploader extends React.Component {
  state = {};
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
      e.stopPropagation();
      e.preventDefault();
    };

    const handleDrop = e => {
      e.preventDefault();
      console.log(e.type);
      console.log(e.dataTransfer.items);
      console.log(typeof e.dataTransfer.files);
    };

    const handleFile = e => {
      let file;
      if (e.type === 'change') {
        [file] = e.target.files;
      } else if (e.type === 'drop') {
        [file] = e.dataTransfer.files;
      }
      console.log(file);
      const formData = new FormData();
      formData.append('file', file);
      const config = {
        onUploadProgress: ProgressEvent => {
          const percentCompleted = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
          console.log(percentCompleted);
        },
      };
      axios
        .put('http://localhost:8000/en/test/upload/', formData, config)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };
    return (
      <Div onDragEnter={handleDragEnter} onDrop={handleFile}>
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
  height: 50px;
  background-color: #fff;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  input[type='file'] {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }
  label {
    display: inline-flex;
    width: 90px;
    height: 20px;
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
