import wordsList from "../words.txt";

export const getWordsBank = async () => {
  let wordsSet;
  await fetch(wordsList)
    .then((response) => response.text())
    .then((result) => {
      const wordsArr = result.split("\n").filter((word) => word.length === 5)
      wordsSet = new Set(wordsArr);
    });
  return { wordsSet };
};
