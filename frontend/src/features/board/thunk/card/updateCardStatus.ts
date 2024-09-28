import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../api/axios";
import { ICard } from "../../../../interface/cardInterface";
import { ApiEndpoints } from "../../../../enum/apiEndpoints";

export default createAsyncThunk(
  "card/updateStatus",
  async ({
    boardId,
    cardId,
    status,
  }: {
    boardId: string;
    cardId: string;
    status: string;

  }) => {
    const { data: card } = await axiosInstance.put<ICard>(
      `${ApiEndpoints.GET_BOARD}/${boardId}${ApiEndpoints.GET_CARD}/${cardId}`,
      {
        status
      }
    );
    return card;
  }
);
