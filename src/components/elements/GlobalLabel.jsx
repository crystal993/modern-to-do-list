import React from "react";
import styled from "styled-components";

const GlobalLabel = ({ htmlFor, labelFontSize, label, width }) => {
  return (
    <LabelWrapper width={width}>
      <StyledLabel htmlFor={htmlFor} labelFontSize={labelFontSize}>
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
  width: "2.5rem";
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 3px;
  font-size: ${({ labelFontSize }) => labelFontSize};
  color: ${({ theme }) => theme.subColor};
`;

export default GlobalLabel;
