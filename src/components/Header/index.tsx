import { useContext } from "react";
import ThemeSwitch from "../ThemeSwitch";
import { HeaderInterface } from "./types";
import { UserContext } from "../../context/User/UserContext";
import { ThemeContext } from "../../context/Theme/ThemeContext";

export default function Header({ setShowInstructions }: HeaderInterface) {
  const { setShowStatistics } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const statisticsIcon = "statistics.png";
  const statisticsIconDark = "statistics-dark.png";

  return (
    <>
      <div className={`${theme === "light" ? "bg-gray-100" : "bg-dark-palette-components"} p-7 flex justify-between items-center w-full max-w-2xl rounded-2xl`}>
        <div className="w-1/4">
          <img
            src="instructions.png"
            onClick={() => setShowInstructions(true)}
            alt="Mostrar instrucciones"
            height={28}
            width={28}
            className={`w-7 cursor-pointer ${theme !== "light" ? "brightness-200" : ""}`}
            title="Instrucciones"
          />
        </div>
        <div className="w-1/2 justify-center">
          <h1 className={` ${theme === "light" ? "text-[#202537]" : "text-[#DADCE0]"} font-semibold text-center text-4xl tracking-widest`}>WORDLE</h1>
        </div>
        <div className="flex items-center justify-end w-1/4">
          <img
            src={theme === "light" ? statisticsIcon : statisticsIconDark}
            alt="Mostrar estadisticas"
            height={28}
            width={28}
            onClick={() => setShowStatistics(true)}
            className={`w-7 mr-3 cursor-pointer ${theme !== "light" ? "brightness-150" : ""}`}
            title="Mostrar estadisticas"
          />
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
}
