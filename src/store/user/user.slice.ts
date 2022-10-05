import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserState {
  userInfo: object;
}

const initialState: UserState = {
  userInfo: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<object>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.userInfo;

export default userSlice.reducer;
