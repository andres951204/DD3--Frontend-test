import { LettersBoxInterface } from "../entities";

export default function LettersBox({ word }: LettersBoxInterface) {
  return (
    <div className="flex justify-between w-[420px]">
      {word.map((letter, key) => (
        <div
          key={key}
          className={`w-[76px] h-[76px] ${letter.state ? `text-letter-box-${letter.state}` : ""} cursor-pointer rounded-md flex justify-center 
            items-center font-extrabold text-4xl`}
        >
          {letter.character}
        </div>
      ))}
    </div>
  );
}
