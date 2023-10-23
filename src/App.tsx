import { useState } from "react";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Keyboard from "./components/Keyboard";
import { ThemeProvider } from "./context/Theme/ThemeContext";
import LettersBoard from "./components/LettersBoard";
import { BoardProvider } from "./context/Board/BoardContext";
import Statistics from "./components/Statistics";
import { UserProvider } from "./context/User/UserContext";
import Container from "./components/Container";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <ThemeProvider>
      <UserProvider>
        <Container>
          <Header setShowInstructions={setShowInstructions} />
          <BoardProvider>
            <LettersBoard />
            <Keyboard />
          </BoardProvider>
          <Instructions showInstructions={showInstructions} setShowInstructions={setShowInstructions} />
          <Statistics />
        </Container>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
