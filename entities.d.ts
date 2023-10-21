interface ReactChildrenInterface {
  children: JSX.Element | Array<JSX.Element>;
}

type Letter = {
  character: string;
  state?: "in-position" | "in-word" | "not-in-word" | "empty";
};

type UsedWordsStateType = Array<Array<Letter>>

interface LettersBoxInterface {
  word: Array<Letter>
}

interface ThemeContextInterface {
  theme: string,
  updateTheme: Dispatch<SetStateAction<string>>;
}

interface UsedWordsActionInterface {
  payload: UsedWordsInterface,
  type: 'begin' | 'add'
}