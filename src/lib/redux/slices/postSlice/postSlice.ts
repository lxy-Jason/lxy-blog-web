import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getDataById } from './thunks';
import { Article } from '@/types/article';

export interface PostSliceState {
  value: Article;
}

const initialState: PostSliceState = {
  value: {
    content: '',
    title: '',
    category: '',
    createdAt: '',
    updatedAt: '',
    _id: '',
    path: '',
  },
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    //数据请求完成后触发
    updateData: (state, { payload }) => {
      state.value = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getDataById.pending, (state) => {
        console.log('数据请求中');
      })
      .addCase(getDataById.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(getDataById.rejected, (state, err) => {
        console.log('失败', err);
      });
  },
});

export const { updateData } = postSlice.actions;
export default postSlice.reducer;
