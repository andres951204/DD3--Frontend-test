import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <>
      <div className="p-7 flex justify-between items-center w-[638px] bg-gray-100 rounded-2xl">
        <img src="/instructions.png" alt="Mostrar instrucciones" className="w-7 cursor-pointer" />
        <div className="text-[#202537] font-semibold text-4xl tracking-widest">WORDLE</div>
        <div className="flex items-center">
          <img src="/statistics.png" alt="Mostrar estadisticas" className="w-7 mr-3 cursor-pointer" />
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
}
