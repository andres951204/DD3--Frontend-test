import { Dispatch, SetStateAction } from "react"

export interface UserContextInterface {
    games: number,
    setGames: Dispatch<SetStateAction<number>>
    nextWordTime: number,
    setNextWordTime: Dispatch<SetStateAction<number>>
    victories: number,
    setVictories: Dispatch<SetStateAction<number>>
    winner: boolean,
    setWinner: Dispatch<SetStateAction<boolean>>
    gameOver: boolean,
    setGameOver: Dispatch<SetStateAction<boolean>>,
    showStatistics: boolean,
    setShowStatistics: Dispatch<SetStateAction<boolean>>,
    showInstructions: boolean,
    setShowInstructions: Dispatch<SetStateAction<boolean>>,
    setUpdateToken: Dispatch<SetStateAction<{
        update: boolean,
        lastWord: string
    }>>,
    resetGame: () => void,
    lastWord: string,
    setLastWord: Dispatch<SetStateAction<string>>
}

export interface TokenInterface {
    games: number,
    nextWordTime: number,
    victories: number,
    winner: boolean,
    gameOver: boolean,
    lastWord: string,
}