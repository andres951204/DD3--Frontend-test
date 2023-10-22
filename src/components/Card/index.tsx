import { ReactChildrenInterface } from "../../types";

export default function Card({ children, classes }: ReactChildrenInterface) {
  return (
    <>
      <div className={`${classes} rounded-2xl border min-w-[90vw] sm:min-w-[546px] bg-white overflow-auto border-black p-10 w-full max-w-xl flex flex-col justify-center`}>{children}</div>
    </>
  );
}
