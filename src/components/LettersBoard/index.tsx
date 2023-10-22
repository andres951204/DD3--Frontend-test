import Letter from "../Letter/Letter";

export default function LettersBoard() {
  // const handleBackgroundColor = (key: number) => {
  //   let bgColor = "bg-letter-box-not-in-word";
  //   if (validate) {
  //     if (userGuess[key] === word[key]) {
  //       bgColor = "bg-letter-box-in-position";
  //     } else if (word.includes(userGuess[key])) {
  //       bgColor = "bg-letter-box-in-word";
  //     }
  //   }
  //   return bgColor;
  // };

  return (
    <div className="flex flex-col mt-9 w-[420px]">
      <div className="flex justify-between mt-3">
        {new Array(5).fill("").map((_, key) => (
          <Letter key={key} letterPosition={key} row={0} />
        ))}
      </div>
      <div className="flex justify-between mt-3">
        {new Array(5).fill("").map((_, key) => (
          <Letter key={key} letterPosition={key} row={1} />
        ))}
      </div>
      <div className="flex justify-between mt-3">
        {new Array(5).fill("").map((_, key) => (
          <Letter key={key} letterPosition={key} row={2} />
        ))}
      </div>
      <div className="flex justify-between mt-3">
        {new Array(5).fill("").map((_, key) => (
          <Letter key={key} letterPosition={key} row={3} />
        ))}
      </div>
      <div className="flex justify-between mt-3">
        {new Array(5).fill("").map((_, key) => (
          <Letter key={key} letterPosition={key} row={4} />
        ))}
      </div>
    </div>
  );
}
