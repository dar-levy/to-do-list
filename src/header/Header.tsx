import "./Header.css";
import ToDoGenerator from "./to-do-generator/ToDoGenerator.tsx";

interface Props {
  onAdd: (toDo: string) => void;
}

function Header({ onAdd }: Props) {
  return (
    <div id="myDiv" className="header">
      <h1>To-Do List</h1>
      <ToDoGenerator onAdd={onAdd} />
    </div>
  );
}

export default Header;
