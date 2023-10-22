import { createContext, useState, useEffect } from "react";
import { ReactChildrenInterface } from "../../types";
import { BoardContextInterface } from "./types";
import { getWordsBank } from "../../services/wordsBank";

const boardInitialState = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const currentPositionInitialState = {
  row: 0,
  letterPosition: 0,
};

const boardContextInitialState: BoardContextInterface = {
  board: boardInitialState,
  setBoard: () => {},
  currentPosition: currentPositionInitialState,
  setCurrentPosition: () => {},
  currentWord: "",
  wordsBank: new Set([""]),
  notInWordLetters: [""],
  setNotInWordLetters: () => {},
  inPositionLetters: [""],
  setInPositionLetters: () => {},
  inWordLetters: [""],
  setInWordLetters: () => {},
};

export const BoardContext = createContext(boardContextInitialState);

export const BoardProvider = ({ children }: ReactChildrenInterface) => {
  const [board, setBoard] = useState(boardInitialState);
  const [currentPosition, setCurrentPosition] = useState(currentPositionInitialState);
  const [currentWord] = useState("asado");
  const [wordsBank, setWordsBank] = useState(new Set([""]));
  const [notInWordLetters, setNotInWordLetters] = useState([""]);
  const [inWordLetters, setInWordLetters] = useState([""]);
  const [inPositionLetters, setInPositionLetters] = useState([""]);

  useEffect(() => {
    getWordsBank().then((words) => {
      if (words.wordsSet) {
        setWordsBank(words.wordsSet);
      }
    });
  }, []);

  return (
    <BoardContext.Provider
      value={{
        board,
        setBoard,
        currentPosition,
        setCurrentPosition,
        currentWord,
        wordsBank,
        notInWordLetters,
        setNotInWordLetters,
        inPositionLetters,
        setInPositionLetters,
        inWordLetters,
        setInWordLetters,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
