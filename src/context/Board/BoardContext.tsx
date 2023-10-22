import { createContext, useState } from "react";
import { ReactChildrenInterface } from "../../types";
import { BoardContextInterface } from "./types";

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
};

export const BoardContext = createContext<BoardContextInterface>(boardContextInitialState);

export const BoardProvider = ({ children }: ReactChildrenInterface) => {
  const [board, setBoard] = useState(boardInitialState);
  const [currentPosition, setCurrentPosition] = useState(currentPositionInitialState);

  return <BoardContext.Provider value={{ board, setBoard, currentPosition, setCurrentPosition }}>{children}</BoardContext.Provider>;
};
