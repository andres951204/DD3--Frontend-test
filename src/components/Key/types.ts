export interface KeyInterface {
  value: string | JSX.Element;
  keyValue: string;
  wide?: boolean;
  handleKeyClick: (keyValue: string) => void;
  inPosition?: boolean;
  inWord?: boolean;
  notInWord?: boolean;
}
