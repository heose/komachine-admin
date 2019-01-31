import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Error({ errorCode }) {
  const errorMap = new Map();
  errorMap.set(400, 'BAD REQUEST');
  errorMap.set(401, 'UNAUTHORIZED');
  errorMap.set(403, 'FORBIDDEN ACCESS');
  errorMap.set(404, 'PAGE NOT FOUND');
  errorMap.set(500, 'INTERNAL SERVER ERROR');

  return (
    <Div>
      <Code>{errorCode}</Code>
      <Message>{errorMap.get(errorCode)}</Message>
    </Div>
  );
}

Error.propTypes = {
  errorCode: PropTypes.number.isRequired,
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  margin-top: 20rem;
  width: 100%;
`;

const Code = styled.span`
  font-size: 10rem;
  font-weight: bolder;
  color: gray;
`;
const Message = styled.span`
  font-size: 4rem;
  color: gray;
`;

export default Error;
