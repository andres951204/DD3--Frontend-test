import { useContext } from "react";
import { BoardContext } from "../context/Board/BoardContext";

export const useBoard = () => {
  const { board, setBoard } = useContext(BoardContext);
  return { board, setBoard };
};
