import "./ToDoGenerator.css";

const ToDoGenerator = () => {
  return (
    <div className="to-do-generator">
      <input type="text" placeholder="Add a new to do" />
      <span className="addBtn">Add</span>
    </div>
  );
};

export default ToDoGenerator;
