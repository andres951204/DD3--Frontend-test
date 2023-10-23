import { useContext } from "react";
import { ThemeContext } from "../../context/Theme/ThemeContext";

export default function ThemeSwitch() {
  const { theme, updateTheme } = useContext(ThemeContext);

  const lightImage = "switch-body-light.png";
  const darkImage = "switch-body-dark.png";

  const lightButton = "switch-button-light.png";
  const darkButton = "switch-button-dark.png";

  const changeActiveTheme = () => {
    updateTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="w-16 h-8 relative">
        <img src={theme === "light" ? lightImage : darkImage} alt="Contenedor tema" width={60} height={30} />
        <img
          src={theme === "light" ? lightButton : darkButton}
          onClick={() => changeActiveTheme()}
          width={22}
          height={22}
          className={`absolute top-[3px] ${theme === "light" ? "right-2" : "right-2 -translate-x-7"} transition-all duration-500  cursor-pointer`}
          alt="Cambiar tema"
          title="Cambiar tema"
        />
      </div>
    </>
  );
}
