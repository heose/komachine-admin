import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Flags({ nation }) {
  return (
    <Div>
      <Img src={`https://cdn.komachine.com/static/flags/svg/${nation}.svg`} alt="flag" />
    </Div>
  );
}

Flags.propTypes = {
  nation: PropTypes.string.isRequired,
};

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  margin-left: 10px;
`;

const Img = styled.img`
  width: 25px;
  height: auto;
  border-radius: 5px;
  position: relative;
`;

export default Flags;
