import "./ToDoGenerator.css";
import { useRef } from "react";

interface Props {
  onAdd: (toDo: string) => void;
}

const ToDoGenerator = ({ onAdd }: Props) => {
  const inputRef = useRef<any>(null);

  const handleClick = () => {
    if (inputRef.current != null && inputRef.current.value.length != 0) {
      onAdd(inputRef.current.value);
    }
  };

  return (
    <div className="to-do-generator">
      <input ref={inputRef} type="text" placeholder="Add a new to do" />
      <span className="addBtn" onClick={() => handleClick()}>
        Add
      </span>
    </div>
  );
};

export default ToDoGenerator;
