import {useContext} from 'react'
import { ThemeContext } from './ThemeContext';

export const useTheme = () => {
    const { theme, updateTheme } = useContext(ThemeContext);
    return [theme, updateTheme] as const;
  };
  