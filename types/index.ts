// User types
export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
}

// Product types
export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    stock?: number;
    rating?: number;
    reviews?: number;
}

// Cart types
export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

// API Response types
export interface ApiResponse<T> {
    data: T;
    message?: string;
    success: boolean;
}

export interface PaginatedResponse<T> {
    items: T[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

// Auth types
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}

// Order types
export interface Order {
    id: string;
    userId: string;
    items: CartItem[];
    total: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    createdAt: string;
    updatedAt: string;
}

// Form types
export interface ContactForm {
    name: string;
    email: string;
    message: string;
} 