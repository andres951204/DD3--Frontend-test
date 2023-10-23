import { createContext, useEffect, useState } from "react";
import { ReactChildrenInterface } from "../../types";
import { TokenInterface, UserContextInterface } from "./types";

const TOKEN_KEY = "wordle-game-token";

const initialState: UserContextInterface = {
  games: 0,
  setGames: () => {},
  nextWordTime: 0,
  setNextWordTime: () => {},
  victories: 0,
  setVictories: () => {},
  winner: false,
  setWinner: () => {},
  gameOver: false,
  setGameOver: () => {},
  showStatistics: false,
  setShowStatistics: () => {},
  showInstructions: false,
  setShowInstructions: () => {},
  setUpdateToken: () => ({ update: false, lastWord: "" }),
  resetGame: () => {},
  lastWord: "",
  setLastWord: () => {},
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }: ReactChildrenInterface) => {
  const [games, setGames] = useState(0);
  const [victories, setVictories] = useState(0);
  const [nextWordTime, setNextWordTime] = useState(0);
  const [winner, setWinner] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [lastWord, setLastWord] = useState("");
  const [showInstructions,setShowInstructions] = useState(true)
  const [updateToken, setUpdateToken] = useState({
    update: false,
    lastWord: "",
  });

  useEffect(() => {
    if (updateToken.update) {
      const newToken: TokenInterface = {
        games,
        victories,
        gameOver,
        winner,
        nextWordTime,
        lastWord: updateToken.lastWord,
      };
      localStorage.setItem(TOKEN_KEY, JSON.stringify(newToken));
      setUpdateToken({ update: false, lastWord: "" });
    }
  }, [updateToken.update]);

  useEffect(() => {
    const currentToken = localStorage.getItem(TOKEN_KEY);
    if (currentToken) {
      const token: TokenInterface = JSON.parse(currentToken);
      setGames(token.games);
      setVictories(token.victories);
      setGameOver(token.gameOver);
      setNextWordTime(token.nextWordTime);
      setWinner(token.winner);
      setLastWord(token.lastWord);
      setShowInstructions(false)
      if (token.gameOver) {
        setShowStatistics(true);
      }
    }
  }, []);

  const resetGame = () => {
    setGameOver(false);
    setShowStatistics(false);
  };

  return (
    <UserContext.Provider
      value={{
        games,
        setGames,
        victories,
        setVictories,
        nextWordTime,
        setNextWordTime,
        winner,
        setWinner,
        gameOver,
        setGameOver,
        showStatistics,
        setShowStatistics,
        showInstructions,
        setShowInstructions,
        setUpdateToken,
        resetGame,
        lastWord,
        setLastWord,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
