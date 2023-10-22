import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/User/UserContext";

let timeout: ReturnType<typeof setTimeout>;

const COUNTDOWN_AMOUNT_TOTAL = 1 * 10;

export default function Timer() {

    const [seconds, setSeconds] = useState(COUNTDOWN_AMOUNT_TOTAL);
    const {setGameOver, setShowStatistics, setUpdateToken} = useContext(UserContext)

    const displaySeconds = seconds % 60;
    const displayMinutes = Math.floor(seconds / 60);

    useEffect(() => {
        if (seconds > 0) {
            timeout = setTimeout(() => {
                setSeconds((state) => state - 1);
            }, 1000);
        } else {
            clearTimeout(timeout);
            setGameOver(false)
            setShowStatistics(false)
            setUpdateToken(true)
        }
    }, [seconds]);

    return (
        <>
            <span>0{displayMinutes}:{displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}</span>
        </>
    )

}