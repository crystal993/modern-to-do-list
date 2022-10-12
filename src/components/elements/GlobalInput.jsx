import React from "react";
import styled from "styled-components";

const GlobalInput = ({
  onChange,
  name,
  type,
  placeholder,
  required,
  value,
  Ref,
  width,
  height,
  color,
  fontSize,
}) => {
  return (
    <>
      <StyledInputWrapper width={width}>
        <StyledInput
          name={name}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          value={value}
          width={width}
          height={height}
          color={color}
          fontSize={fontSize}
          required={required}
          ref={Ref}
        />
      </StyledInputWrapper>
    </>
  );
};

const StyledInputWrapper = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-sizing: border-box;
  padding: 0;
  position: relative;
  display: inline-block;
  padding: 0.4rem 1.1rem;
  color: rgba(0, 0, 0, 0.85);
  font-size: ${({ fontSize }) => fontSize};
  background-color: #fff;
  transition: all 0.3s;
  border: 1px solid #d5d0d0;
  border: 2px solid ${({ theme }) => theme.gray};
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 2px;
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
  }
  &:hover {
    border-color: ${({ theme }) => theme.mainColor};
  }
  &:focus {
    border-color: ${({ theme }) => theme.mainColor};
    outline: none;
  }
  &::placeholder {
    color: #eae0e0;
  }
`;
export default GlobalInput;
