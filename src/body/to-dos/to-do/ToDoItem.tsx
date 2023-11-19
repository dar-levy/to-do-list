import DeleteButton from "./delete-button/DeleteButton.tsx";
import "./ToDoItem.css";

interface Props {
  heading: string;
  onDelete: (heading: string) => void;
}

function ToDoItem({ heading, onDelete }: Props) {
  return (
    <li className="to-do-item">
      <p>{heading}</p>
      <DeleteButton onDelete={onDelete} heading={heading} />
    </li>
  );
}

export default ToDoItem;
