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

const initialState = {
  value: [
    {
      id: 'MLA1122296563',
      price: 23.999,
      stock: 1,
      title: 'Taladro Atornillador Inalámb 10mm Kroner 14,4 V + Muñequera',
      quantity: 4,
      image:
        'https://http2.mlstatic.com/taladro-atornillador-inalamb-10mm-kroner-144-v---munequera-D_Q_NP_932269-MLA47949358595_102021-R.webp',
    },
  ],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductCart>) => {
      state.value.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const itemFound = state.value.find(item => item.id === action.payload);
      if (itemFound) {
        state.value.splice(state.value.indexOf(itemFound), 1);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const { deleteItem } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.value;
export default cartSlice.reducer;
