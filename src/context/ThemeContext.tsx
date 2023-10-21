import { createContext, useContext, useState } from "react";
import { ReactChildrenInterface, ThemeContextInterface } from "../entities";

const initialState = {
  theme: "light",
  updateTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextInterface>(initialState);

export const ThemeProvider = ({ children }: ReactChildrenInterface) => {
  const [theme, setTheme] = useState("light");

  return <ThemeContext.Provider value={{ theme, updateTheme: setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return [theme, updateTheme] as const;
};
