import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import { routing } from "@/i18n/routing";

import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale });

    return {
        title: {
            default: t('SEO.title'),
            template: `%s | ${t('SEO.title').split('|')[0].trim()}`
        },
        description: t('SEO.description'),
        metadataBase: new URL('https://www.deeindia.com'),
        alternates: {
            canonical: `/${locale}`,
            languages: {
                'en': '/en',
                'es': '/es',
                'zh': '/zh',
            }
        },
        openGraph: {
            title: t('SEO.title'),
            description: t('SEO.description'),
            url: `https://www.deeindia.com/${locale}`,
            siteName: 'Dee India Overseas',
            locale: locale,
            type: 'website',
            images: [
                {
                    url: '/images/og-default.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Dee India Overseas Automotive Parts'
                }
            ]
        }
    };
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    if (!(routing.locales as readonly string[]).includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Dee India Overseas",
        "url": "https://www.deeindia.com",
        "logo": "https://www.deeindia.com/logo.png",
        "description": "Premium High-Tolerance Automotive Components Exporter",
        "foundingDate": "1985",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bhaktinagar Station Road - 2/22",
            "addressLocality": "Rajkot",
            "addressRegion": "Gujarat",
            "postalCode": "360002",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-98250-75874",
            "contactType": "sales",
            "email": "info@deeindia.com",
            "availableLanguage": ["English", "Spanish", "Chinese"]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <NextIntlClientProvider messages={messages} locale={locale}>
                <ScrollProgress />

                <Header />
                <div className="min-h-screen">
                    {children}
                </div>
                <Footer />
                <BackToTop />
                <FloatingWhatsApp />
                <CookieConsent />
            </NextIntlClientProvider>
            <GoogleAnalytics gaId="G-XYZ1234567" />
        </>
    );
}
