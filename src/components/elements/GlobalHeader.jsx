import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GlobalHeader = () => {
  return (
    <Wrapper>
      <Title to="/">My Todo List</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 6rem;
  background-color: ${({ theme }) => theme.mainColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled(Link)`
  margin: 0px 20px;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 900;
  color: ${({ theme }) => theme.white};
`;

export default GlobalHeader;
