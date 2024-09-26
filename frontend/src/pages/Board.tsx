import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  deleteBoard,
  getBoardWithCards,
  updateBoardName,
} from "../features/board/boardSlice";
import { useEffect, useState } from "react";
import { Button, Popconfirm, Typography } from "antd";

const Board = () => {
  const { boardId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { boardWithCards, isLoading, isError } = useAppSelector(
    (state) => state.board
  );
  // const [boardName, setBoardName] = useState('');
  useEffect(() => {
    dispatch(getBoardWithCards(boardId as string));
    // boardName =
  }, []);
  const handleUpdateBoardName = (value: string) => {
    dispatch(updateBoardName({ boardId: boardId as string, name: value }));
  };

  const handleDeleteBoard = () => {
    dispatch(deleteBoard(boardId as string));
    navigate("/");
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error fetching board</div>;
  return (
    <>
      <Typography.Title
        level={1}
        editable={{ onChange: handleUpdateBoardName }}
      >
        {boardWithCards?.name}
      </Typography.Title>
      <Popconfirm
        title="Delete board"
        description="Are you sure to delete this board?"
        onConfirm={handleDeleteBoard}
        okText="Yes"
        cancelText="No"
      >
        <Button danger>Delete</Button>
      </Popconfirm>
    </>
  );
};
export default Board;
