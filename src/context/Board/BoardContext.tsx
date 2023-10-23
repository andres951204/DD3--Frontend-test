import { createContext, useState, useEffect, useRef } from "react";
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
  board: { current: boardInitialState },
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
};

export const BoardContext = createContext(boardContextInitialState);

export const BoardProvider = ({ children }: ReactChildrenInterface) => {
  const board = useRef([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
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

  return (
    <BoardContext.Provider
      value={{
        board,
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
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
