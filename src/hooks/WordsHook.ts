import { useContext } from 'react'
import { WordsContext } from '../context/WordsContext';

export const useWords = () => {
    const { words, updateWords } = useContext(WordsContext);
    return {words, updateWords};
};
