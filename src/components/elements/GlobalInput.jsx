import React from "react";
import styled from "styled-components";

const GlobalInput = ({
  onChange,
  name,
  type,
  placeholder,
  value,
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
  border-radius: 0.5rem;
  transition: all 0.3s;
  border: 1px solid #d5d0d0;
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
