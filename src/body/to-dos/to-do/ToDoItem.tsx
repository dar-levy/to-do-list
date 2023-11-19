import DeleteButton from "./delete-button/DeleteButton.tsx";
import "./ToDoItem.css";

interface Props {
  heading: string;
}

function ToDoItem({ heading }: Props) {
  return (
    <li className="to-do-item">
      <p>{heading}</p>
      <DeleteButton />
    </li>
  );
}

export default ToDoItem;
