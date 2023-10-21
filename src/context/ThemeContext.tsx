import { createContext, useState } from "react";

const initialState = {
  theme: "light",
  updateTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextInterface>(initialState);

export const ThemeProvider = ({ children }: ReactChildrenInterface) => {
  const [theme, setTheme] = useState("light");

  return <ThemeContext.Provider value={{ theme, updateTheme: setTheme }}>{children}</ThemeContext.Provider>;
};
