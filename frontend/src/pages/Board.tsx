import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";
import { Alert, Button, Col, Divider, Flex, Row, Spin, Typography } from "antd";
import DeleteButtonWithConfirm from "../components/common/DeleteButtonWithConfirm";
import {
  deleteBoard,
  getBoardWithCards,
  updateBoardName,
} from "../features/board/thunk";
import { NavigationPages } from "../enum/navigation";
import BoardView from "../components/BoardView/BoardView";
import CreateCardModal from "../components/modals/CreateCardModal";

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
  const [open, setOpen] = useState(false);
  const showModal = () => {
    console.log(open);
    setOpen(true);
  };

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

  if (isError || !boardWithCards)
    return <Alert message="Error fetching board" type="error" />;
  return (
    <>
      <Typography.Title
        level={1}
        editable={{ onChange: handleUpdateBoardName }}
      >
        {boardWithCards.name}
      </Typography.Title>
      <Flex justify="space-between" style={{ margin: "10px" }}>
        <Button type="primary" onClick={showModal}>Create task</Button>
        <DeleteButtonWithConfirm
          title="Delete board"
          description="Are you sure to delete this board?"
          onConfirm={handleDeleteBoard}
          okText="Yes"
          cancelText="No"
          buttonText="Delete Board"
        />
      </Flex>
      <BoardView cardList={boardWithCards.cards} />
      <CreateCardModal open={open} setOpen={setOpen} />

    </>
  );
};
export default Board;
