import { useContext, useEffect, useCallback } from "react";
import Key from "../Key";
import { BoardContext } from "../../context/Board/BoardContext";
import { UserContext } from "../../context/User/UserContext";
import { ThemeContext } from "../../context/Theme/ThemeContext";

const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"];
const thirdRow = ["z", "x", "c", "v", "b", "n", "m"];

const timerMinutes = 1 * 10 * 1000;

export default function Keyboard() {
  const { board, currentPosition, setCurrentPosition, wordsBank, currentWord, inWordLetters, inPositionLetters, notInWordLetters } = useContext(BoardContext);
  const { setWinner, setGameOver, victories, games, setVictories, setGames, setUpdateToken, setShowStatistics, setNextWordTime, gameOver, setLastWord } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const handleSubmit = () => {
    if (currentPosition.letterPosition !== 5) return;

    const currentGuess = board[currentPosition.row].join("");

    if (wordsBank.includes(currentGuess)) {
      setCurrentPosition({ row: currentPosition.row + 1, letterPosition: 0 });
    } else {
      return alert("Palabra no encontrada");
    }

    if (currentGuess === currentWord) {
      setWinner(true);
      setGameOver(true);
      setVictories(victories + 1);
      setShowStatistics(true);
      setGames(games + 1);
      setNextWordTime(Date.now() + timerMinutes);
      setUpdateToken({
        update: true,
        lastWord: "",
      });
    } else {
      if (currentPosition.row === 4) {
        setWinner(false);
        setGameOver(true);
        setGames(games + 1);
        setShowStatistics(true);
        setLastWord(currentWord);
        setNextWordTime(Date.now() + timerMinutes);
        setUpdateToken({
          update: true,
          lastWord: currentWord,
        });
      }
    }
  };

  const handleDelete = () => {
    if (currentPosition.letterPosition === 0) return;
    board[currentPosition.row][currentPosition.letterPosition - 1] = "";
    setCurrentPosition({ ...currentPosition, letterPosition: currentPosition.letterPosition - 1 });
  };

  const handleLetterClick = (kValue: string) => {
    board[currentPosition.row][currentPosition.letterPosition] = kValue;
    setCurrentPosition({ ...currentPosition, letterPosition: currentPosition.letterPosition + 1 });
  };

  const handleLetterPress = (kValue: string) => {
    if (!gameOver) {
      const regex = new RegExp(/^[A-z-ñ]{1}$/);
      if (!regex.test(kValue)) return;
      handleLetterClick(kValue);
    }
  };

  const handleKeyClick = (keyValue: string) => {
    if (!gameOver) {
      if (keyValue === "Enter") {
        handleSubmit();
      } else if (keyValue === "Delete") {
        handleDelete();
      } else if (currentPosition.letterPosition < 5 && currentPosition.row < 5) {
        handleLetterClick(keyValue);
      }
    }
  };

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (!gameOver) {
        if (e.key === "Enter") {
          handleSubmit();
        } else if (e.key === "Backspace") {
          handleDelete();
        } else if (currentPosition.letterPosition < 5 && currentPosition.row < 5) {
          handleLetterPress(e.key.toLocaleLowerCase());
        }
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

  const deleteIconLight = "delete-icon-light.png";
  const deleteIconDark = "delete-icon-dark.png";

  return (
    <div className={`flex justify-center p-2 mt-8  ${theme === "light" ? "bg-gray-100" : "bg-dark-palette-components"} rounded-2xl sm:pl-5 sm:pt-8 sm:mt-14 sm:pb-9  sm:w-full sm:max-w-[638px]`}>
      <div>
        <div className="flex sm:justify-start justify-center w-full max-w-xl sm:pl-8">
          {firstRow.map((letter, key) => (
            <div key={key}>
              <Key
                value={letter}
                keyValue={letter}
                handleKeyClick={handleKeyClick}
                inPosition={inPositionLetters.includes(letter)}
                inWord={inWordLetters.includes(letter)}
                notInWord={notInWordLetters.includes(letter)}
              />
            </div>
          ))}
        </div>
        <div className="flex w-full max-w-xl sm:mt-2 mt-1 sm:pl-12 sm:justify-start justify-center">
          {secondRow.map((letter, key) => (
            <div key={key}>
              <Key
                value={letter}
                keyValue={letter}
                handleKeyClick={handleKeyClick}
                inPosition={inPositionLetters.includes(letter)}
                inWord={inWordLetters.includes(letter)}
                notInWord={notInWordLetters.includes(letter)}
              />
            </div>
          ))}
        </div>
        <div className="flex w-full max-w-xl sm:mt-2 mt-1 sm:justify-start justify-center">
          <Key value={"ENTER"} wide keyValue={"Enter"} handleKeyClick={handleKeyClick} />
          {thirdRow.map((letter, key) => (
            <div key={key}>
              <Key
                value={letter}
                keyValue={letter}
                handleKeyClick={handleKeyClick}
                inPosition={inPositionLetters.includes(letter)}
                inWord={inWordLetters.includes(letter)}
                notInWord={notInWordLetters.includes(letter)}
              />
            </div>
          ))}
          <Key value={<img src={`${theme === "light" ? deleteIconLight : deleteIconDark}`} />} keyValue={"Delete"} wide handleKeyClick={handleKeyClick} />
        </div>
      </div>
    </div>
  );
}
