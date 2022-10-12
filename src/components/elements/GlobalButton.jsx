import React from "react";
import styled from "styled-components";

function GlobalButton({
  content,
  size,
  onClick,
  width,
  height,
  fontWeight,
  fontSize,
  color,
  borderRadius = "0.5rem",
  padding = "1rem",
  cursor,
}) {
  return (
    <Wrapper onClick={onClick}>
      {content && (
        <Btn
          size={size}
          fontWeight={fontWeight}
          width={width}
          height={height}
          fontSize={fontSize}
          color={color}
          padding={padding}
          borderRadius={borderRadius}
          cursor={cursor}
        >
          {content}
        </Btn>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${(props) => props.width};
`;

const Btn = styled.button`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) =>
    props.color === "subColor" ? props.theme.mainColor : props.theme.white};
  border-radius: ${(props) => props.borderRadius};
  transition: ${(props) => props.theme.transition};
  border: ${(props) =>
    props.color === "subColor" ? `1px solid ${props.theme.mainColor}` : "none"};
  background-color: ${(props) =>
    props.color === "subColor"
      ? props.theme.white
      : props.color === "gray"
      ? props.theme.gray
      : props.theme.mainColor};
  font-size: ${(props) => props.fontSize};
  cursor: ${(props) => props.cursor};
`;

export default GlobalButton;
