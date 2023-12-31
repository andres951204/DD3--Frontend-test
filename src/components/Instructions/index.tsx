import { useContext } from "react";
import { Letter } from "../../types";
import Card from "../Card";
import { DummyLettersBoxInterface } from "./types";
import { ThemeContext } from "../../context/Theme/ThemeContext";
import { UserContext } from "../../context/User/UserContext";

const firstWord: Array<Letter> = [
  {
    character: "G",
    state: "in-position",
  },
  {
    character: "A",
  },
  {
    character: "T",
  },
  {
    character: "O",
  },
  {
    character: "S",
  },
];
const secondWord: Array<Letter> = [
  {
    character: "V",
  },
  {
    character: "O",
  },
  {
    character: "C",
    state: "in-word",
  },
  {
    character: "A",
  },
  {
    character: "L",
  },
];
const thirdWord: Array<Letter> = [
  {
    character: "C",
  },
  {
    character: "A",
  },
  {
    character: "N",
  },
  {
    character: "T",
  },
  {
    character: "O",
    state: "not-in-word",
  },
];

export default function Instructions() {
  const { showInstructions, setShowInstructions } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const DummyLetterBox = ({ word }: DummyLettersBoxInterface) => {
    return (
      <div className="flex justify-between w-[310px]">
        {word.map((letter: Letter, key: number) => (
          <div
            key={key}
            className={`w-[50px] h-[50px] 
            ${letter.state ? `bg-letter-box-${letter.state}` : theme === "light" ? "border border-black" : "border border-white"}
            cursor-pointer rounded-md flex justify-center 
            items-center font-extrabold text-2xl`}
          >
            {letter.character}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`${showInstructions ? "block" : "hidden"}`}>
      <div className={`absolute -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 z-20 ${theme === "light" ? "text-black" : "text-white"}`}>
        <Card>
          <h1 className="text-3xl font-extrabold text-center">Cómo jugar</h1>
          <div className="mt-2 text-base">
            <p>Adivina la palabra oculta en cinco intentos.</p>
            <p className="mt-2">Cada intento debe ser una palabra válida de 5 letras.</p>
            <p className="mt-2">Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>
          </div>
          <p className="mt-2 font-bold">Ejemplos</p>
          <div className="mt-2 flex justify-center">
            <DummyLetterBox word={firstWord} />
          </div>
          <p className="mt-2">
            La letra <span className="font-bold">G</span> está en la palabra y en la posición correcta.
          </p>
          <div className="mt-2 flex justify-center">
            <DummyLetterBox word={secondWord} />
          </div>
          <p className="mt-2">
            La letra <span className="font-bold">C</span> está en la palabra pero en la posición incorrecta.
          </p>
          <div className="mt-2 flex justify-center">
            <DummyLetterBox word={thirdWord} />
          </div>
          <p className="mt-2">
            La letra <span className="font-bold">O</span> no está en la palabra
          </p>
          <p className="mt-2">Puede haber letras repetidas. Las pistas son independientes para cada letra</p>
          <p className="mt-6 text-center">¡Una palabra nueva cada 5 minutos!</p>
          <button
            type="button"
            onClick={() => setShowInstructions(!showInstructions)}
            className="bg-letter-box-in-position max-w-xs w-64 h-12 
        text-white rounded-md font-extrabold text-3xl self-center mt-9 ease-in duration-75 hover:scale-105 "
          >
            !JUGAR¡
          </button>
        </Card>
      </div>
      <div className={`absolute top-0 left-0 opacity-80 ${theme === "light" ? "bg-white" : "bg-dark-palette-main"} h-screen w-screen z-10`}></div>
    </div>
  );
}
