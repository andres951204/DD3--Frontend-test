import { KeyInterface } from "./types";

export default function Key({ value, keyValue, wide = false, handleKeyClick }: KeyInterface) {

  return (
    <>
      <div
        onClick={() => handleKeyClick(keyValue)}
        className={`h-12 ${wide ? "w-[71px] text-base" : "w-11 text-lg"} mr-2 bg-keyboard-clean flex justify-center items-center rounded-md  font-semibold 
      text-keyboard-character cursor-pointer hover:outline hover:outline-2`}
      >
        {value}
      </div>
    </>
  );
}
