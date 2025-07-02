import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Types
interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

// Initial state
const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

// Async thunks (örnek API çağrısı)
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials: { email: string; password: string }) => {
        // Simüle edilmiş API çağrısı
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        return response.json();
    }
);

// Slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Login failed';
            });
    },
});

export const { logout, clearError } = authSlice.actions;