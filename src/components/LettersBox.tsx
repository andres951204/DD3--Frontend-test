export default function LettersBox({ word }: LettersBoxInterface) {
  return (
    <div className="flex justify-between w-[420px]">
      {word.map((letter, key) => (
        <div
          key={key}
          className={`w-[76px] h-[76px] ${letter.state ? `bg-letter-box-${letter.state}` : "bg-letter-box-empty"} cursor-pointer rounded-md flex justify-center 
            items-center font-extrabold text-4xl`}
        >
          {letter.character}
        </div>
      ))}
    </div>
  );
}
