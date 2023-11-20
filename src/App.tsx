import "./App.css";
import Header from "./header/Header.tsx";
import ToDos from "./body/to-dos/ToDos.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([
    "Buy milk",
    "Watch Equaliser 3",
    "Prepare to the exam",
  ]);

  const onAdd = (toDo: string) => {
    setToDos([...toDos, toDo]);
  };

  const onDelete = (item: string) => {
    setToDos(toDos.filter((toDo) => toDo != item));
  };

  return (
    <>
      <Header onAdd={onAdd} />
      <ToDos toDos={toDos} onDelete={onDelete} />
    </>
  );
}

export default App;
