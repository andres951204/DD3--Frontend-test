import { useContext } from "react";
import { ThemeContext } from "../../context/Theme/ThemeContext";
import { ReactChildrenInterface } from "../../types";

export default function Container({children}: ReactChildrenInterface) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`flex flex-col justify-center sm:min-h-[900px] items-center h-screen  select-none ${theme === "light" ? "bg-white" : "bg-dark-palette-main"}`}>
        {children}
      </div>
    </>
  );
}
