import { SetStateAction, Dispatch } from "react";

export interface ThemeContextInterface {
  theme: string;
  updateTheme: Dispatch<SetStateAction<string>>;
}
