import React from "react";
import styled from "styled-components";

const GlobalLabel = ({
  htmlFor,
  labelFontSize,
  label,
  width,
  onClick,
  textDecoration,
  color = "black",
  cursor,
}) => {
  return (
    <LabelWrapper width={width} onClick={onClick}>
      <StyledLabel
        htmlFor={htmlFor}
        labelFontSize={labelFontSize}
        color={color}
        textDecoration={textDecoration}
        cursor={cursor}
        width={width}
      >
        {label}
      </StyledLabel>
    </LabelWrapper>
  );
};

const LabelWrapper = styled.div`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyledLabel = styled.label`
  text-align: left;
  width: ${({ width }) => width};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 3px;
  font-size: ${({ labelFontSize }) => labelFontSize};
  color: ${({ color, theme }) => (color ? color : theme.black)};
  text-decoration: ${({ textDecoration }) => textDecoration};
  cursor: ${({ cursor }) => cursor};
  text-overflow: ellipsis;
`;

export default GlobalLabel;
