"use client";

import { useState } from "react";
import { CATALOG_DATA } from "@/data/products";
import { Locale } from "@/data/helpers";
import { Product } from "@/data/types";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { X, ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ModelGalleryPage({
    params: { locale, category: categorySlug, brand: brandSlug, model: modelSlug }
}: {
    params: { locale: string; category: string; brand: string; model: string }
}) {
    const currentLocale = locale as Locale;

    const category = CATALOG_DATA.find(c => c.slug === categorySlug);
    if (!category) notFound();

    const brand = category.brands.find(b => b.slug === brandSlug);
    if (!brand) notFound();

    const model = brand.models.find(m => m.slug === modelSlug);
    if (!model) notFound();

    const products = model.products;

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [expandedCategories, setExpandedCategories] = useState<string[]>([categorySlug]);

    const toggleCategory = (slug: string) => {
        setExpandedCategories(prev =>
            prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
        );
    };

    return (
        <main className="pt-20 min-h-screen bg-background">
            <div className="max-w-container mx-auto px-6 md:px-8 py-8 flex flex-col lg:flex-row gap-10">

                {/* Sidebar */}
                <aside className="w-full lg:w-56 shrink-0 lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] overflow-y-auto pb-8">
                    <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-4">
                        Directory
                    </p>
                    <div className="space-y-1">
                        {CATALOG_DATA.map((c) => (
                            <div key={c.id}>
                                <button
                                    onClick={() => toggleCategory(c.slug)}
                                    className={`w-full text-left flex items-center justify-between py-2 px-3 rounded-lg text-sm transition-colors ${c.slug === categorySlug
                                            ? "bg-stone-800 text-foreground font-medium"
                                            : "text-stone-500 hover:text-foreground hover:bg-stone-800/50"
                                        }`}
                                >
                                    {c.name[currentLocale]}
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform ${expandedCategories.includes(c.slug) ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {expandedCategories.includes(c.slug) && (
                                    <div className="ml-3 pl-3 border-l border-stone-800 space-y-0.5 mt-1">
                                        {c.brands.map(b => (
                                            <div key={b.id}>
                                                <Link
                                                    href={`/products/${c.slug}/${b.slug}`}
                                                    className={`block py-1.5 px-2 rounded-md text-sm transition-colors ${b.slug === brandSlug && c.slug === categorySlug
                                                            ? "text-accent font-medium"
                                                            : "text-stone-400 hover:text-foreground hover:bg-stone-800/40"
                                                        }`}
                                                >
                                                    {b.name}
                                                </Link>

                                                {b.slug === brandSlug && c.slug === categorySlug && (
                                                    <div className="ml-3 pl-3 border-l border-stone-800 space-y-0.5 mt-0.5">
                                                        {b.models.map(m => (
                                                            <Link
                                                                key={m.id}
                                                                href={`/products/${c.slug}/${b.slug}/${m.slug}`}
                                                                className={`block py-1 px-2 rounded-md text-xs transition-colors ${m.slug === modelSlug
                                                                        ? "text-accent font-medium bg-stone-800/50"
                                                                        : "text-stone-500 hover:text-foreground"
                                                                    }`}
                                                            >
                                                                {m.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Main Content */}
                <section className="flex-1">
                    {/* Breadcrumb */}
                    <div className="flex flex-wrap items-center gap-1.5 text-sm text-stone-400 mb-6">
                        <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
                        <ChevronRight size={12} />
                        <Link href={`/products/${category.slug}`} className="hover:text-foreground transition-colors">
                            {category.name[currentLocale]}
                        </Link>
                        <ChevronRight size={12} />
                        <Link href={`/products/${category.slug}/${brand.slug}`} className="hover:text-foreground transition-colors">
                            {brand.name}
                        </Link>
                        <ChevronRight size={12} />
                        <span className="text-foreground font-medium">{model.name}</span>
                    </div>

                    {/* Title */}
                    <div className="border-b border-stone-800 pb-6 mb-8">
                        <h1 className="text-h2 text-foreground mb-1">{model.name}</h1>
                        <p className="text-sm text-stone-400">
                            {products.length} {products.length === 1 ? "Part" : "Parts"} available
                        </p>
                    </div>

                    {/* Product Grid */}
                    {products.length === 0 ? (
                        <div className="py-16 text-center bg-stone-900/50 border border-stone-800 rounded-xl">
                            <p className="text-stone-400">No parts documented for this model yet.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="group bg-stone-900/50 rounded-xl overflow-hidden border border-stone-800 hover:border-accent/40 transition-colors cursor-pointer"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <div className="relative aspect-square bg-stone-900 overflow-hidden flex items-center justify-center">
                                        <Image
                                            src={product.images[0] || "/images/og-default.jpg"}
                                            alt={product.name[currentLocale as "en" | "es" | "zh"]}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-contain p-6 mix-blend-lighten pointer-events-none"
                                        />
                                    </div>
                                    <div className="p-4 border-t border-stone-800">
                                        <span className="text-xs text-stone-500 block mb-1">
                                            {product.brand} · {product.model}
                                        </span>
                                        <h3 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                                            {product.name[currentLocale]}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>

            {/* Product Details Modal */}
            {selectedProduct && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                >
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
                        onClick={() => setSelectedProduct(null)}
                    />

                    <div className="relative w-full max-w-4xl max-h-[90vh] bg-stone-950 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-4 right-4 z-50 text-stone-400 hover:text-foreground bg-stone-800 hover:bg-stone-700 rounded-full p-2 transition-colors border border-stone-700"
                        >
                            <X size={18} />
                        </button>

                        {/* Image */}
                        <div className="w-full lg:w-1/2 h-64 lg:h-auto bg-stone-900 relative">
                            <Image
                                src={selectedProduct.images[0] || "/images/og-default.jpg"}
                                alt={selectedProduct.name[currentLocale as "en" | "es" | "zh"] || ""}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain p-6 mix-blend-lighten pointer-events-none"
                            />
                        </div>

                        {/* Details */}
                        <div className="w-full lg:w-1/2 overflow-y-auto p-6 md:p-8 border-l border-stone-800">
                            <p className="text-xs text-stone-500 uppercase tracking-wider mb-3">
                                {category?.name[currentLocale]} / {brand.name}
                            </p>

                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                {selectedProduct.name[currentLocale]}
                            </h2>

                            <p className="text-sm text-stone-400 mb-6 leading-relaxed">
                                Precision-engineered component optimized for the {model.name} platform.
                            </p>

                            {/* Specifications */}
                            <div className="mb-6">
                                <h4 className="text-xs font-medium text-accent uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
                                    Technical Data
                                </h4>
                                {selectedProduct.specifications ? (
                                    <div className="space-y-3">
                                        {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                                            <div key={key} className="flex justify-between border-b border-stone-800/50 pb-2">
                                                <span className="text-sm text-stone-500">{key}</span>
                                                <span className="text-sm font-medium text-foreground">{String(value)}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-stone-500 text-sm">General specifications apply.</p>
                                )}
                                <div className="flex justify-between border-b border-stone-800/50 pb-2 mt-3">
                                    <span className="text-sm text-stone-500">SKU</span>
                                    <span className="text-sm font-medium text-foreground uppercase">{selectedProduct.id}</span>
                                </div>
                            </div>

                            <Button className="w-full">
                                Request Bulk Quote
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
