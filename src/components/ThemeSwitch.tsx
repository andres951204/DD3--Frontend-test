import { useTheme } from "../context/ThemeHook";

export default function ThemeSwitch() {
  const [theme, updateTheme] = useTheme();

  const changeActiveTheme = () => {
    updateTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="w-16 h-8 relative">
        <img src="switch-body-light.png" alt="Contenedor tema" />
        <img src="switch-button-light.png" onClick={() => changeActiveTheme()} 
        className="absolute top-0.5 right-2 cursor-pointer" alt="Cambiar tema" />
      </div>
    </>
  );
}
