import { Reducer, createContext, useReducer } from "react";
import { WordsActionsInterface, WordsContextInterface, WordsStateType } from "./types";
import { ReactChildrenInterface } from "../../types";

const initialState = {
    words: [],
    updateWords: () => ({}),
}

const initialWords = [
    [
        { character: '' }, { character: '' }, { character: '' }, { character: '' }, { character: '' }
    ],
    [
        { character: '' }, { character: '' }, { character: '' }, { character: '' }, { character: '' }
    ],
    [
        { character: '' }, { character: '' }, { character: '' }, { character: '' }, { character: '' }
    ],
    [
        { character: '' }, { character: '' }, { character: '' }, { character: '' }, { character: '' }
    ],
    [
        { character: '' }, { character: '' }, { character: '' }, { character: '' }, { character: '' }
    ],
]

const usedWordsReducer: Reducer<WordsStateType, WordsActionsInterface> = (state, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state
            }
        default:
            return state
    }
}

export const WordsContext = createContext<WordsContextInterface>(initialState);

export const WordsProvider = ({ children }: ReactChildrenInterface) => {
    const [words, wordsDispatch] = useReducer(usedWordsReducer, initialWords)

    return <WordsContext.Provider value={{ words: words, updateWords: wordsDispatch }}>{children}</WordsContext.Provider>;
};
