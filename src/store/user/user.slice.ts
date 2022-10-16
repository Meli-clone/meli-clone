import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserState {
  userInfo: {
    userLoggedIn: boolean;
    username: string;
    phone?: string;
    email: string;
    userImage?: string;
  };
}

const initialState: UserState = {
  userInfo: {
    userLoggedIn: false,
    username: '',
    phone: '',
    email: '',
    userImage: '',
  },
};

const userInfoClean = {
  userLoggedIn: false,
  username: '',
  phone: '',
  email: '',
  userImage: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserState['userInfo']>) => {
      state.userInfo = action.payload;
    },

    logout: state => {
      state.userInfo = userInfoClean;
    },
  },
});

export const { setUserInfo, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.userInfo;

export default userSlice.reducer;
