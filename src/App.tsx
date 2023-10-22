import { useState } from "react";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Keyboard from "./components/Keyboard";
import { ThemeProvider } from "./context/Theme/ThemeContext";
import LettersBoard from "./components/LettersBoard";
import { BoardProvider } from "./context/Board/BoardContext";
import Statistics from "./components/Statistics";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);
  const [winner, setWinner] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);

  return (
    <ThemeProvider>
      <div className="flex flex-col justify-center items-center pt-8 select-none">
        <Header setShowInstructions={setShowInstructions} showInstructions={showInstructions} showStatistics={showStatistics} setShowStatistics={setShowStatistics} />
        <BoardProvider>
          <LettersBoard />
          <Keyboard setWinner={setWinner} />
        </BoardProvider>
        <Instructions showInstructions={showInstructions} setShowInstructions={setShowInstructions} />
        <Statistics setShowStatistics={setShowStatistics} showStatistics={showStatistics} />
      </div>
    </ThemeProvider>
  );
}

export default App;
