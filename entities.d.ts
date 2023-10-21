interface ReactChildrenInterface {
  children: JSX.Element | Array<JSX.Element>;
}

type Letter = {
  character: string;
  state?: "in-position" | "in-word" | "not-in-word" | "empty";
};

type WordsStateType = Array<Array<Letter>>

interface LettersBoxInterface {
  word: Array<Letter>
}

interface ThemeContextInterface {
  theme: string,
  updateTheme: Dispatch<SetStateAction<string>>;
}

interface WordsContextInterface {
  words: WordsStateType,
  updateWords: Dispatch<SetStateAction<Letter>>;
}

interface WordsActionsInterface {
  payload: LettersBoxInterface,
  type: 'begin' | 'add'
}

interface KeyboardKeyInterface {
  character: string | JSX.Element,
  wide?: boolean,
  onClick?: ReactNode
}