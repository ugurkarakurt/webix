import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // Mock authentication logic
        if (email === 'demo@example.com' && password === 'password') {
            return NextResponse.json({
                user: {
                    id: '1',
                    email: 'demo@example.com',
                    name: 'Demo User'
                },
                token: 'mock-jwt-token'
            });
        }

        return NextResponse.json(
            { error: 'Invalid credentials' },
            { status: 401 }
        );
    } catch {
        return NextResponse.json(
            { error: 'Login failed' },
            { status: 500 }
        );
    }
}