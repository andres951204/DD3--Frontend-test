import { useState } from "react";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Keyboard from "./components/Keyboard";
import LettersGrid from "./components/LettersGrid";
import { ThemeProvider } from "./context/Theme/ThemeContext";
import { WordsProvider } from "./context/Words/WordsContext";

function App() {

  const [showInstructions,setShowInstructions] = useState(false)

  return (
    <ThemeProvider>
      <div className="flex flex-col justify-center items-center pt-8 select-none">
        <Header setShowInstructions={setShowInstructions} showInstructions={showInstructions}  />
        <WordsProvider>
          <LettersGrid />
          <Keyboard />
        </WordsProvider>
        <Instructions showInstructions={showInstructions} setShowInstructions={setShowInstructions}  />
      </div>
    </ThemeProvider>
  );
}

export default App;
