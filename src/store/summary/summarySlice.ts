import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Summary {
  price: number;
  quantity: number;
}

const initialState = {
  price: 0,
};

export const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    addSummary: (state, action: PayloadAction<Summary>) => {
      state.price += action.payload.price * action.payload.quantity;
      console.log(state.price);
      
    },
    sumSummary: (state, action: PayloadAction<number>) => {
      state.price += action.payload;
    },
    substractSummary: (state, action: PayloadAction<number>) => {
      state.price -= action.payload;
    },
    deleteSummary: (state, action: PayloadAction<number>) => {
      state.price -= action.payload;
    },
    deleteAllSummary: state => {
      state.price = 0;
    },
  },
});

export const {
  addSummary,
  sumSummary,
  substractSummary,
  deleteSummary,
  deleteAllSummary,
} = summarySlice.actions;
export default summarySlice.reducer;
