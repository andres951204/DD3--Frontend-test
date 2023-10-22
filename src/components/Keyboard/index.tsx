import { useContext, useEffect, useCallback } from "react";
import Key from "../Key";
import { BoardContext } from "../../context/Board/BoardContext";
import { KeyboardInterface } from "./types";

const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"];
const thirdRow = ["z", "x", "c", "v", "b", "n", "m"];

export default function Keyboard({ setWinner }: KeyboardInterface) {
  const { board, setBoard, currentPosition, setCurrentPosition, wordsBank, currentWord, inWordLetters, inPositionLetters, notInWordLetters } = useContext(BoardContext);

  const handleSubmit = () => {
    if (currentPosition.letterPosition !== 5) return;

    const currentGuess = board[currentPosition.row].join("");

    if (currentGuess === currentWord) {
      alert("Winner");
      return setWinner(true);
    }

    if (wordsBank.has(currentGuess)) {
      setCurrentPosition({ row: currentPosition.row + 1, letterPosition: 0 });
    } else {
      alert("Palabra no encontrada");
    }
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

  const handleKeyClick = (keyValue: string) => {
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
        handleLetterPress(e.key.toLocaleLowerCase());
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
    <div className="flex justify-center mt-14 bg-gray-100 pl-5 pt-8 pb-9 rounded-2xl w-full max-w-[638px]">
      <div>
        <div className="flex w-full max-w-xl pl-8">
          {firstRow.map((letter, key) => (
            <div key={key}>
              <Key value={letter} keyValue={letter} handleKeyClick={handleKeyClick} inPosition={inPositionLetters.includes(letter)} inWord={inWordLetters.includes(letter)} notInWord={notInWordLetters.includes(letter)} />
            </div>
          ))}
        </div>
        <div className="flex w-full max-w-xl mt-2 pl-12">
          {secondRow.map((letter, key) => (
            <div key={key}>
              <Key value={letter} keyValue={letter} handleKeyClick={handleKeyClick} inPosition={inPositionLetters.includes(letter)} inWord={inWordLetters.includes(letter)} notInWord={notInWordLetters.includes(letter)} />
            </div>
          ))}
        </div>
        <div className="flex w-full max-w-xl mt-2">
          <Key value={"ENTER"} wide keyValue={"Enter"} handleKeyClick={handleKeyClick} />
          {thirdRow.map((letter, key) => (
            <div key={key}>
              <Key value={letter} keyValue={letter} handleKeyClick={handleKeyClick} inPosition={inPositionLetters.includes(letter)} inWord={inWordLetters.includes(letter)} notInWord={notInWordLetters.includes(letter)} />
            </div>
          ))}
          <Key value={<img src="/delete-icon.png" />} keyValue={"Delete"} wide handleKeyClick={handleKeyClick} />
        </div>
      </div>
    </div>
  );
}
