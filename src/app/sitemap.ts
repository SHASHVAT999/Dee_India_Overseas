import { MetadataRoute } from 'next';

const host = 'https://www.deeindia.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = [
        '',
        '/about',
        '/contact',
        '/products',
        '/products/engine-valves',
        '/products/clutch-parts',
        '/products/brake-systems',
        '/products/inner-tubes',
        '/quality',
        '/terms',
        '/privacy'
    ];

    return pages.map((page) => ({
        url: `${host}/en${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
            languages: {
                en: `${host}/en${page}`,
                es: `${host}/es${page}`,
                zh: `${host}/zh${page}`,
            },
        },
    }));
}
