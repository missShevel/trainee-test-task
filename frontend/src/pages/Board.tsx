import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";
import { Alert, Col, Divider, Flex, Row, Spin, Typography } from "antd";
import DeleteButtonWithConfirm from "../components/common/DeleteButtonWithConfirm";
import {
  deleteBoard,
  getBoardWithCards,
  updateBoardName,
} from "../features/board/thunk";
import { NavigationPages } from "../enum/navigation";
import TaskCard from "../components/common/TaskCard/TaskCard";
import dayjs from "dayjs";
import TaskCardList from "../components/common/TaskCard/TaskList";
import BoardViewColumnName from "../components/BoardView/ColumnName";
import { ViewBoardColumnsEnum } from "../enum/view-board-columns";
import BoardViewColumn from "../components/BoardView/Column";
import BoardView from "../components/BoardView/BoardView";

const cardArray = [
  {
    id: "123",
    title: "sukasukasukasukasukasukasukasukasukasukasukasukasukasuka",
    description:
      "blyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyadblyad",
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    title: "suka",
    description: "blyad",
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    title: "suka",
    description: "blyad",
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    title: "suka",
    description: "blyad",
    status: "inProgress",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    title: "suka",
    description: "blyad",
    status: "done",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const Board = () => {
  const { boardId } = useParams() as { boardId: string };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { boardWithCards, isLoading, isError } = useAppSelector(
    (state) => state.board
  );
  useEffect(() => {
    dispatch(getBoardWithCards(boardId));
  }, []);
  const handleUpdateBoardName = (value: string) => {
    dispatch(updateBoardName({ boardId: boardId, name: value }));
  };

  const handleDeleteBoard = () => {
    dispatch(deleteBoard(boardId));
    navigate(NavigationPages.HOME);
  };

  if (isLoading) return <Spin fullscreen />;

  if (isError || !boardWithCards) return <Alert message="Error fetching board" type="error" />;
  return (
    <>
      <Typography.Title
        level={1}
        editable={{ onChange: handleUpdateBoardName }}
      >
        {boardWithCards.name}
      </Typography.Title>
      <DeleteButtonWithConfirm
        title="Delete board"
        description="Are you sure to delete this board?"
        onConfirm={handleDeleteBoard}
        okText="Yes"
        cancelText="No"
        buttonText="Delete"
      />
      <BoardView cardList={boardWithCards.cards} />
    </>
  );
};
export default Board;
