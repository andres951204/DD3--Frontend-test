import { Reducer, useReducer } from 'react'
import LettersBox from './LettersBox'

const emptyRow = Array(5)

const usedWordsReducer: Reducer<UsedWordsStateType, UsedWordsActionInterface> = (state, action) => {
    switch (action.type) {
        case 'begin':
            return {
                ...state
            }
        default:
            return state
    }
}

const initialState = [
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



export default function LettersGrid() {
    const [usedWords, wordsDispatch] = useReducer(usedWordsReducer, initialState)

    return <div className="mt-24">
        {usedWords.map((word, key) => (
            <div key={key} className='mt-3'>
                <LettersBox word={word} />
            </div>
        ))}
    </div>;
}
