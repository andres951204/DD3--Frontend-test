import { useContext } from "react";
import ThemeSwitch from "../ThemeSwitch";
import { HeaderInterface } from "./types";
import { UserContext } from "../../context/User/UserContext";

export default function Header({ setShowInstructions }: HeaderInterface) {
  const { setShowStatistics } = useContext(UserContext);

  return (
    <>
      <div className="p-7 flex justify-between items-center w-full max-w-2xl bg-gray-100 rounded-2xl">
        <img src="/instructions.png" onClick={() => setShowInstructions(true)} alt="Mostrar instrucciones" className="w-7 cursor-pointer" title="Instrucciones" />
        <h1 className="text-[#202537] font-semibold text-4xl tracking-widest">WORDLE</h1>
        <div className="flex items-center">
          <img src="/statistics.png" alt="Mostrar estadisticas" onClick={() => setShowStatistics(true)} className="w-7 mr-3 cursor-pointer" title="Mostrar estadisticas" />
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
}
