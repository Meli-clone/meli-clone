import { configureStore } from '@reduxjs/toolkit';
// Reducers
import cartReducer from './cart/cartSlice';
import summaryReducer from './summary/summarySlice';
import userReducer from './user/user.slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    summary: summaryReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
