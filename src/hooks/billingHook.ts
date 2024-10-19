import { toggleBillingType } from '@/redux/slice/billingSlice';
import { RootState, useAppDispatch } from '@/redux/store';
import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

const useBillingHook = () => {
    const dispatch = useAppDispatch();
    const { isYearly, prices, selectedPageViews } = useSelector(
        (state: RootState) => state.billing
    );

    const getPrice = useCallback(() => {
        const price =
        selectedPageViews === 10000
          ? prices['10K']
          : selectedPageViews === 50000
          ? prices['50K']
          : selectedPageViews === 100000
          ? prices['100K']
          : selectedPageViews === 500000
          ? prices['500K']
          : prices['1M'];

        return isYearly ? (price * 12 * 0.75).toFixed(2) : price.toFixed(2);
    }, [isYearly, prices, selectedPageViews])

    const handleBillingType = useCallback(() => {
        dispatch(toggleBillingType());
    }, [dispatch])

    const context = useMemo(() => {
        return {
            isYearly,
            prices,
            selectedPageViews,
            getPrice,
            handleBillingType
        }
    }, [getPrice, handleBillingType, isYearly, prices, selectedPageViews])
    return context
}

export default useBillingHook
