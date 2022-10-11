import React from "react";
import styled from "styled-components";

const GlobalToggle = ({ isToggled, onToggle }) => {
  return (
    <ToggleWrapper>
      <Toggle
        id="checkbox"
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
      />
      <ToggleLabel htmlFor="checkbox" />
    </ToggleWrapper>
  );
};

export default GlobalToggle;

const ToggleWrapper = styled.div`
  position: relative;
  margin-top: 0.5rem;
`;

const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 4.2rem;
  height: 2.1rem;
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.backgroundColor};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 1.4rem;
    height: 1.4rem;
    margin: 0.3rem;
    margin-left: 0.3rem;
    background: ${({ theme }) => theme.lightgray};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: ${({ theme }) => theme.transition};
    @media (max-width: 374px) {
      /* Mobile */
      width: 1.2rem;
      height: 1.2rem;
      background: ${({ theme }) => theme.baclgroundColor};
      margin: 0.25rem;
    }
  }
  @media screen and (min-width: 1024px) {
    /* Desktop */
    width: 4.2rem;
    height: 2.1rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* Tablet */
    width: 4.2rem;
    height: 2.1rem;
  }

  @media (max-width: 767px) {
    /* Mobile */
    width: 4.2rem;
    height: 2.1rem;
  }
  @media (max-width: 374px) {
    /* Mobile */
    width: 3.4rem;
    height: 1.75rem;
  }
`;

const Toggle = styled.input`
  z-index: 1;
  border-radius: 2rem;
  width: 4.2rem;
  height: 2.1rem;
  border: none;
  visibility: hidden;
  &:checked + ${ToggleLabel} {
    background: ${({ theme }) => theme.backgroundColor};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 1.4rem;
      height: 1.4rem;
      margin-left: 2.5rem;
      border: none;
      background: ${({ theme }) => theme.mainColor};
      transition: ${({ theme }) => theme.transition};
      @media (max-width: 374px) {
        /* Mobile */
        width: 1.2rem;
        height: 1.2rem;
        margin-left: 1.8rem;
      }
    }
  }
  @media (max-width: 374px) {
    /* Mobile */
    width: 3.5rem;
    height: 1.75rem;
  }
`;
