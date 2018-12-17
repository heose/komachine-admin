import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function DnDFileUploader(props) {
  if (process.browser) {
    console.log('adf');
    // window.addEventListener('drop', e => e.preventDefault(), false);
    // window.addEventListener('dragover', e => e.preventDefault(), false);
    window.addEventListener(
      'dragenter',
      e => {
        e.preventDefault();
        e.dataTransfer.effectAllowed = 'none';
        e.dataTransfer.dropEffect = 'none';
      },
      false,
    );

    window.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.effectAllowed = 'none';
      e.dataTransfer.dropEffect = 'none';
    });

    window.addEventListener('drop', e => {
      e.preventDefault();
      // e.dataTransfer.effectAllowed = 'none';
      // e.dataTransfer.dropEffect = 'none';
    });
  }

  const handleFileChange = e => {
    console.log(e.target.files);
  };
  const handleDragEnter = e => {
    console.log(e);
    e.preventDefault();
  };
  const handleDrop = e => {
    e.stopPropagation();
    e.stopImmediatePropagation();
    e.preventDefault();
    console.log(e);
  };
  return (
    <Div onDragEnter={handleDragEnter} onDrop={handleDrop}>
      <label htmlFor="dndfile">
        <input type="file" id="dndfile" onChange={handleFileChange} />
        파일선택
      </label>
    </Div>
  );
}

DnDFileUploader.propTypes = {};

const Div = styled.div`
  width: 200px;
  height: 100px;
  background-color: gray;
  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  label {
    display: inline-block;
    width: 100px;
    height: 50px;
    background-color: lightgray;
    &:hover {
      background-color: skyblue;
    }
  }
`;

export default DnDFileUploader;
