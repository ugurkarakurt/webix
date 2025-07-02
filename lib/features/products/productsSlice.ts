import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Types
interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
}

interface ProductsState {
    items: Product[];
    isLoading: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
}

// Initial state
const initialState: ProductsState = {
    items: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
};

// Async thunks
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (page: number = 1) => {
        // Simüle edilmiş API çağrısı
        const response = await fetch(`/api/products?page=${page}`);

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        return response.json();
    }
);

// Slice
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload.products;
                state.totalPages = action.payload.totalPages;
                state.currentPage = action.payload.currentPage;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch products';
            });
    },
});

export const { clearError, setCurrentPage } = productsSlice.actions;