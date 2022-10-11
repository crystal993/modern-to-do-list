import React, { useState } from "react";
import styled from "styled-components";
import Button from "../elements/GlobalButton";
import Input from "../elements/GlobalInput";
import Label from "../elements/GlobalLabel";

const SignIn = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  const onChangeHandler = (e) => {};
  const onSubmitHandler = () => {};
  return (
    <Wrapper onSubmit={onSubmitHandler}>
      <Title>LOGIN</Title>
      <Form>
        <InputWrapper>
          <Label
            label={"Email"}
            labelFontSize={"1rem"}
            width={"100%"}
            htmlFor={"email"}
          />
          <Input
            type={"text"}
            name={"email"}
            value={formData.email}
            onChangeHandler={onChangeHandler}
            required={"required"}
            placeholder={"이메일을 입력해주세요."}
            width={"100%"}
            fontSize={"1rem"}
          />
        </InputWrapper>
        <InputWrapper>
          <Label
            label={"Password"}
            labelFontSize={"1rem"}
            width={"100%"}
            htmlFor={"password"}
          />
          <Input
            type={"password"}
            name={"password"}
            value={formData.password}
            onChangeHandler={onChangeHandler}
            required={"required"}
            placeholder={"8자리 이상 입력해주세요."}
            width={"100%"}
            fontSize={"1rem"}
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button
            width={"100%"}
            height={"1rem"}
            content={"로그인"}
            fontSize={"0.8rem"}
            borderRadius={"0.3rem"}
          />
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40%;
  border-radius: 10px;
  background-color: #ffffff;
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  padding: 5rem 0rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.subColor};
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0rem;
`;

const Form = styled.form`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  margin: 1rem 0rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
`;

export default SignIn;
