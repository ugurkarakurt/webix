"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from pathname if it exists
    const pathnameWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '');
    const newPath = `/${newLocale}${pathnameWithoutLocale}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
      >
        <span>{currentLanguage?.flag}</span>
        <span className="hidden sm:block">{currentLanguage?.name}</span>
        <ChevronDownIcon className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2 ${
                  locale === language.code
                    ? "bg-gray-50 text-gray-900"
                    : "text-gray-700"
                }`}
              >
                <span>{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
