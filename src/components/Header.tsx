import ThemeSwitch from "./ThemeSwitch";
import Instructions from "./Instructions";
import { useState } from 'react'

export default function Header() {

  const [showInstructions, setShowInstructions] = useState(false)

  return (
    <>
      <div className="p-7 flex justify-between items-center w-[638px] bg-gray-100 rounded-2xl">
        <img src="/instructions.png" onClick={() => setShowInstructions(!showInstructions)} alt="Mostrar instrucciones" className="w-7 cursor-pointer" title="Instrucciones" />
        <div className="text-[#202537] font-semibold text-4xl tracking-widest">WORDLE</div>
        <div className="flex items-center">
          <img src="/statistics.png" alt="Mostrar estadisticas" className="w-7 mr-3 cursor-pointer" />
          <ThemeSwitch />
        </div>
      </div>
      <Instructions show={showInstructions} />
    </>
  );
}
