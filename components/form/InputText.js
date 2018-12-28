import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { renderComponent } from 'recompose';

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  state = { hasText: false };
  handleChange = () => {
    if (this.input.current.value) {
      this.setState(() => ({ hasText: true }));
    } else {
      this.setState(() => ({ hasText: false }));
    }
  };
  render() {
    const { id, label } = this.props;
    return (
      <Div>
        <Input ref={this.input} type="text" id={id} onChange={this.handleChange} />
        <Label htmlFor={id} hasText={this.state.hasText}>
          {label}
        </Label>
      </Div>
    );
  }
}

const Div = styled.div`
  position: relative;
`;
const Input = styled.input`
  border: 0.5px solid lightgray;
  outline: 0;
  border-radius: 0;
  outline-style: none;
  appearance: none;
  padding: 1.8rem 1rem 1rem 1rem;
  font-size: 1.4rem;
  &:focus {
    border: 0.5px solid black;
  }
`;
const Label = styled.label`
  position: absolute;
  top: 8px;
  left: 1rem;
  margin: auto;
  color: #a3a3a3;
  user-select: none;
  transition: all 0.2s;
  transform: scale(1.2);
  transform-origin: 0 0;
  ${props =>
    props.hasText &&
    `
    transform: scale(0.7);
  `} ${Input}:focus+& {
    transform: scale(0.7);
  }
`;
export default InputText;
