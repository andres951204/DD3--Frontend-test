import Key from "../Key";

const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"];
const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

export default function Keyboard() {
  return (
    <div className="flex justify-center mt-14 bg-gray-100 pl-5 pt-8 pb-9 rounded-2xl w-full max-w-[638px]">
      <div>
        <div className="flex w-full max-w-xl pl-8">
          {firstRow.map((letter, key) => (
            <div key={key}>
              <Key value={letter} keyValue={letter} />
            </div>
          ))}
        </div>
        <div className="flex w-full max-w-xl mt-2 pl-12">
          {secondRow.map((letter, key) => (
            <div key={key}>
              <Key value={letter} keyValue={letter} />
            </div>
          ))}
        </div>
        <div className="flex w-full max-w-xl mt-2">
          <Key value={"ENTER"} wide keyValue={"Enter"} />
          {thirdRow.map((letter, key) => (
            <div key={key}>
              <Key value={letter} keyValue={letter} />
            </div>
          ))}
          <Key value={<img src="/delete-icon.png" />} keyValue={"Delete"} wide />
        </div>
      </div>
    </div>
  );
}
