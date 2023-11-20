import "./App.css";
import Header from "./header/Header.tsx";
import ToDos from "./body/to-dos/ToDos.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const onAdd = (toDo: string) => {};
  return (
    <>
      <Header onAdd={onAdd} />
      <ToDos />
    </>
  );
}

export default App;
