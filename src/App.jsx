import "./App.css";
import NavBar from "./components/NavBar";
import Courses from "./components/Courses";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <NavBar />
        <Courses />
        <ThemeToggle />
      </ThemeProvider>
    </div>
  );
}

export default App;
