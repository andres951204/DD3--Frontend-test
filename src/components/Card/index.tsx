import { ReactChildrenInterface } from "../../types";

export default function Card({ children }: ReactChildrenInterface) {
  return (
    <>
      <div className="rounded-2xl border bg-white overflow-auto border-black p-10 w-full max-w-lg flex flex-col justify-center">{children}</div>
    </>
  );
}
