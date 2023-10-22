import { createContext, useState } from "react";
import { ThemeContextInterface } from "./types";
import { ReactChildrenInterface } from "../../types";

const initialState: ThemeContextInterface = {
  theme: "light",
  updateTheme: () => { },
};

export const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }: ReactChildrenInterface) => {
  const [theme, setTheme] = useState("light");

  return <ThemeContext.Provider value={{ theme, updateTheme: setTheme }}>{children}</ThemeContext.Provider>;
};
