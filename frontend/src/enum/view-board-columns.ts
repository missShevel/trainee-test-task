import { CardStatus } from './cardStatus';

export enum ViewBoardColumnsEnum {
  TODO = 'To do',
  IN_PROGRESS = 'In Progress',
  DONE = 'Done',
}

export const viewBoardColumnIdsMapper: Record<
  ViewBoardColumnsEnum,
  CardStatus
> = {
  [ViewBoardColumnsEnum.TODO]: CardStatus.TODO,
  [ViewBoardColumnsEnum.IN_PROGRESS]: CardStatus.IN_PROGRESS,
  [ViewBoardColumnsEnum.DONE]: CardStatus.DONE,
};
