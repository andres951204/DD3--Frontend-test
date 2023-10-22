import { LetterInterface } from "./type";
import { BoardContext } from "./../../context/Board/BoardContext";
import { useContext } from "react";

export default function Letter({ letterPosition, row }: LetterInterface) {
  const { board, currentWord, currentPosition } = useContext(BoardContext);
  const letter = board[row][letterPosition];

  const inPosition = letter === currentWord[letterPosition];
  const inWord = !inPosition && letter !== "" && currentWord.includes(letter);

  const bgColor = currentPosition.row > row && (inPosition ? "bg-letter-box-in-position" : inWord ? "bg-letter-box-in-word" : "bg-letter-box-not-in-word");

  return <div className={`w-[76px] h-[76px] mr-3 ${bgColor} text-white capitalize bg-letter-box-empty rounded-md flex justify-center items-center font-extrabold text-4xl`}>{letter}</div>;
}
