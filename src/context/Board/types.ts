import { Dispatch, SetStateAction } from "react";

type BoardState = Array<Array<string>>;
type CurrentPositionState = {
  letterPosition: number;
  row: number;
};

export interface BoardContextInterface {
  board: BoardState;
  setBoard: Dispatch<SetStateAction<BoardState>>;
  boardInitialState: BoardState;
  currentPosition: CurrentPositionState;
  setCurrentPosition: Dispatch<SetStateAction<CurrentPositionState>>;
  currentWord: string;
  wordsBank: Array<string>;
  notInWordLetters: Array<string>;
  setNotInWordLetters: Dispatch<SetStateAction<Array<string>>>;
  inWordLetters: Array<string>;
  setInWordLetters: Dispatch<SetStateAction<Array<string>>>;
  inPositionLetters: Array<string>;
  setInPositionLetters: Dispatch<SetStateAction<Array<string>>>;
  resetBoard: () => void
}
