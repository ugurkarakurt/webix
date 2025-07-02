"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useCart } from "@/lib/hooks";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("common");
  const { totalQuantity } = useCart();

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("products"), href: "/products" },
    { name: t("brand"), href: "/brand" },
    { name: t("about"), href: "/about" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              E-Commerce
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* User */}
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <UserIcon className="h-6 w-6" />
            </button>

            {/* Cart */}
            <button className="relative p-2 text-gray-700 hover:text-gray-900">
              <ShoppingCartIcon className="h-6 w-6" />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
