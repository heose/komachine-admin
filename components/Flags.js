import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Us from 'flag-icon-css/flags/4x3/us.svg';

function Flags({ nation }) {
  return (
    <Div>
      {/* <Icon>
        <Us />
      </Icon> */}
      <Img src={`https://cdn.komachine.com/static/flags/svg/${nation}.svg`} alt="" />
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
  height: auto;
  position: relative;
  margin: 0 auto;
  margin-left: 10px;
`;

const Icon = styled.div`
  width: 25px;
  height: 100%;
  border-radius: 5px;
  position: relative;
`;

const Img = styled.img`
  width: 25px;
  height: 100%;
  border-radius: 5px;
  position: relative;
`;

export default Flags;
