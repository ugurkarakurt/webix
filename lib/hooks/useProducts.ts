import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchProducts } from '../features/products/productsSlice';

export const useProducts = () => {
    const dispatch = useAppDispatch();
    const { items, isLoading, error, currentPage, totalPages } = useAppSelector(
        (state) => state.products
    );

    const loadProducts = (page: number = 1) => {
        dispatch(fetchProducts(page));
    };

    useEffect(() => {
        if (items.length === 0) {
            loadProducts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        products: items,
        isLoading,
        error,
        currentPage,
        totalPages,
        loadProducts,
    };
};