import { LetterInterface } from "./type";
import { BoardContext } from "../../../context/Board/BoardContext";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../context/Theme/ThemeContext";

export default function Letter({ letterPosition, row }: LetterInterface) {
  const { board, currentWord, currentPosition, inWordLetters, notInWordLetters, setInWordLetters, setInPositionLetters, setNotInWordLetters } = useContext(BoardContext);
  const { theme } = useContext(ThemeContext);
  const letter = board[row][letterPosition];

  const inPosition = letter === currentWord[letterPosition];
  const inWord = !inPosition && letter !== "" && currentWord.includes(letter);

  let bgColor = ''
  if (currentPosition.row > row) {
    bgColor = inPosition ? "bg-letter-box-in-position" : inWord ? "bg-letter-box-in-word" : "bg-letter-box-not-in-word";
  } else {
    bgColor = theme === "light" ? "bg-letter-box-empty" : "bg-letter-box-dark-empty";
  }

  useEffect(() => {
    if (inPosition) {
      if (inWordLetters.includes(letter)) {
        setInWordLetters((prev) => [...prev.filter((l) => l !== letter)]);
      }
      setInPositionLetters((prev) => [...prev, letter]);
    } else if (inWord) {
      setInWordLetters((prev) => [...prev, letter]);
    } else if (!inPosition && !inWord && !notInWordLetters.includes(letter)) {
      setNotInWordLetters((prev) => [...prev, letter]);
    }
  }, [currentPosition.row]);

  return (
    <div className={`w-[76px] h-[76px] transition-all divide-purple-50 mr-3 ${bgColor} text-white capitalize bg-letter-box-empty rounded-md flex justify-center items-center font-extrabold text-4xl`}>{letter}</div>
  );
}
