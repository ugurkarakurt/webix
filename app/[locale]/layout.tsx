import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import StoreProvider from "@/lib/store-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Can be imported from a shared config
const locales = ['tr', 'en'] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "E-Commerce | Modern Online Store",
  description: "Modern e-commerce platform built with Next.js 15",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as typeof locales[number])) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
} 