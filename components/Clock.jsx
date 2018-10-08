import styled from 'styled-components';

const Div = styled.div`
  padding: 15px;
  display: inline-block;
  color: #82FA58;
  font: 50px menlo, monaco, monospace;
  background-color: #000;
  ${({light}) => light && `
    background-color: #999;
  `}
`;

export default ({lastUpdate, light}) => {
  return (
    <Div light={light}>
      {format(new Date(lastUpdate))}
    </Div>
  );
}

const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;

const pad = n => n < 10 ? `0${n}` : n;