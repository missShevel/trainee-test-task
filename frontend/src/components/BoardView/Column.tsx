import * as React from 'react';
import { Col, Divider } from 'antd';
import BoardViewColumnName, { BoardViewColumnNameProps } from './ColumnName';
import TaskCardList, { TaskCardListProps } from '../common/TaskCard/TaskList';
import { useDroppable } from '@dnd-kit/core';

export type BoardViewColumnProps = {} & BoardViewColumnNameProps &
  TaskCardListProps;

const BoardViewColumn = ({
  cardList,
  name,
  handleEditCard,
}: BoardViewColumnProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: name,
  });
  return (
    <Col
      style={{
        background: isOver ? 'lavender' : '#f2f2f2',
        minHeight: '500px',
        padding: '7px',
      }}
      span={6}
      ref={setNodeRef}
    >
      <BoardViewColumnName name={name} />
      <Divider />
      <TaskCardList handleEditCard={handleEditCard} cardList={cardList} />
    </Col>
  );
};

export default BoardViewColumn;
