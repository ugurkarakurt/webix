import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './features/auth/authSlice';
import { productsSlice } from './features/products/productsSlice';
import { cartSlice } from './features/cart/cartSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const makeStore = () => {
    return configureStore({
        reducer: {
            auth: authSlice.reducer,
            products: productsSlice.reducer,
            cart: cartSlice.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
                },
            }),
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Typed hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;