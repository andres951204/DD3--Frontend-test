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

const boardContextInitialState = {
  board: boardInitialState,
  setBoard: () => {},
  currentPosition: currentPositionInitialState,
  setCurrentPosition: () => {},
  currentWord: "",
  wordsBank: new Set([""]),
};

export const BoardContext = createContext<BoardContextInterface>(boardContextInitialState);

export const BoardProvider = ({ children }: ReactChildrenInterface) => {
  const [board, setBoard] = useState(boardInitialState);
  const [currentPosition, setCurrentPosition] = useState(currentPositionInitialState);
  const [currentWord] = useState("asedo");
  const [wordsBank, setWordsBank] = useState(new Set([""]));

  useEffect(() => {
  getWordsBank().then((words) => {
      if (words.wordsSet) {
        setWordsBank(words.wordsSet);
      }
    });
  }, []);

  return <BoardContext.Provider value={{ board, setBoard, currentPosition, setCurrentPosition, currentWord, wordsBank }}>{children}</BoardContext.Provider>;
};
