import { useContext } from "react";
import { KeyInterface } from "./types";
import { ThemeContext } from "../../context/Theme/ThemeContext";

export default function Key({ value, keyValue, wide = false, handleKeyClick, inPosition, inWord, notInWord }: KeyInterface) {
  const { theme } = useContext(ThemeContext);

  const bgColor = inPosition
    ? "bg-keyboard-in-position text-white"
    : inWord
    ? "bg-keyboard-in-word text-white"
    : notInWord
    ? "bg-keyboard-not-in-word text-white"
    : theme === "light"
    ? "bg-keyboard-clean text-keyboard-character"
    : "bg-keyboard-dark-clean text-white";

  return (
    <>
      <div
        onClick={() => handleKeyClick(keyValue)}
        className={`mr-1 text-base sm:text-base h-8 ${bgColor} uppercase transition-all duration-75 ${
          wide ? "sm:w-[71px] w-16" : "sm:w-11 w-7"
        } sm:h-12 sm:mr-2  flex justify-center items-center rounded-md  font-semibold 
       cursor-pointer hover:outline hover:outline-2`}
      >
        {value}
      </div>
    </>
  );
}
