import { Dispatch, SetStateAction } from "react";

type BoardState = Array<Array<string>>;
type CurrentPositionState = {
  letterPosition: number;
  row: number;
};

export interface BoardContextInterface {
  board: BoardState;
  setBoard: Dispatch<SetStateAction<BoardState>>;
  currentPosition: CurrentPositionState;
  setCurrentPosition: Dispatch<SetStateAction<CurrentPositionState>>;
  currentWord: string;
  wordsBank: Set<string>;
}
