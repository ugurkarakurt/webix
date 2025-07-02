import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // Desteklenen diller
    locales: ['tr', 'en'],

    // Varsayılan dil (Türkçe)
    defaultLocale: 'tr',

    // URL stratejisi: Türkçe için prefix yok, İngilizce için /en
    localePrefix: 'as-needed',

    // URL path'lerinin dillere göre çevirileri
    pathnames: {
        '/': '/',
        '/products': {
            tr: '/urunler',
            en: '/products'
        },
        '/about': {
            tr: '/hakkimizda',
            en: '/about'
        },
        '/contact': {
            tr: '/iletisim',
            en: '/contact'
        },
        '/brand': {
            tr: '/marka',
            en: '/brand'
        }
    }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];