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
      })
      .addCase(
        getBoardWithCards.fulfilled,
        (state, action: PayloadAction<IBoardWithCards>) => {
          state.isLoading = false;
          state.boardWithCards = action.payload;
        }
      )
      .addCase(getBoardWithCards.rejected, (state) => {
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

const boardReducer = boardSlice.reducer;
export default boardReducer;
