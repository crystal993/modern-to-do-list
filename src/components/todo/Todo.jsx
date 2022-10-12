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
      {todo.isCompleted ? (
        <Icon
          icon={faSquareCheck}
          color={"#5d5fef"}
          width={"1rem"}
          height={"1rem"}
        />
      ) : (
        <Icon
          icon={faSquare}
          color={"#cbcbcb"}
          width={"1rem"}
          height={"1rem"}
        />
      )}
      <ContentWrapper>
        {!isEdit ? (
          <TodoTxt>
            {todo.todo.length > 28
              ? todo.todo.slice(0, 28).concat("...")
              : todo.todo}
          </TodoTxt>
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
            onClick={() => onDeleteHanlder(todoItem.id)}
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
            onClick={() => setIsEdit(false)}
            content={"취소"}
            fontSize={"0.5rem"}
            padding={"0.6rem"}
            color={"gray"}
          />
          <Button
            onClick={() => {
              onUpdateHandler(todoItem.id, todoItem.todo, todoItem.isCompleted);
              setIsEdit(false);
            }}
            content={"제출"}
            fontSize={"0.5rem"}
            padding={"0.6rem"}
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
`;

export default Todo;
