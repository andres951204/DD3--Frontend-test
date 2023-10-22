import { Dispatch, SetStateAction } from "react"

export interface UserContextInterface {
    games: number,
    setGames: Dispatch<SetStateAction<number>>
    nextWordTimer: Date,
    setNextWordTimer: Dispatch<SetStateAction<Date>>
    victories: number,
    setVictories: Dispatch<SetStateAction<number>>
    winner: boolean,
    setWinner: Dispatch<SetStateAction<boolean>>
    gameOver: boolean,
    setGameOver: Dispatch<SetStateAction<boolean>>,
    showStatistics: boolean,
    setShowStatistics: Dispatch<SetStateAction<boolean>>,
    setUpdateToken: Dispatch<SetStateAction<boolean>>
}

export interface TokenInterface {
    games: number,
    nextWordTimer: Date,
    victories: number,
    winner: boolean,
    gameOver: boolean,
}