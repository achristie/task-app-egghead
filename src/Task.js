import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  border-radius: 50%;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? "cornflowerblue" : "white")};
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px
  margin-right: 8px;
`;

function Task(props) {
  const isDragDisabled = props.task.id === "task-1";
  return (
    <Draggable
      draggableId={props.task.id}
      index={props.index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Handle />
          {props.task.content[0]}
        </Container>
      )}
    </Draggable>
  );
}

export default Task;
