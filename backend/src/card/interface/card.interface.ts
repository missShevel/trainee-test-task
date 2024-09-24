import { CardStatus } from '../enum/cardStatus.enum';

export interface ICard {
  id: string;
  title: string;
  description: string;
  status: CardStatus;
  createdAt: Date;
  updatedAt: Date;
}
