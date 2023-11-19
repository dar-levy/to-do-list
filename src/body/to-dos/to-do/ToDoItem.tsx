import DeleteButton from "./delete-button/DeleteButton.tsx";
import "./ToDoItem.css";

function ToDoItem() {
  return (
    <li className="to-do-item">
      <p>Buy milk</p>
      <DeleteButton />
    </li>
  );
}

export default ToDoItem;
