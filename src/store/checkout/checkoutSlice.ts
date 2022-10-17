import { RootState } from '@/store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductsCheckout {
  user: {
    fullname: string,
    CP: number,
    province: string,
    city: string,
    street: string,
    streetNumber: number,
    dpto: string,
  },
  shipping: number,
  shippingType: string
  paymentMethod: string,
}

interface UserObject {
  fullname: string,
    CP: number,
    province: string,
    city: string,
    street: string,
    streetNumber: number,
    dpto: string,
}

const initialState = {
  value:
    {
      user: {
        fullname: '',
        CP: 1627,
        province: '',
        city: '',
        street: '',
        streetNumber: 0,
        dpto: ''
      },
      shipping: 1235,
      shippingType: 'Envío a tu domicilio',
      paymentMethod: 'Tarjeta de débito',
    },
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addCP: (state, action: PayloadAction<number>) => {
      state.value.user.CP = action.payload
    },
    addShippingCost: (state, action: PayloadAction<number>) => {
      state.value.shipping = action.payload
    },
    addUserInfo: (state, action: PayloadAction<UserObject>) => {
      state.value.user = action.payload
    },
    addPaymentMethod: (state, action: PayloadAction<string>) => {
      state.value.paymentMethod = action.payload
    },
    addShippingType: (state, action: PayloadAction<string>) => {
      state.value.shippingType = action.payload
    },
  },
});

export const { addCP, addShippingCost, addUserInfo, addPaymentMethod, addShippingType } = checkoutSlice.actions;
export const selectCheckout = (state: RootState) => state.checkout.value;
export default checkoutSlice.reducer;
