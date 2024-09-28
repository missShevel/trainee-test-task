import { IBoardWithCards } from '../../interface/boardInterface';

export interface IBoardInitialState {
  boardWithCards: IBoardWithCards | null;
  isLoading: boolean;
  isError: boolean;
}

export const boardInitialState: IBoardInitialState = {
  boardWithCards: null,
  isLoading: false,
  isError: false,
};
