import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBoardWithCards } from '../../interface/boardInterface';
import { deleteBoard, getBoardWithCards, updateBoardName } from './thunk';
import { boardInitialState, IBoardInitialState } from './state';
import deleteCard from './thunk/card/deleteCard';
import { ICard } from '../../interface/cardInterface';
import createCard from './thunk/card/createCard';
import editCard from './thunk/card/editCard';
import updateCardStatus from './thunk/card/updateCardStatus';

const handlePending = (state: IBoardInitialState) => {
  state.isLoading = true;
  state.isError = false;
};

const handleRejected = (state: IBoardInitialState) => {
  state.isLoading = false;
  state.isError = true;
};

export const boardSlice = createSlice({
  name: 'board',
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

    builder
      .addCase(deleteCard.pending, handlePending)
      .addCase(deleteCard.fulfilled, (state, action: PayloadAction<ICard>) => {
        state.isLoading = false;
        const { id: deletedCardId } = action.payload;
        state.boardWithCards!.cards = state.boardWithCards!.cards.filter(
          (c) => c.id !== deletedCardId
        );
        state.isError = false;
      })
      .addCase(deleteCard.rejected, handleRejected);

    builder
      .addCase(createCard.pending, handlePending)
      .addCase(createCard.fulfilled, (state, action: PayloadAction<ICard>) => {
        state.isLoading = false;
        const createdCard = action.payload;
        state.boardWithCards!.cards.push(createdCard);
        state.isError = false;
      })
      .addCase(createCard.rejected, handleRejected);
    builder
      .addCase(editCard.pending, handlePending)
      .addCase(editCard.fulfilled, (state, action: PayloadAction<ICard>) => {
        state.isLoading = false;
        const editedCard = action.payload;
        const cardIndexToUpdate = state.boardWithCards!.cards.findIndex(
          (card) => card.id === editedCard.id
        );
        state.boardWithCards!.cards[cardIndexToUpdate] = editedCard;
        state.isError = false;
      })
      .addCase(editCard.rejected, handleRejected);
    builder
      .addCase(updateCardStatus.pending, handlePending)
      .addCase(
        updateCardStatus.fulfilled,
        (state, action: PayloadAction<ICard>) => {
          state.isLoading = false;
          const editedCard = action.payload;
          const cardIndexToUpdate = state.boardWithCards!.cards.findIndex(
            (card) => card.id === editedCard.id
          );
          state.boardWithCards!.cards[cardIndexToUpdate] = editedCard;
          state.isError = false;
        }
      )
      .addCase(updateCardStatus.rejected, handleRejected);
  },
});

const boardReducer = boardSlice.reducer;
export default boardReducer;
