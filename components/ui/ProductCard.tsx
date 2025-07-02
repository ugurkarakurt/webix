"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCart } from "@/lib/hooks";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const t = useTranslations("pages.products");
  const tCommon = useTranslations("common");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    // Kısa bir loading efekti
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 bg-gray-200 group">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        
        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-900 px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
            {t("viewDetails")}
          </button>
        </div>

        {/* Category badge */}
        <div className="absolute top-2 left-2">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full capitalize">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900">
              {tCommon("currency")}{product.price.toFixed(2)}
            </span>
            {product.rating && (
              <div className="flex items-center mt-1">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-gray-600 ml-1">
                  {product.rating} ({product.reviews || 0})
                </span>
              </div>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              isAdding
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 active:scale-95"
            }`}
          >
            <ShoppingCartIcon className="h-4 w-4" />
            <span>{isAdding ? tCommon("loading") : t("addToCart")}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
