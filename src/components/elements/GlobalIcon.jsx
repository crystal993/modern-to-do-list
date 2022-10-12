import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GlobalIcon({
  onClick,
  width,
  height,
  borderRadius = "0.5rem",
  padding = "1rem",
  icon,
  color,
  bgColor,
  hoverColor,
  bgHoverColor,
}) {
  return (
    <Wrapper onClick={onClick}>
      {icon && (
        <Icon
          icon={icon}
          width={width}
          height={height}
          color={color}
          bgColor={bgColor}
          borderRadius={borderRadius}
          padding={padding}
          hoverColor={hoverColor}
          bgHoverColor={bgHoverColor}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${(props) => props.width};
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
  padding: ${(props) => props.padding};
  &:hover {
    color: ${(props) => props.hoverColor};
    background-color: ${(props) => props.bgHoverColor};
  }
`;

export default GlobalIcon;
