import { LetterInterface } from "./type";
import { BoardContext } from "./../../context/Board/BoardContext";
import { useContext } from "react";

export default function Letter({ letterPosition, row }: LetterInterface) {
  const { board } = useContext(BoardContext);
  const letter = board[row][letterPosition];

  return (
    <div  className={`w-[76px] h-[76px] mr-3 text-white capitalize bg-letter-box-not-in-word rounded-md flex justify-center items-center font-extrabold text-4xl`}>
      {letter}
    </div>
  );
}
