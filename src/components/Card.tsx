import { ReactChildrenInterface } from "../entities";

export default function Card({ children }: ReactChildrenInterface) {
  return (
    <>
      <div className="rounded-2xl border border-black p-10 max-w-lg flex flex-col justify-center">{children}</div>
    </>
  );
}
