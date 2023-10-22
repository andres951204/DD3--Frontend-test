export interface ReactChildrenInterface {
  children: JSX.Element | Array<JSX.Element>;
  classes?: string;
}

export type Letter = {
  character: string;
  state?: "in-position" | "in-word" | "not-in-word" | "empty";
};
