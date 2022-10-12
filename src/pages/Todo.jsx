import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CreateForm from "../components/todo/CreateForm";
import TodoList from "../components/todo/TodoList";

const Todo = () => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);
  const accessToken = localStorage.getItem("access_token");
  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <Wrapper>
      <CreateForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 50rem;
  margin: 1rem 0rem;
  background-color: ${({ theme }) => theme.mainColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default Todo;
