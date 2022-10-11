import React from "react";
import styled from "styled-components";
import SignIn from "../components/signin/SignIn";
import SignUp from "../components/signup/SignUp";
const Main = () => {
  return (
    <Wrapper>
      <SignIn />
      <SignUp />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem 0rem;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.mainColor};
`;
export default Main;
