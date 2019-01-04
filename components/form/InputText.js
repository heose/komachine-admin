import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    const { id, label, type, width } = this.props;
    return (
      <Div width={width}>
        <Input ref={this.input} type={type} id={id} onChange={this.handleChange} />
        <Label htmlFor={id} hasText={this.state.hasText}>
          {label}
        </Label>
      </Div>
    );
  }
}

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
};

InputText.defaultProps = {
  label: '',
  type: 'text',
  width: '100%',
};

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  width: ${props => props.width};
  /* height: 100%; */
`;
export const Input = styled.input`
  /* width: calc(100% - 2rem); */
  border: 0.5px solid lightgray;
  outline: 0;
  border-radius: 0;
  outline-style: none;
  appearance: none;
  /* padding: 1.8rem 1rem 1rem 1rem; */
  &[type='password'] {
    font-family: Verdana, sans-serif;
  }
  &:focus {
    border: 0.5px solid black;
  }
`;
const Label = styled.label`
  position: absolute;
  left: 1rem;
  margin: auto;
  color: #a3a3a3;
  user-select: none;
  transform-origin: 0 -2rem;
  transition: all 0.2s;
  ${props =>
    props.hasText &&
    `
    transform: scale(0.6);
  `};
  ${Input}:focus+& {
    transform: scale(0.6);
  }
`;
export default InputText;
