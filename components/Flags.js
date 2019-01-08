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
  display: block;
  width: 100%;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 25px;
  height: auto;
  border-radius: 5px;
`;

export default Flags;
