import { routing } from './routing';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Locale } from './routing';

export default getRequestConfig(async ({ locale }) => {
    // Locale'in geçerli olup olmadığını kontrol et
    if (!locale || !routing.locales.includes(locale as Locale)) {
        notFound();
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});