import React, { useState } from "react";
import styled from "styled-components";
import Toggle from "../components/elements/GlobalToggle";
import SignIn from "../components/signin/SignIn";
import SignUp from "../components/signup/SignUp";
const Main = () => {
  const [isToggled, setIsToggled] = useState(false);

  const onToggleHandler = () => {
    if (!isToggled) {
      setIsToggled(true);
    } else {
      setIsToggled(false);
    }
  };
  return (
    <Wrapper>
      <ToggleWrapper>
        <Toggle isToggled={isToggled} onToggle={onToggleHandler} />
      </ToggleWrapper>
      <FormWrapper>
        {!isToggled ? (
          <SignIn setIsToggled={setIsToggled} />
        ) : (
          <SignUp setIsToggled={setIsToggled} />
        )}
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem 0rem;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToggleWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.4rem 0rem;
  border-radius: 0.5rem;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.backgroundColor};
`;

const FormWrapper = styled.div`
  width: 100%;
`;
export default Main;
