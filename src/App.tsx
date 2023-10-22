import { useState } from "react";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Keyboard from "./components/Keyboard";
import { ThemeProvider } from "./context/Theme/ThemeContext";
import LettersBoard from "./components/LettersBoard";
import { BoardProvider } from "./context/Board/BoardContext";
import Statistics from "./components/Statistics";
import { UserProvider } from "./context/User/UserContext";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <ThemeProvider>
      <UserProvider>
        <div className="flex flex-col justify-center items-center pt-8 select-none">
          <Header setShowInstructions={setShowInstructions} />
          <BoardProvider>
            <LettersBoard />
            <Keyboard />
          </BoardProvider>
          <Instructions showInstructions={showInstructions} setShowInstructions={setShowInstructions} />
          <Statistics />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
