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
  boardInitialState,
  currentPosition: currentPositionInitialState,
  setCurrentPosition: () => {},
  currentWord: "",
  wordsBank: [""],
  notInWordLetters: [""],
  setNotInWordLetters: () => {},
  inPositionLetters: [""],
  setInPositionLetters: () => {},
  inWordLetters: [""],
  setInWordLetters: () => {},
  resetBoard: () => {},
};

export const BoardContext = createContext(boardContextInitialState);

export const BoardProvider = ({ children }: ReactChildrenInterface) => {
  const [board, setBoard] = useState(boardInitialState);
  const [currentPosition, setCurrentPosition] = useState(currentPositionInitialState);
  const [currentWord, setCurrentWord] = useState("");
  const [wordsBank, setWordsBank] = useState([""]);
  const [notInWordLetters, setNotInWordLetters] = useState([""]);
  const [inWordLetters, setInWordLetters] = useState([""]);
  const [inPositionLetters, setInPositionLetters] = useState([""]);

  useEffect(() => {
    getWordsBank().then((words) => {
      if (words.wordsArr) {
        setCurrentWord(words.wordsArr[Math.floor(Math.random() * words.wordsArr.length)]);
        setWordsBank(words.wordsArr);
      }
    });
  }, []);

  const resetBoard = () => {
    const newBoard = [];
    for (let i = 0; i < 5; i++) {
      newBoard[i] = ["", "", "", "", ""];
    }
    setBoard(newBoard);
    setInPositionLetters([""]);
    setInWordLetters([""]);
    setNotInWordLetters([""]);
    setCurrentWord(wordsBank[Math.floor(Math.random() * wordsBank.length)])
    setCurrentPosition({ letterPosition: 0, row: 0 });
  };

  return (
    <BoardContext.Provider
      value={{
        board,
        setBoard,
        boardInitialState,
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
        resetBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
