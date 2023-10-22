
import { Dispatch } from 'react';
import { SetStateAction } from 'react';
export interface StatisticsInterface {
    showStatistics: boolean,
    setShowStatistics: Dispatch<SetStateAction<boolean>>
}