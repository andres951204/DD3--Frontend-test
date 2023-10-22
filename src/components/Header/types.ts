import { Dispatch, SetStateAction } from "react";

export interface HeaderInterface {
  showInstructions: boolean;
  setShowInstructions: Dispatch<SetStateAction<boolean>>;
  showStatistics: boolean;
  setShowStatistics: Dispatch<SetStateAction<boolean>>;
}
