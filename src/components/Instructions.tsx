import { Letter, LettersBoxInterface } from "../entities";
import Card from "./Card";

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
  const DummyLetterBox = ({ word }: LettersBoxInterface) => {
    return (
      <div className="flex justify-between w-[420px]">
        {word.map((letter, key) => (
          <div
            key={key}
            className={`w-[76px] h-[76px] 
            ${letter.state ? `bg-letter-box-${letter.state}` : "border border-black"}
            cursor-pointer rounded-md flex justify-center 
            items-center font-extrabold text-4xl`}
          >
            {letter.character}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Card>
        <h1 className="text-4xl font-extrabold text-center">Cómo jugar</h1>
        <div className="mt-8 text-lg">
          <p>Adivina la palabra oculta en cinco intentos.</p>
          <p className="mt-7">Cada intento debe ser una palabra válida de 5 letras.</p>
          <p className="mt-7">Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>
        </div>
        <p className="mt-4">Ejemplos</p>
        <div className="mt-4 flex justify-center">
          <DummyLetterBox word={firstWord} />
        </div>
        <p className="mt-4">
          La letra <span className="font-bold">G</span> está en la palabra y en la posición correcta.
        </p>
        <div className="mt-4 flex justify-center">
          <DummyLetterBox word={secondWord} />
        </div>
        <p className="mt-4">
          La letra <span className="font-bold">C</span> está en la palabra pero en la posición incorrecta.
        </p>
        <div className="mt-4 flex justify-center">
          <DummyLetterBox word={thirdWord} />
        </div>
        <p className="mt-4">
          La letra <span className="font-bold">O</span> no está en la palabra
        </p>
        <p className="mt-9">Puede haber letras repetidas. Las pistas son independientes para cada letra</p>
        <p className="mt-9 text-center">¡Una palabra nueva cada 5 minutos!</p>
        <button
          className="bg-letter-box-in-position max-w-xs w-64 h-12 
        text-white rounded-md font-extrabold text-3xl self-center mt-9 ease-in duration-75 hover:scale-105 "
        >
          !JUGAR¡
        </button>
      </Card>
    </>
  );
}
