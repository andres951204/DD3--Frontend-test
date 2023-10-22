import { KeyInterface } from "./types";

export default function Key({ value, keyValue, wide = false, handleKeyClick, inPosition, inWord, notInWord }: KeyInterface) {

  
  const bgColor = inPosition
    ? "bg-keyboard-in-position text-white"
    : inWord
    ? "bg-keyboard-in-word text-white"
    : notInWord
    ? "bg-keyboard-not-in-word text-white"
    : "bg-keyboard-clean text-keyboard-character";

  return (
    <>
      <div
        onClick={() => handleKeyClick(keyValue)}
        className={`h-12 ${bgColor} uppercase transition-all duration-75 ${wide ? "w-[71px] text-base" : "w-11 text-lg"} mr-2 flex justify-center items-center rounded-md  font-semibold 
       cursor-pointer hover:outline hover:outline-2`}
      >
        {value}
      </div>
    </>
  );
}
