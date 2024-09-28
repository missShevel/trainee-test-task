import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../api/axios';
import { IBoardWithCards } from '../../../interface/boardInterface';
import { ApiEndpoints } from '../../../enum/apiEndpoints';

export default createAsyncThunk(
  'board/updateBoardName',
  async ({ boardId, name }: { boardId: string; name: string }) => {
    const { data: board } = await axiosInstance.put<IBoardWithCards>(
      `${ApiEndpoints.GET_BOARD}/${boardId}`,
      { name }
    );
    return board;
  }
);
