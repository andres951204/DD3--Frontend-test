
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

export interface KeyboardInterface {
    setWinner: Dispatch<SetStateAction<boolean>>;
}