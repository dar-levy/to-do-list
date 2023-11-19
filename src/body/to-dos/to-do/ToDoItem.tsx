import DeleteButton from "./delete-button/DeleteButton.tsx";
import "./ToDoItem.css";
import { useState } from "react";

interface Props {
  heading: string;
  onDelete: (heading: string) => void;
}

function ToDoItem({ heading, onDelete }: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const onCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li onClick={onCheck} className={isChecked ? "checked" : ""}>
      <p>{heading}</p>
      <DeleteButton onDelete={onDelete} heading={heading} />
    </li>
  );
}

export default ToDoItem;
