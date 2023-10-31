import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk';
import { getArticleById } from '@/api/article';
import { postSlice } from '@/lib/redux/slices/postSlice/postSlice';
import type { ReduxThunkAction } from '@/lib/redux';

export const getDataById = createAppAsyncThunk(
  'post/getDateById',
  async (id: string) => {
    const { data } = await getArticleById(id);
    return data;
  },
);
