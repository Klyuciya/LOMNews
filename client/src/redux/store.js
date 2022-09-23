import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import singleNewsSlice from './features/news/singleNewsSlice';
import commentSlice from './features/comments/commentsSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice,
    news: singleNewsSlice,
    comment: commentSlice
  },
});



