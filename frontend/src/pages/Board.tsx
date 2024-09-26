import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getBoardWithCards } from "../features/board/boardSlice";
import { useEffect } from "react";

const Board = () => {
  const { boardId } = useParams();
  const dispatch = useAppDispatch();
  const { boardWithCards, isLoading, isError } = useAppSelector(
    (state) => state.board
  );
  useEffect(() => {
    dispatch(getBoardWithCards(boardId as string));
  }, []);

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error fetching board</div>
  return <div>Board {boardWithCards?.name}</div>;
};
export default Board;
