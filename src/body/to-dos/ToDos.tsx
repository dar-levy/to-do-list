import ToDoItem from "./to-do/ToDoItem.tsx";

function ToDos() {
  const items = ["Buy milk", "Watch Equaliser 3", "Prepare to the exam"];
  const getMessage = () => {
    return items.length == 0 && <h1>There are no items</h1>;
  };

  return (
    <ul>
      {getMessage()}
      {items.map((item) => (
        <ToDoItem key={item} text={item} />
      ))}
    </ul>
  );
}

export default ToDos;
