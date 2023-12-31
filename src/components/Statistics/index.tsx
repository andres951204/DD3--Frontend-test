import { useContext } from "react";
import Card from "../Card";
import { UserContext } from "../../context/User/UserContext";
import Timer from "../Timer";
import { ThemeContext } from "../../context/Theme/ThemeContext";

export default function Statistics() {
  const { games, victories, gameOver, winner, showStatistics, setShowStatistics, lastWord } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${showStatistics ? "block" : "hidden"}`}>
        <div className={`absolute -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 z-20 ${theme === "light" ? "text-black" : "text-white"}`}>
          <Card>
            <div className="grid grid-rows-3 grid-cols-3 items-center gap-4 auto-rows-auto">
              <h2 className="font-extrabold text-4xl col-start-1 col-end-4 text-center">Estadísticas</h2>
              <div className="flex flex-col items-center col-start-1 ">
                <div className="text-4xl font-extrabold">{games}</div>
                <div className="text-xl mt-4">Jugadas</div>
              </div>
              <div className="flex flex-col items-center col-start-3">
                <div className="text-4xl font-extrabold">{victories}</div>
                <div className="text-xl mt-4">Victorias</div>
              </div>
              {gameOver && !winner && (
                <div className="col-span-3 text-center text-xl">
                  La palabra era: <span className="font-bold uppercase">{lastWord}</span>
                </div>
              )}
              {gameOver && (
                <div className="flex flex-col items-center col-span-3">
                  <div className="text-xl">SIGUIENTE PALABRA</div>
                  <div className="text-2xl mt-4 font-extrabold">{<Timer />}</div>
                </div>
              )}
              <div className="flex justify-center items-center col-span-3">
                <button
                  type="button"
                  onClick={() => setShowStatistics(!showStatistics)}
                  className="bg-letter-box-in-position max-w-xs w-64 h-12 
        text-white rounded-md font-extrabold text-3xl self-center mt-9 ease-in duration-75 hover:scale-105 "
                >
                  Aceptar
                </button>
              </div>
            </div>
          </Card>
        </div>
        <div className={`absolute top-0 left-0 opacity-80 ${theme === 'light' ? 'bg-white' : 'bg-dark-palette-main'} h-screen w-screen z-10`}></div>
      </div>
    </>
  );
}
