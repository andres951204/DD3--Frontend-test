import { useCallback, useContext, useEffect } from "react";
import { KeyInterface } from "./types";
import { BoardContext } from "../../context/Board/BoardContext";

export default function Key({ value, keyValue, wide = false }: KeyInterface) {
  const { board, setBoard, currentPosition, setCurrentPosition } = useContext(BoardContext);

  const handleSubmit = () => {
    if (currentPosition.row >= 5) return;
    setCurrentPosition({ row: currentPosition.row + 1, letterPosition: 0 });
  };

  const handleDelete = () => {
    if (currentPosition.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentPosition.row][currentPosition.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrentPosition({ ...currentPosition, letterPosition: currentPosition.letterPosition - 1 });
  };

  const handleLetterClick = (kValue: string) => {
    const newBoard = [...board];
    newBoard[currentPosition.row][currentPosition.letterPosition] = kValue;
    setBoard(newBoard);
    setCurrentPosition({ ...currentPosition, letterPosition: currentPosition.letterPosition + 1 });
  };

  const handleLetterPress = (kValue: string) => {
    const regex = new RegExp(/^[A-z]{1}$/);
    if (!regex.test(kValue)) return;
    handleLetterClick(kValue);
  };

  const handleKeyClick = () => {
    if (keyValue === "Enter") {
      handleSubmit();
    } else if (keyValue === "Delete") {
      handleDelete();
    } else if (currentPosition.letterPosition < 5 && currentPosition.row < 5) {
      handleLetterClick(keyValue);
    }
  };

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSubmit();
      } else if (e.key === "Backspace") {
        handleDelete();
      } else if (currentPosition.letterPosition < 5 && currentPosition.row < 5) {
        handleLetterPress(e.key);
      }
    },
    [currentPosition.letterPosition, currentPosition.row]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      <div
        onClick={handleKeyClick}
        className={`h-12 ${wide ? "w-[71px] text-base" : "w-11 text-lg"} mr-2 bg-keyboard-clean flex justify-center items-center rounded-md  font-semibold 
      text-keyboard-character cursor-pointer hover:outline hover:outline-2`}
      >
        {value}
      </div>
    </>
  );
}
