import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/User/UserContext";
import { BoardContext } from "../../context/Board/BoardContext";

let timeout: ReturnType<typeof setTimeout>;

const COUNTDOWN_AMOUNT_TOTAL = 5 * 60;
// const COUNTDOWN_AMOUNT_TOTAL = 5 * 2;

export default function Timer() {
  const [seconds, setSeconds] = useState(COUNTDOWN_AMOUNT_TOTAL);
  const { resetBoard } = useContext(BoardContext);
  const { resetGame, nextWordTime } = useContext(UserContext);
  const displaySeconds = seconds % 60;
  const displayMinutes = Math.floor(seconds / 60);

  useEffect(() => {
    if (seconds > 0) {
      const newSeconds = Math.floor((nextWordTime - Date.now()) / 1000);
      timeout = setTimeout(() => {
        setSeconds(newSeconds);
      }, 1000);
    } else {
      clearTimeout(timeout);
      resetGame();
      resetBoard();
    }
  }, [seconds]);

  return (
    <>
      <span>
        0{displayMinutes}:{displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}
      </span>
    </>
  );
}
