"use client";

import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";

const categories = [
    { name: "Engine Valves", slug: "engine-valves", desc: "Intake and exhaust valves for motorcycles, three-wheelers, and commercial vehicles." },
    { name: "Clutch Parts", slug: "clutch-parts", desc: "Clutch plates, hubs, and assemblies for smooth power transmission." },
    { name: "Brake Systems", slug: "brake-systems", desc: "Brake shoes, drums, and hydraulic components for reliable stopping power." },
    { name: "Inner Tubes", slug: "inner-tubes", desc: "High-quality butyl rubber inner tubes for two-wheelers and commercial use." },
    { name: "Suspension", slug: "suspension", desc: "Shock absorbers and suspension components for ride stability." },
];

export default function ProductsPage() {
    return (
        <main>
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-background">
                <div className="max-w-container mx-auto px-6 md:px-8">
                    <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-4">Products</p>
                    <h1 className="text-h1 text-foreground max-w-2xl">
                        Product Categories
                    </h1>
                    <p className="text-stone-500 mt-4 max-w-lg">
                        Explore our range of precision-engineered automotive components.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white border-t border-stone-100">
                <div className="max-w-container mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat) => (
                            <Link key={cat.slug} href={`/products/${cat.slug}`}>
                                <div className="group h-full bg-stone-50 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 p-8">
                                    <div className="w-12 h-12 rounded-xl bg-stone-200 mb-6" />
                                    <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-stone-600 transition-colors">
                                        {cat.name}
                                    </h3>
                                    <p className="text-sm text-stone-500 leading-relaxed mb-4">
                                        {cat.desc}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-stone-400 group-hover:text-stone-600 transition-colors">
                                        View products <ArrowUpRight size={12} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
