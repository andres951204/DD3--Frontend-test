import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
    const { theme, updateTheme } = useContext(ThemeContext);
    return {theme, updateTheme};
  };
  