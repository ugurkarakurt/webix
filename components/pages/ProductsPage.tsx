"use client";

import { useTranslations } from "next-intl";
import { useProducts } from "@/lib/hooks";
import { useEffect } from "react";
import ProductCard from "@/components/ui/ProductCard";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function ProductsPage() {
  const t = useTranslations("pages.products");
  const { products, isLoading, error, loadProducts } = useProducts();

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t("title")}</h1>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">{t("noProducts")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
