import { getCategoryBySlug, Locale } from "@/data/helpers";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export default function BrandPage({
    params: { locale, category: categorySlug, brand: brandSlug }
}: {
    params: { locale: string; category: string; brand: string }
}) {
    const currentLocale = locale as Locale;
    const category = getCategoryBySlug(categorySlug);

    if (!category) notFound();

    const brand = category.brands.find(b => b.slug === brandSlug);
    if (!brand) notFound();

    return (
        <main>
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-background">
                <div className="max-w-container mx-auto px-6 md:px-8">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-stone-400 mb-6">
                        <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
                        <ChevronRight size={14} />
                        <Link href={`/products/${category.slug}`} className="hover:text-foreground transition-colors">
                            {category.name[currentLocale]}
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-foreground font-medium">{brand.name}</span>
                    </div>

                    <p className="text-xs font-medium text-accent flex items-center gap-4 uppercase tracking-wider mb-4 mt-8">
                        <span className="w-8 h-[1px] bg-accent"></span> Brand
                    </p>
                    <h1 className="text-h1 text-foreground mb-2">
                        {brand.name}<span className="text-accent">.</span>
                    </h1>
                    <p className="text-stone-500">Select a model to view available parts.</p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white border-t border-stone-100">
                <div className="max-w-container mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {brand.models.map((model) => {
                            const repProduct = model.products.find(p => p.images.length > 0);
                            const repImage = repProduct?.images[0];

                            return (
                                <Link
                                    key={model.id}
                                    href={`/products/${category.slug}/${brand.slug}/${model.slug}`}
                                    className="group block"
                                >
                                    <div className="bg-stone-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                                        <div className="relative h-48 bg-stone-100 overflow-hidden">
                                            {repImage ? (
                                                <Image
                                                    src={repImage}
                                                    alt={model.name}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <span className="text-3xl font-semibold text-stone-300">
                                                        {model.name[0]}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-5">
                                            <span className="text-xs text-stone-400 mb-1 block">
                                                {model.products.length} {model.products.length === 1 ? "Part" : "Parts"}
                                            </span>
                                            <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                                                {model.name}
                                            </h3>
                                            <span className="text-xs text-stone-400 group-hover:text-stone-600 flex items-center gap-1 transition-colors">
                                                View Parts <ArrowUpRight size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
