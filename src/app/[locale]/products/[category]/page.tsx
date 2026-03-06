import { getCategoryBySlug, Locale } from "@/data/helpers";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CategoryPage({
    params: { locale, category: categorySlug }
}: {
    params: { locale: string; category: string }
}) {
    const currentLocale = locale as Locale;
    const category = getCategoryBySlug(categorySlug);

    if (!category) {
        notFound();
    }

    return (
        <main>
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-background">
                <div className="max-w-container mx-auto px-6 md:px-8">
                    <Link
                        href="/products"
                        className="text-sm text-stone-400 hover:text-foreground transition-colors inline-flex items-center gap-1 mb-6"
                    >
                        ← Back to Products
                    </Link>
                    <p className="text-xs font-medium text-accent flex items-center gap-4 uppercase tracking-wider mb-4">
                        <span className="w-8 h-[1px] bg-accent"></span> Category
                    </p>
                    <h1 className="text-h1 text-foreground mb-4">
                        {category.name[currentLocale]}<span className="text-accent">.</span>
                    </h1>
                    <p className="text-stone-500 max-w-2xl">
                        {category.description[currentLocale]}
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white border-t border-stone-100">
                <div className="max-w-container mx-auto px-6 md:px-8">
                    {category.brands.length === 0 ? (
                        <p className="text-stone-400">No brands listed yet.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.brands.map((brand) => (
                                <Link
                                    key={brand.id}
                                    href={`/products/${category.slug}/${brand.slug}`}
                                    className="group block"
                                >
                                    <div className="bg-stone-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                                        <div className="relative h-48 bg-stone-100 overflow-hidden">
                                            {brand.logo ? (
                                                <Image
                                                    src={brand.logo}
                                                    alt={brand.name}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <span className="text-4xl font-semibold text-stone-300">
                                                        {brand.name[0]}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-5">
                                            <h2 className="text-base font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                                                {brand.name}
                                            </h2>
                                            <span className="text-xs text-stone-400 group-hover:text-stone-600 flex items-center gap-1 transition-colors">
                                                View Models <ArrowUpRight size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
