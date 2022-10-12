import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Summary {
  price: number;
  quantity: number;
}

const initialState = {
  price: 95996,
};

export const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    addSummary: (state, action: PayloadAction<Summary>) => {
      state.price += action.payload.price * action.payload.quantity;
    },
    sumSummary: (state, action: PayloadAction<number>) => {
      state.price += action.payload;
    },
    substractSummary: (state, action: PayloadAction<number>) => {
      state.price -= action.payload;
    },
  },
});

export const { addSummary, sumSummary, substractSummary } =
  summarySlice.actions;
export default summarySlice.reducer;