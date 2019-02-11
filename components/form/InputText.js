/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import InputWrapper from '~/components/styled/InputWrapper';

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.insideRef = React.createRef();
  }
  state = { hasText: false, hasFocus: false };
  handleChange = () => {
    const { outsideRef } = this.props;
    const inputRef = outsideRef || this.insideRef;
    if (inputRef.current && inputRef.current.value) {
      this.setState(() => ({ hasText: true }));
    } else {
      this.setState(() => ({ hasText: false }));
    }
  };
  handleFocus = () => {
    this.setState(() => ({ hasFocus: true }));
  };
  handleBlur = () => {
    this.setState(() => ({ hasFocus: false }));
  };
  render() {
    const { id, label, type, width, isCombine, outsideRef } = this.props;
    const { hasFocus } = this.state;
    const inputRef = outsideRef || this.insideRef;
    return (
      <Wrapper width={width} hasFocus={hasFocus} isCombine={isCombine}>
        <Div>
          <Input
            ref={inputRef}
            type={type}
            id={id}
            onChange={this.handleChange}
            width={width}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          <Label htmlFor={id} hasText={this.state.hasText}>
            {label}
          </Label>
        </Div>
      </Wrapper>
    );
  }
}

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  width: PropTypes.string,
  isCombine: PropTypes.bool,
  outsideRef: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
};

InputText.defaultProps = {
  label: '',
  type: 'text',
  width: '100%',
  isCombine: false,
  outsideRef: null,
};

const Wrapper = styled(InputWrapper)`
  ${props =>
    props.hasFocus &&
    css`
      border-color: black;
      z-index: 10;
    `};
  ${props =>
    props.isCombine &&
    css`
      border: 0;
      margin: 0;
    `};
`;

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Input = styled.input`
  width: calc(${props => props.width} - 3rem);
  border: 0;
  border-top: 1.8rem solid white;
  border-left: 1.8rem solid white;
  border-right: 1rem solid white;
  border-bottom: 0.5rem solid white;
  outline: 0;
  border-radius: 0;
  outline-style: none;
  appearance: none;
`;

const Label = styled.label`
  cursor: text;
  left: 1.8rem;
  position: absolute;
  margin: auto;
  color: #a3a3a3;
  user-select: none;
  transform-origin: 0 -3.2rem;
  transition: all 0.2s;
  ${props =>
    props.hasText &&
    `
    transform: scale(0.7);
  `};
  ${Input}:focus+& {
    transform: scale(0.7);
  }
`;
export default React.forwardRef((props, ref) => <InputText {...props} outsideRef={ref} />);
