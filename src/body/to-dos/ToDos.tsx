import ToDoItem from "./to-do/ToDoItem.tsx";
import { useState } from "react";

interface Props {
  toDos: string[];
  onDelete: (toDo: string) => void;
}

function ToDos({ toDos, onDelete }: Props) {
  const isToDosEmpty = () => {
    return toDos.length == 0 && <h1>There are no items</h1>;
  };

  return (
    <ul>
      {isToDosEmpty()}
      {toDos.map((toDo) => (
        <ToDoItem key={toDo} heading={toDo} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ToDos;
