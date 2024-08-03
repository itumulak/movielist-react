import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./movieSlice";
import authReducer from './authSlice';

export default configureStore({
  reducer: {
    movies: movieReducer,
    auth: authReducer
  },
})