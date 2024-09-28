import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoardWithCards } from "../../interface/boardInterface";
import { deleteBoard, getBoardWithCards, updateBoardName } from "./thunk";
import { boardInitialState, IBoardInitialState } from "./state";

const handlePending = (state: IBoardInitialState) => {
  state.isLoading = true;
  state.isError = false;
};

const handleRejected = (state: IBoardInitialState) => {
  state.isLoading = false;
  state.isError = true;
};

export const boardSlice = createSlice({
  name: "board",
  initialState: boardInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBoardWithCards.pending, handlePending)
      .addCase(
        getBoardWithCards.fulfilled,
        (state, action: PayloadAction<IBoardWithCards>) => {
          state.isLoading = false;
          state.boardWithCards = action.payload;
          state.isError = false;
        }
      )
      .addCase(getBoardWithCards.rejected, handleRejected);

    builder
      .addCase(updateBoardName.pending, handlePending)
      .addCase(
        updateBoardName.fulfilled,
        (state, action: PayloadAction<IBoardWithCards>) => {
          state.isLoading = false;
          state.boardWithCards = action.payload;
          state.isError = false;
        }
      )
      .addCase(updateBoardName.rejected, handleRejected);

    builder
      .addCase(deleteBoard.pending, handlePending)
      .addCase(deleteBoard.fulfilled, (state) => {
        state.isLoading = false;
        state.boardWithCards = null;
        state.isError = false;
      })
      .addCase(deleteBoard.rejected, handleRejected);
  },
});

const boardReducer = boardSlice.reducer;
export default boardReducer;
