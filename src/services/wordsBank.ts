import wordsList from "../words.txt";
import { SpecialCharactersDictionaryInterface, WordsBankInterface } from "./types";

function removeSpecialCharacters(text: string) {
  const replaceCharacters: SpecialCharactersDictionaryInterface = {
    'á': 'a',
    'é': 'e',
    'í': 'i',
    'ó': 'o',
    'ú': 'u'
  };
  return text.split('').map(letter => replaceCharacters[letter] || letter).join('').toString();
}

export const getWordsBank = async (): Promise<WordsBankInterface> => {
  const wordsArr: Array<string> = [];
  await fetch(wordsList)
    .then((response) => response.text())
    .then((result) => {
      result.split("\n").forEach((word) => {
        const unformattedWord = removeSpecialCharacters(word).replace('\r','')
        if (unformattedWord.length === 5) {
          wordsArr.push(unformattedWord);
        }
      });
    });
  return { wordsArr };
};
