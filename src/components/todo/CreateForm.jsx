import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { apis } from "../../shared/axios";
import Input from "../elements/GlobalInput";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Icon from "../elements/GlobalIcon";

const CreateForm = ({ props, todoList, setTodoList }) => {
  const inputRef = useRef(null);
  const initialState = {
    todo: "",
  };

  const [todo, setTodo] = useState(initialState);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //axios
    apis.create_todo(todo).then(({ data }) => setTodoList([...todoList, data]));
    setTodo(initialState);
    inputRef.current.focus();
  };
  return (
    <>
      <Wrapper>
        <Form onSubmit={onSubmitHandler}>
          <Input
            name="todo"
            type="text"
            onChange={onChangeHandler}
            Ref={inputRef}
            value={todo.todo}
            width={"95%"}
            placeholder={"오늘의 할 일을 기록해보세요."}
            required={"required"}
          ></Input>
          <Icon
            icon={faPlus}
            width={"1rem"}
            height={"1rem"}
            color={"white"}
            bgColor={"#5D5FEF"}
            borderRadius={"2rem"}
            onClick={onSubmitHandler}
          ></Icon>
        </Form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0.1rem;
  @media (min-width: 1280px) {
    /* Desktop */
    width: 40%;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    /* Tablet */
    width: 50%;
  }
  @media (max-width: 767px) {
    /* Mobile */
    width: 60%;
  }
`;

const Form = styled.form`
  width: 90%;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default CreateForm;
