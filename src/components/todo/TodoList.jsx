import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { apis } from "../../shared/axios";
import Todo from "./Todo";

const TodoList = ({ setTodoList, todoList }) => {
  useEffect(() => {
    apis.get_todos().then(({ data }) => {
      setTodoList([...data]);
    });
  }, []);

  const onDeleteHanlder = (todoId) => {};

  const onUpdateHandler = (todoId, todo, isCompleted) => {
    apis.update_todo(todoId, todo, isCompleted).then(({ data }) => {
      setTodoList(
        todoList.map((todo) =>
          todo.id === data.id
            ? {
                ...todo,
                todo: data.todo,
              }
            : todo
        )
      );
    });
  };

  return (
    <Wrapper>
      <ItemList>
        {todoList &&
          todoList.map((todo) => {
            return (
              <Fragment key={todo.id}>
                {todo.isCompleted === false && (
                  <Todo
                    todo={todo}
                    key={todo.id}
                    onDeleteHanlder={onDeleteHanlder}
                    onUpdateHandler={onUpdateHandler}
                  />
                )}
              </Fragment>
            );
          })}
      </ItemList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(255, 255, 255);
  margin: 0px 2rem;
  display: flex;
  flex-direction: column;
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

const ItemList = styled.div`
  width: 100%;
  min-height: 18rem;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.5rem;
  column-gap: 1rem;
  row-gap: 1rem;
  margin-bottom: 1rem;
`;

export default TodoList;
