import { CATALOG_DATA } from "./products";
import { Category, Brand, Product } from "./types";

export type Locale = "en" | "es" | "zh";

// 1. Get Category By Slug
export function getCategoryBySlug(slug: string): Category | undefined {
    return CATALOG_DATA.find(c => c.slug === slug);
}

// 2. Get Brands By Category
export function getBrandsByCategory(categorySlug: string): Brand[] {
    const category = getCategoryBySlug(categorySlug);
    return category ? category.brands : [];
}

// 3. Get Products By Model
export function getProductsByModel(modelSlug: string): Product[] {
    const products: Product[] = [];

    // Traverse the mock DB to find the model
    CATALOG_DATA.forEach(category => {
        category.brands.forEach(brand => {
            const model = brand.models.find(m => m.slug === modelSlug);
            if (model) {
                products.push(...model.products);
            }
        });
    });

    return products;
}

// 4. Get Featured Products
export function getFeaturedProducts(limit: number): Product[] {
    const featured: Product[] = [];

    for (const category of CATALOG_DATA) {
        for (const brand of category.brands) {
            for (const model of brand.models) {
                const fProducts = model.products.filter(p => p.featured);
                featured.push(...fProducts);
            }
        }
    }

    return featured.slice(0, limit);
}

// 5. Search Products
export function searchProducts(query: string, locale: Locale): Product[] {
    const lowerQuery = query.toLowerCase();
    const results: Product[] = [];

    CATALOG_DATA.forEach(category => {
        category.brands.forEach(brand => {
            brand.models.forEach(model => {
                model.products.forEach(product => {
                    // Search in localized name, brand name, and model name
                    const productName = product.name[locale].toLowerCase();
                    const brandName = brand.name.toLowerCase();
                    const modelName = model.name.toLowerCase();

                    if (
                        productName.includes(lowerQuery) ||
                        brandName.includes(lowerQuery) ||
                        modelName.includes(lowerQuery)
                    ) {
                        results.push(product);
                    }
                });
            });
        });
    });

    return results;
}

// Utility: SEO Metadata Function structure for Next.js app directory
export function generateProductMetadata(productSlug: string, locale: Locale) {
    let targetProduct: Product | undefined;

    // Find the product
    for (const category of CATALOG_DATA) {
        for (const brand of category.brands) {
            for (const model of brand.models) {
                const found = model.products.find(p => p.slug === productSlug);
                if (found) {
                    targetProduct = found;
                    break;
                }
            }
        }
    }

    if (!targetProduct) {
        return {
            title: 'Product Not Found',
            description: 'The requested product could not be located.'
        };
    }

    const localizedName = targetProduct.name[locale];

    // Generic mapping dictionary for SEO meta descriptions
    const descDictionary = {
        en: `Discover the premium ${localizedName} engineered by ${targetProduct.brand}.`,
        es: `Descubra el ${localizedName} premium diseñado por ${targetProduct.brand}.`,
        zh: `探索由 ${targetProduct.brand} 设计的高级 ${localizedName}。`
    };

    return {
        title: `${localizedName} | DEE India Premium Auto Parts`,
        description: descDictionary[locale],
        openGraph: {
            images: targetProduct.images[0] ? [targetProduct.images[0]] : []
        }
    };
}
