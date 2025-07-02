import { useAppDispatch, useAppSelector } from '../store';
import { loginUser, logout, clearError } from '../features/auth/authSlice';

export const useAuth = () => {
    const dispatch = useAppDispatch();
    const { user, isAuthenticated, isLoading, error } = useAppSelector(
        (state) => state.auth
    );

    const login = (credentials: { email: string; password: string }) => {
        dispatch(loginUser(credentials));
    };

    const logoutUser = () => {
        dispatch(logout());
    };

    const clearAuthError = () => {
        dispatch(clearError());
    };

    return {
        user,
        isAuthenticated,
        isLoading,
        error,
        login,
        logout: logoutUser,
        clearError: clearAuthError,
    };
};