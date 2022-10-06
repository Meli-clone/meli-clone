import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface CartState {
  value: Array<ProductsCart>;
}

const initialState: CartState = {
  value: [
    {
      id: "MLA1122296562",
      price: 55000,
      stock: 1,
      title: " Moto G6 Play 32 Gb Oro Fino 3 Gb Ram ",
      image: "https://http2.mlstatic.com/D_608151-MLA31003463559_062019-O.jpg",
      quantity: 2,
    },
  ],
};

interface ProductsCart {
  id: string
  title: string
  price: number
  stock: number
  image: string
  quantity: number
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductsCart>) => {
      state.value.push(action.payload);
      console.log(state.value);
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const itemFound = state.value.find(task => task.id === action.payload);
      if(itemFound){
        state.value.splice(state.value.indexOf(itemFound), 1);
      }
    }
  },
});

export const { addToCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
