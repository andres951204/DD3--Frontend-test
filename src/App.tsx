import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Keyboard from "./components/Keyboard";
import LettersGrid from "./components/LettersGrid";
import { ThemeProvider } from "./context/ThemeContext";
import { WordsProvider } from "./context/WordsContext";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col justify-center items-center pt-8 select-none">
        <Header />
        <WordsProvider>
          <LettersGrid />
          <Keyboard />
        </WordsProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
