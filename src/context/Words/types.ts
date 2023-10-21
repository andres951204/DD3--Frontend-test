import { Letter } from "../../types";
import { Dispatch } from "react";

export type WordsStateType = Array<Array<Letter>>;

export interface WordsActionsInterface {
  payload: Array<Letter>;
  type: "begin" | "add";
}

export interface WordsContextInterface {
  words: WordsStateType;
  updateWords: Dispatch<WordsActionsInterface>;
}
