export interface ReactChildrenInterface {
  children: JSX.Element | Array<JSX.Element>;
}

export type Letter = {
  character: string;
  state?: "in-position" | "in-word" | "not-in-word" | "empty";
};
