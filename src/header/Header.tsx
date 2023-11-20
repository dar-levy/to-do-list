import "./Header.css";
import ToDoGenerator from "./to-do-generator/ToDoGenerator.tsx";

function Header() {
  return (
    <div id="myDiv" className="header">
      <h1>To-Do List</h1>
      <ToDoGenerator />
    </div>
  );
}

export default Header;
