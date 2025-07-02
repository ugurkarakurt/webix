import { NextRequest, NextResponse } from 'next/server';

// Mock product data
const PRODUCTS = [
    {
        id: '1',
        name: 'Wireless Headphones',
        price: 99.99,
        image: 'https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        category: 'electronics'
    },
    {
        id: '2',
        name: 'Smart Watch',
        price: 199.99,
        image: 'https://via.placeholder.com/300x200/059669/FFFFFF?text=Smart+Watch',
        description: 'Advanced smartwatch with health monitoring features',
        category: 'electronics'
    },
    {
        id: '3',
        name: 'Laptop Backpack',
        price: 49.99,
        image: 'https://via.placeholder.com/300x200/DC2626/FFFFFF?text=Backpack',
        description: 'Durable laptop backpack with multiple compartments',
        category: 'accessories'
    },
    {
        id: '4',
        name: 'Bluetooth Speaker',
        price: 79.99,
        image: 'https://via.placeholder.com/300x200/7C3AED/FFFFFF?text=Speaker',
        description: 'Portable Bluetooth speaker with excellent sound quality',
        category: 'electronics'
    },
    {
        id: '5',
        name: 'Phone Case',
        price: 19.99,
        image: 'https://via.placeholder.com/300x200/EA580C/FFFFFF?text=Phone+Case',
        description: 'Protective phone case with shock absorption',
        category: 'accessories'
    },
    {
        id: '6',
        name: 'Wireless Mouse',
        price: 29.99,
        image: 'https://via.placeholder.com/300x200/0891B2/FFFFFF?text=Mouse',
        description: 'Ergonomic wireless mouse with long battery life',
        category: 'electronics'
    },
    {
        id: '7',
        name: 'USB-C Cable',
        price: 14.99,
        image: 'https://via.placeholder.com/300x200/059669/FFFFFF?text=USB+Cable',
        description: 'Fast charging USB-C cable with data transfer',
        category: 'accessories'
    },
    {
        id: '8',
        name: 'Tablet Stand',
        price: 24.99,
        image: 'https://via.placeholder.com/300x200/7C2D12/FFFFFF?text=Tablet+Stand',
        description: 'Adjustable tablet stand for comfortable viewing',
        category: 'accessories'
    }
];

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '8');
        const category = searchParams.get('category');

        // Filter by category if provided
        let filteredProducts = PRODUCTS;
        if (category && category !== 'all') {
            filteredProducts = PRODUCTS.filter(product => product.category === category);
        }

        // Pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

        // Calculate total pages
        const totalPages = Math.ceil(filteredProducts.length / limit);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        return NextResponse.json({
            products: paginatedProducts,
            currentPage: page,
            totalPages,
            totalProducts: filteredProducts.length,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1
        });
    } catch {
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}