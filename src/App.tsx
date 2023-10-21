import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LettersGrid from "./components/LettersGrid";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col justify-center items-center pt-8 select-none">
        <Header />
        <LettersGrid />
        <Keyboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
