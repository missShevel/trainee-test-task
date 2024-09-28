import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../api/axios";
import { ICard } from "../../../../interface/cardInterface";
import { ApiEndpoints } from "../../../../enum/apiEndpoints";

export default createAsyncThunk(
  "card/editCard",
  async ({
    boardId,
    cardId,
    title,
    description,
  }: {
    boardId: string;
    cardId: string;
    title: string;
    description: string;
  }) => {
    const { data: card } = await axiosInstance.put<ICard>(
      `${ApiEndpoints.GET_BOARD}/${boardId}${ApiEndpoints.GET_CARD}/${cardId}`,
      {
        title,
        description,
      }
    );
    return card;
  }
);
