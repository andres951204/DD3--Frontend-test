import wordsList from "../words.txt";
import { WordsBankInterface } from "./types";

export const getWordsBank = async (): Promise<WordsBankInterface> => {
  const wordsArr = [""];
  await fetch(wordsList)
    .then((response) => response.text())
    .then((result) => {
      result.split("\n").forEach((word) => {
        if (word.length === 5) {
          wordsArr.push(
            word
              .normalize("NFD")
              .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2")
              .normalize()
          );
        }
      });
    });
  return { wordsArr };
};
