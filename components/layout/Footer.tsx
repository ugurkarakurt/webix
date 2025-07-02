"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("common");

  const navigation = {
    main: [
      { name: t("home"), href: "/" },
      { name: t("products"), href: "/products" },
      { name: t("about"), href: "/about" },
      { name: t("contact"), href: "/contact" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              E-Commerce
            </Link>
            <p className="mt-2 text-sm text-gray-300">
              Modern e-commerce platform built with Next.js 15
            </p>
          </div>

          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 E-Commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
