import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slice/userSlice';
import cartSlice from './Slice/cartSlice';
import { createLogger } from 'redux-logger';

const logger = createLogger();

export const store = configureStore({
  reducer: {
    user:userSlice,
    cart:cartSlice,
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})