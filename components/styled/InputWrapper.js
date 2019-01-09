import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: inline-block;
  margin: -1px -1px 0 0;
  width: ${props => props.width || '100%'};
  height: 41.1px;
  border: 1px solid lightgray;
  background-color: white;
  vertical-align: top;
`;
