import { useContext } from "react";

import { ReactChildrenInterface } from "../../types";
import { ThemeContext } from "../../context/Theme/ThemeContext";

export default function Card({ children, classes }: ReactChildrenInterface) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`${classes} rounded-2xl border min-w-[90vw] sm:min-w-[546px] ${theme === 'light'? 'bg-white border-black' : 'bg-dark-palette-main border-[#939B9F]'} overflow-auto  p-10 w-full max-w-xl flex flex-col justify-center`}>{children}</div>
    </>
  );
}
