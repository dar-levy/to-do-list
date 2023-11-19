import ToDoItem from "./to-do/ToDoItem.tsx";
import { useState } from "react";

function ToDos() {
  const [toDos, setToDos] = useState([
    "Buy milk",
    "Watch Equaliser 3",
    "Prepare to the exam",
  ]);

  const onDelete = (item: string) => {
    setToDos(toDos.filter((toDo) => toDo != item));
  };

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
