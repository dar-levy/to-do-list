import ToDoItem from "./to-do/ToDoItem.tsx";

function ToDos() {
  const items = ["Buy milk", "Watch Equaliser 3", "Prepare to the exam"];
  const message = items.length == 0 ? <h1>There are no items</h1> : null;
  return (
    <ul>
      {message}
      {items.map((item) => (
        <ToDoItem text={item} />
      ))}
    </ul>
  );
}

export default ToDos;
