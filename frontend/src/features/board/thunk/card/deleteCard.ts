import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../api/axios";
import { ICard } from "../../../../interface/cardInterface";
import { ApiEndpoints } from "../../../../enum/apiEndpoints";

export default createAsyncThunk(
  "card/delete",
  async ({ boardId, cardId }: { boardId: string; cardId: string }) => {
    const { data } = await axiosInstance.delete<ICard>(
      `${ApiEndpoints.GET_BOARD}/${boardId}${ApiEndpoints.GET_CARD}/${cardId}`
    );
    return data;
  }
);
