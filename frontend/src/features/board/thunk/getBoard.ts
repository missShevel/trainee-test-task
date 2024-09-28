import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axios";
import { IBoardWithCards } from "../../../interface/boardInterface";
import { ApiEndpoints } from "../../../enum/apiEndpoints";

export default createAsyncThunk(
  "board/getBoardById",
  async (boardId: string) => {
    const { data: board } = await axiosInstance.get<IBoardWithCards>(
      `${ApiEndpoints.GET_BOARD}/${boardId}`
    );
    return board;
  }
);
