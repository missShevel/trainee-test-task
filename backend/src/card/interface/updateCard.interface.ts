import { CardStatus } from '../enum/cardStatus.enum';

export interface IUpdateCard {
  title?: string;
  description?: string;
  status?: CardStatus;
}
