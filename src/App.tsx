import "./App.css";
import Header from "./header/Header.tsx";
import ToDos from "./body/to-dos/ToDos.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Header />
      <ToDos />
    </>
  );
}

export default App;
