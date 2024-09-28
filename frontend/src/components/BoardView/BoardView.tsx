import * as React from 'react';
import { Row } from 'antd';
import BoardViewColumn, { BoardViewColumnProps } from './Column';
import {
  viewBoardColumnIdsMapper,
  ViewBoardColumnsEnum,
} from '../../enum/view-board-columns';
import { ICard } from '../../interface/cardInterface';
import { CardStatus } from '../../enum/cardStatus';
import {
  DndContext,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useAppDispatch } from '../../app/hooks';
import updateCardStatus from '../../features/board/thunk/card/updateCardStatus';

type BoardViewProps = {
  boardId: string;
  cardList: ICard[];
  handleEditCard: BoardViewColumnProps['handleEditCard'];
};

const BoardView = ({ boardId, cardList, handleEditCard }: BoardViewProps) => {
  const todo = cardList.filter((card) => card.status === CardStatus.TODO);
  const inProgress = cardList.filter(
    (card) => card.status === CardStatus.IN_PROGRESS
  );
  const done = cardList.filter((card) => card.status === CardStatus.DONE);

  const dispatch = useAppDispatch();

  const handleDragEnd = ({
    active,
    over,
  }: {
    active: { id: UniqueIdentifier };
    over: { id: UniqueIdentifier } | null;
  }) => {
    if (!over) return;
    const draggedTodoId = active.id as string;
    const droppedColumnTitle = over.id as ViewBoardColumnsEnum;

    dispatch(
      updateCardStatus({
        boardId,
        cardId: draggedTodoId,
        status: viewBoardColumnIdsMapper[droppedColumnTitle],
      })
    );
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Row justify="space-around">
        <BoardViewColumn
          handleEditCard={handleEditCard}
          cardList={todo}
          name={ViewBoardColumnsEnum.TODO}
        />
        <BoardViewColumn
          handleEditCard={handleEditCard}
          cardList={inProgress}
          name={ViewBoardColumnsEnum.IN_PROGRESS}
        />
        <BoardViewColumn
          handleEditCard={handleEditCard}
          cardList={done}
          name={ViewBoardColumnsEnum.DONE}
        />
      </Row>
    </DndContext>
  );
};

export default BoardView;

// (e) => e.preventDefault()
