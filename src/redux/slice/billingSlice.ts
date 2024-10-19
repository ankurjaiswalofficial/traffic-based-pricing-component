import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BillingState {
  isYearly: boolean;
  prices: { [key: string]: number };
  selectedPageViews: number;
}

const initialState: BillingState = {
  isYearly: false,
  prices: {
    '10K': 8,
    '50K': 12,
    '100K': 16,
    '500K': 24,
    '1M': 36,
  },
  selectedPageViews: 100000,
};

const billingSlice = createSlice({
  name: 'billing',
  initialState,
  reducers: {
    toggleBillingType(state) {
      state.isYearly = !state.isYearly;
    },
    setSelectedPageViews(state, action: PayloadAction<number>) {
      state.selectedPageViews = action.payload;
    },
  },
});

export const { toggleBillingType, setSelectedPageViews } = billingSlice.actions;
export default billingSlice.reducer;
