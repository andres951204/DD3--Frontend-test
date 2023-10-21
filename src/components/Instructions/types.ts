import { Letter } from "../../types";
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

export interface DummyLettersBoxInterface {
    word: Array<Letter>;
  }

  export interface InstructionsInterface {
    showInstructions: boolean,
    setShowInstructions: Dispatch<SetStateAction<boolean>>
  }