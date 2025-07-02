import { useAppDispatch, useAppSelector } from '../store';
import { addToCart, removeFromCart, updateQuantity, clearCart } from '../features/cart/cartSlice';

export const useCart = () => {
    const dispatch = useAppDispatch();
    const { items, totalQuantity, totalAmount } = useAppSelector(
        (state) => state.cart
    );

    const addItem = (product: { id: string; name: string; price: number; image: string }) => {
        dispatch(addToCart(product));
    };

    const removeItem = (productId: string) => {
        dispatch(removeFromCart(productId));
    };

    const updateItemQuantity = (productId: string, quantity: number) => {
        dispatch(updateQuantity({ id: productId, quantity }));
    };

    const clearCartItems = () => {
        dispatch(clearCart());
    };

    return {
        items,
        totalQuantity,
        totalAmount,
        addItem,
        removeItem,
        updateItemQuantity,
        clearCart: clearCartItems,
    };
};