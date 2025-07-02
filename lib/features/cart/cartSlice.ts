import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalAmount: number;
}

// Initial state
const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

// Helper function
const calculateTotals = (state: CartState) => {
    state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
    state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Slice
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }

            calculateTotals(state);
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            calculateTotals(state);
        },
        updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
            const item = state.items.find(item => item.id === action.payload.id);

            if (item) {
                item.quantity = action.payload.quantity;
                if (item.quantity <= 0) {
                    state.items = state.items.filter(i => i.id !== action.payload.id);
                }
            }

            calculateTotals(state);
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;