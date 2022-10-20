import { RootState } from '@/store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductCart {
  id: string;
  price: number;
  stock: number;
  title: string;
  quantity: number;
  image: string;
}

export interface cartState {
  value: Array<ProductCart>;
}

const initialState: cartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductCart>) => {
      const itemFound = state.value.find(item => item.id === action.payload.id);
      if (itemFound) itemFound.quantity += action.payload.quantity;
      else state.value.push(action.payload);
    },
    sumQuantity: (state, action: PayloadAction<ProductCart>) => {
      const itemFound = state.value.find(item => item.id === action.payload.id);
      if (itemFound) itemFound.quantity += 1;
    },
    substractQuantity: (state, action: PayloadAction<ProductCart>) => {
      const itemFound = state.value.find(item => item.id === action.payload.id);
      if (itemFound) itemFound.quantity -= 1;
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const itemFound = state.value.find(item => item.id === action.payload);
      if (itemFound) state.value.splice(state.value.indexOf(itemFound), 1);
    },
    deleteAll: state => {
      state.value = [];
    },
  },
});

export const {
  addToCart,
  deleteItem,
  deleteAll,
  sumQuantity,
  substractQuantity,
} = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.value;
export default cartSlice.reducer;
