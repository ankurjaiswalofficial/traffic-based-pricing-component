import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import billingReducer from './slice/billingSlice';

const store = configureStore({
  reducer: {
    billing: billingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
