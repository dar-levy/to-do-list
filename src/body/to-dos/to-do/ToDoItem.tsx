import DeleteButton from "./delete-button/DeleteButton.tsx";
import "./ToDoItem.css";

function ToDoItem({ text }) {
  return (
    <li className="to-do-item">
      <p>{text}</p>
      <DeleteButton />
    </li>
  );
}

export default ToDoItem;
