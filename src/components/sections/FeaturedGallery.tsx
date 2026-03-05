"use client";

import useEmblaCarousel from "embla-carousel-react";

export function FeaturedGallery() {
    const [emblaRef] = useEmblaCarousel({
        align: "start",
        dragFree: true,
        containScroll: "trimSnaps",
    });

    const features = [
        { title: "Engine Valves", image: "/placeholder-engine.jpg" },
        { title: "Clutch Assembly", image: "/placeholder-clutch.jpg" },
        { title: "Brake Systems", image: "/placeholder-brake.jpg" },
        { title: "Inner Tubes", image: "/placeholder-tubes.jpg" },
        { title: "Suspension Parts", image: "/placeholder-suspension.jpg" },
    ];

    return (
        <section className="py-24 md:py-32 bg-white border-t border-stone-100 overflow-hidden">
            <div className="max-w-container mx-auto px-6 md:px-8 mb-10 flex justify-between items-end">
                <div>
                    <h2 className="text-h2 text-foreground">
                        Precision Engineered
                    </h2>
                    <p className="text-stone-500 mt-2">
                        Components built for performance and durability.
                    </p>
                </div>
                <div className="hidden md:block text-sm text-stone-400">
                    Drag to explore →
                </div>
            </div>

            <div className="relative w-full">
                <div
                    className="overflow-hidden w-full cursor-grab active:cursor-grabbing pl-6 md:pl-8"
                    ref={emblaRef}
                >
                    <div className="flex gap-6">
                        {features.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex-[0_0_80%] md:flex-[0_0_45%] lg:flex-[0_0_33%] min-w-0"
                            >
                                <div className="aspect-[16/10] relative overflow-hidden rounded-xl bg-stone-100">
                                    {/* Placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center text-stone-300">
                                        <div className="w-12 h-12 rounded-full bg-stone-200" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-sm font-medium text-foreground">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-stone-400 mt-1">
                                        Series {String(idx + 1).padStart(2, "0")}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="flex-[0_0_5%] min-w-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}
