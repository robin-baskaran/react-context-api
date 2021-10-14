import "./App.css";
import NavBar from "./components/NavBar";
import Courses from "./components/Courses";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";
import ModalContextProvider from "./context/ModalContext";
import Modal1 from "./components/Modal1";
import Modal2 from "./components/Modal2";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <NavBar />
        <Courses />
        <ThemeToggle />
      </ThemeProvider>

      <div className="modal-container">
        <ModalContextProvider>
          <Modal1 />
          <Modal2 />
        </ModalContextProvider>
      </div>
    </div>
  );
}

export default App;
