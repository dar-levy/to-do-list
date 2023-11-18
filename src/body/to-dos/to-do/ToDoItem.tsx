import DeleteButton from "./delete-button/DeleteButton.tsx";

function ToDoItem() {
  return (
    <li className="to-do-item">
        Buy milk
        <DeleteButton/>
    </li>
  )
}

export default ToDoItem
