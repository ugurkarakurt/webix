import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductsPage from "@/components/pages/ProductsPage";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ProductsPage />
      </main>
      <Footer />
    </div>
  );
} 