import wordsList from "../words.txt";
import { WordsBankInterface } from "./types";

export const getWordsBank = async (): Promise<WordsBankInterface> => {
  let wordsSet;
  await fetch(wordsList)
    .then((response) => response.text())
    .then((result) => {
      const wordsArr = result.split("\n").filter((word) => word.length === 5)
      wordsSet = new Set(wordsArr);
    });
  return { wordsSet };
};
