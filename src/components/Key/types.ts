export interface KeyInterface {
  value: string | JSX.Element;
  keyValue: string;
  wide?: boolean;
  handleKeyClick: (keyValue: string) => void;
}
