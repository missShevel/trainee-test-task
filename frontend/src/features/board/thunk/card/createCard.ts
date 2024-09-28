import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../api/axios";
import { ICard } from "../../../../interface/cardInterface";
import { ApiEndpoints } from "../../../../enum/apiEndpoints";

export default createAsyncThunk(
  "card/createCard",
  async ({
    boardId,
    title,
    description,
  }: {
    boardId: string;
    title: string;
    description: string;
  }) => {
    const { data: card } = await axiosInstance.post<ICard>(
      `${ApiEndpoints.GET_BOARD}/${boardId}${ApiEndpoints.CREATE_CARD}`,
      {
        title,
        description,
      }
    );
    return card;
  }
);
