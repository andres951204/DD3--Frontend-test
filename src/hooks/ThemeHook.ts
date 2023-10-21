import {useContext} from 'react'
import { ThemeContext } from '../context/Theme/ThemeContext';

export const useTheme = () => {
    const { theme, updateTheme } = useContext(ThemeContext);
    return {theme, updateTheme};
  };
  