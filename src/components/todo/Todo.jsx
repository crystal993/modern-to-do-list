import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../elements/GlobalInput";
import Button from "../elements/GlobalButton";
import {
  faSquareCheck,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import Icon from "../elements/GlobalIcon";

const Todo = ({ todo, onDeleteHanlder, onUpdateHandler }) => {
  const initialState = { id: "", todo: "", isCompleted: "", userId: "" };

  const [isEdit, setIsEdit] = useState(false);
  const [todoItem, setTodoItem] = useState(initialState);

  useEffect(() => {
    setTodoItem(todo);
  }, []);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setTodoItem({ ...todoItem, [name]: value });
  };
  return (
    <Wrapper>
      {todoItem.isCompleted ? (
        <Icon
          icon={faSquareCheck}
          color={"#5d5fef"}
          width={"1rem"}
          height={"1rem"}
          onClick={() => setTodoItem({ ...todoItem, isCompleted: false })}
        />
      ) : (
        <Icon
          icon={faSquare}
          color={"#cbcbcb"}
          width={"1rem"}
          height={"1rem"}
          onClick={() => setTodoItem({ ...todoItem, isCompleted: true })}
        />
      )}
      <ContentWrapper>
        {!isEdit ? (
          todoItem.isCompleted ? (
            <TodoTxt textDecoration={"line-through"}>
              {todo.todo.length > 28
                ? todo.todo.slice(0, 28).concat("...")
                : todo.todo}
            </TodoTxt>
          ) : (
            <TodoTxt>
              {todo.todo.length > 28
                ? todo.todo.slice(0, 28).concat("...")
                : todo.todo}
            </TodoTxt>
          )
        ) : (
          <Input
            name={"todo"}
            value={todoItem.todo}
            onChange={onChangeHandler}
            width={"90%"}
            fontSize={"0.9rem"}
            padding={"0rem"}
          />
        )}
      </ContentWrapper>

      {!isEdit ? (
        <ButtonsWrapper>
          <Icon
            onClick={() => setIsEdit(true)}
            icon={faPen}
            color={"#cbcbcb"}
            hoverColor={"#5d5fef"}
            width={"1rem"}
            height={"1rem"}
            padding={"0.3rem"}
          />
          <Icon
            onClick={(e) => {
              e.preventDefault();
              onDeleteHanlder(todoItem.id);
            }}
            icon={faTrash}
            color={"#cbcbcb"}
            hoverColor={"#5d5fef"}
            width={"1rem"}
            height={"1rem"}
          />
        </ButtonsWrapper>
      ) : (
        <ButtonsWrapper>
          <Button
            onClick={(e) => {
              e.preventDefault();
              onUpdateHandler(todoItem.id, todoItem.todo, todoItem.isCompleted);
              setIsEdit(false);
            }}
            content={"제출"}
            fontSize={"0.5rem"}
            padding={"0.6rem"}
          />
          <Button
            onClick={() => setIsEdit(false)}
            content={"취소"}
            fontSize={"0.5rem"}
            padding={"0.6rem"}
            color={"gray"}
          />
        </ButtonsWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 2rem;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: rgb(38, 37, 37);
`;

const ContentWrapper = styled.div`
  text-align: center;
  height: 1.5rem;
  width: 60%;
  margin-top: 1rem;
  text-overflow: ellipsis;
`;

const ButtonsWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: -1rem;
  column-gap: 0.2rem;
`;

const TodoTxt = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  width: 100%;
  text-align: left;
  text-decoration: ${(props) => props.textDecoration};
`;

export default Todo;
