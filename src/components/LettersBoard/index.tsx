import Letter from "./Letter/Letter";

export default function LettersBoard() {

  return (
    <div className="flex flex-col mt-9 w-[420px]">
      {new Array(5).fill("").map((_, row) => (
        <div className="flex justify-between mt-3" key={row}>
          {new Array(5).fill("").map((_, key) => (
            <Letter key={key} letterPosition={key} row={row} />
          ))}
        </div>
      ))}
    </div>
  );
}
