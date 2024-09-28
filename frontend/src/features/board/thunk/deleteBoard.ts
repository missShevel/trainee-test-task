import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axios";
import { IBoardWithCards } from "../../../interface/boardInterface";
import { ApiEndpoints } from "../../../enum/apiEndpoints";

export default createAsyncThunk("board/delete", async (boardId: string) => {
  await axiosInstance.delete<IBoardWithCards>(
    `${ApiEndpoints.GET_BOARD}/${boardId}`
  );
});
