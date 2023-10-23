import { LetterInterface } from "./type";
import { BoardContext } from "./../../context/Board/BoardContext";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/Theme/ThemeContext";

export default function Letter({ letterPosition, row }: LetterInterface) {
  const { board, currentWord, currentPosition, inWordLetters, notInWordLetters, setInWordLetters, setInPositionLetters, setNotInWordLetters } = useContext(BoardContext);
  const { theme } = useContext(ThemeContext);
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const validatePosition = () => {
      const inPosition = board[row][letterPosition] === currentWord[letterPosition];
      const inWord = !inPosition && board[row][letterPosition] !== "" && currentWord.includes(board[row][letterPosition]);

      let bgColor = "";
      if (currentPosition.row > row) {
        bgColor = inPosition ? "bg-letter-box-in-position" : inWord ? "bg-letter-box-in-word" : "bg-letter-box-not-in-word";
      } else {
        bgColor = theme === "light" ? "bg-letter-box-empty" : "bg-letter-box-dark-empty";
      }
      setBgColor(bgColor);

      if (inPosition) {
        if (inWordLetters.includes(board[row][letterPosition])) {
          setInWordLetters((prev) => [...prev.filter((l) => l !== board[row][letterPosition])]);
        }
        setInPositionLetters((prev) => [...prev, board[row][letterPosition]]);
      } else if (inWord) {
        setInWordLetters((prev) => [...prev, board[row][letterPosition]]);
      } else if (!inPosition && !inWord && !notInWordLetters.includes(board[row][letterPosition])) {
        setNotInWordLetters((prev) => [...prev, board[row][letterPosition]]);
      }
    };

    validatePosition();
  }, [currentPosition.row]);

  return <div className={`w-[76px] h-[76px] mr-3  text-white capitalize ${bgColor} rounded-md flex justify-center items-center font-extrabold text-4xl`}>{board[row][letterPosition]}</div>;
}
