import DeleteButton from "./delete-button/DeleteButton.tsx";

function ToDoItem() {
  return (
      <div className="to-do-item">
        <li>Buy milk</li>
        <DeleteButton/>
      </div>
  )
}

export default ToDoItem
