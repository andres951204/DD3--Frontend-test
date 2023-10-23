import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/User/UserContext";
import { BoardContext } from "../../context/Board/BoardContext";

let timeout: ReturnType<typeof setTimeout>;

const COUNTDOWN_AMOUNT_TOTAL = 1 * 10;

export default function Timer() {
  const [seconds, setSeconds] = useState(COUNTDOWN_AMOUNT_TOTAL);
  const { setGameOver, setShowStatistics, setUpdateToken } = useContext(UserContext);
  const { board } = useContext(BoardContext);

  const displaySeconds = seconds % 60;
  const displayMinutes = Math.floor(seconds / 60);

  useEffect(() => {
    if (seconds > 0) {
      timeout = setTimeout(() => {
        setSeconds((state) => state - 1);
      }, 1000);
    } else {
      clearTimeout(timeout);
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          // eslint-disable-next-line no-debugger
          debugger
          board.current[i] = ["A", "A", "A", "A", "A"];
        }
      }, 3000);
      setGameOver(false);
      setShowStatistics(false);
      setUpdateToken(true);
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
