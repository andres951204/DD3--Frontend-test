import { useState } from "react";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Keyboard from "./components/Keyboard";
import { ThemeProvider } from "./context/Theme/ThemeContext";
import LettersBoard from "./components/LettersBoard";
import { BoardProvider } from "./context/Board/BoardContext";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <ThemeProvider>
      <div className="flex flex-col justify-center items-center pt-8 select-none">
        <Header setShowInstructions={setShowInstructions} showInstructions={showInstructions} />
        <BoardProvider>
          <LettersBoard />
          <Keyboard />
        </BoardProvider>
        <Instructions showInstructions={showInstructions} setShowInstructions={setShowInstructions} />
      </div>
    </ThemeProvider>
  );
}

export default App;
