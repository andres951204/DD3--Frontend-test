import { createContext, useEffect, useState } from "react";
import { ReactChildrenInterface } from "../../types";
import { TokenInterface, UserContextInterface } from "./types";

const TOKEN_KEY = "wordle-game-token";

const initialState: UserContextInterface = {
  games: 0,
  setGames: () => {},
  nextWordTimer: new Date(),
  setNextWordTimer: () => {},
  victories: 0,
  setVictories: () => {},
  winner: false,
  setWinner: () => {},
  gameOver: false,
  setGameOver: () => {},
  showStatistics: false,
  setShowStatistics: () => {},
  setUpdateToken: () => {}
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }: ReactChildrenInterface) => {
  const [games, setGames] = useState(0);
  const [victories, setVictories] = useState(0);
  const [nextWordTimer, setNextWordTimer] = useState(new Date());
  const [winner, setWinner] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [updateToken, setUpdateToken] = useState(false);

  useEffect(() => {
    if (updateToken) {
      const newToken: TokenInterface = {
        games,
        victories,
        gameOver,
        winner,
        nextWordTimer,
      };
      localStorage.setItem(TOKEN_KEY, JSON.stringify(newToken));
      setUpdateToken(false)
    }
  }, [updateToken]);

  useEffect(() => {
    const currentToken = localStorage.getItem(TOKEN_KEY);
    if (currentToken) {
      const token: TokenInterface = JSON.parse(currentToken);
      setGames(token.games);
      setVictories(token.victories);
      setGameOver(token.gameOver);
      setNextWordTimer(token.nextWordTimer);
      setWinner(token.winner);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        games,
        setGames,
        victories,
        setVictories,
        nextWordTimer,
        setNextWordTimer,
        winner,
        setWinner,
        gameOver,
        setGameOver,
        showStatistics,
        setShowStatistics,
        setUpdateToken
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
