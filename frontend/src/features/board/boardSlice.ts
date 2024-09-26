import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoardWithCards } from "../../interface/boardInterface";
import axiosInstance from "../../api/axios";
import { ApiEndpoints } from "../../enum/apiEndpoints";

interface IBoardInitialState {
  boardWithCards: IBoardWithCards | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: IBoardInitialState = {
  boardWithCards: null,
  isLoading: false,
  isError: false,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBoardWithCards.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        getBoardWithCards.fulfilled,
        (state, action: PayloadAction<IBoardWithCards>) => {
          state.isLoading = false;
          state.boardWithCards = action.payload;
          state.isError = false;
        }
      )
      .addCase(getBoardWithCards.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateBoardName.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        updateBoardName.fulfilled,
        (state, action: PayloadAction<IBoardWithCards>) => {
          state.isLoading = false;
          state.boardWithCards = action.payload;
          state.isError = false;
        }
      )
      .addCase(updateBoardName.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteBoard.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteBoard.fulfilled, (state) => {
        state.isLoading = false;
        state.boardWithCards = null;
        state.isError = false;
      })
      .addCase(deleteBoard.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const getBoardWithCards = createAsyncThunk(
  "board/getBoardById",
  async (boardId: string) => {
    const { data: board } = await axiosInstance.get<IBoardWithCards>(
      `${ApiEndpoints.GET_BOARD}/${boardId}`
    );
    return board;
  }
);

export const updateBoardName = createAsyncThunk(
  "board/updateBoardName",
  async ({ boardId, name }: { boardId: string; name: string }) => {
    const { data: board } = await axiosInstance.put<IBoardWithCards>(
      `${ApiEndpoints.GET_BOARD}/${boardId}`,
      { name }
    );
    return board;
  }
);

export const deleteBoard = createAsyncThunk(
  "board/delete",
  async (boardId: string) => {
    await axiosInstance.delete<IBoardWithCards>(
      `${ApiEndpoints.GET_BOARD}/${boardId}`
    );
  }
);

const boardReducer = boardSlice.reducer;
export default boardReducer;
