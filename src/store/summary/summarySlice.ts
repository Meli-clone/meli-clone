import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Summary {
  sum: number;
}

const initialState = {
  sum: 23999,
};

export const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    addSummary: (state, action: PayloadAction<number>) => {
      state.sum += action.payload;
      console.log(state.sum);
    },
  },
});

export const { addSummary } = summarySlice.actions;
export default summarySlice.reducer;
