import Letter from "../Letter/Letter";

export default function LettersBoard() {

  return (
    <div className="grid grid-rows-5 grid-cols-5 mt-9 w-full max-w-[320px] min-h-[320px] sm:max-w-[420px] sm:min-h-[400px] gap-2">
      {new Array(5).fill("").map((_, row) => (
        <div className="col-span-5 flex items-center gap-2 justify-evenly" key={row}>
          {new Array(5).fill("").map((_, key) => (
            <Letter key={key} letterPosition={key} row={row} />
          ))}
        </div>
      ))}
    </div>
  );
}
