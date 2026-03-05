// Types for the Multilingual Product Catalog

export type LocalizedString = {
    en: string;
    es: string;
    zh: string;
};

export interface Product {
    id: string;
    name: LocalizedString;
    slug: string;
    images: string[];
    category: string; // Relates to Category slug
    brand: string;    // Relates to Brand slug
    model: string;    // Relates to Model slug
    specifications?: Record<string, string>;
    featured: boolean;
}

export interface Model {
    id: string;
    name: string;
    slug: string;
    brand: string; // Relates to Brand slug
    products: Product[];
}

export interface Brand {
    id: string;
    name: string;
    slug: string;
    logo?: string;
    models: Model[];
}

export interface Category {
    id: string;
    name: LocalizedString;
    slug: string;
    description: LocalizedString;
    brands: Brand[];
    icon?: string;
}
