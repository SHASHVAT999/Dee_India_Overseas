"use client";

import { CategoryWheel } from "@/components/ui/CategoryWheel";

export default function ProductsPage() {
    return (
        <main className="bg-background min-h-screen flex flex-col pt-24 pb-16 relative overflow-hidden">
            {/* Blueprint lines for depth */}
            <div className="absolute top-0 left-[10%] bottom-0 w-[1px] bg-stone-800/40 hidden lg:block z-0 pointer-events-none" />
            <div className="absolute top-0 right-[10%] bottom-0 w-[1px] bg-stone-800/40 hidden lg:block z-0 pointer-events-none" />
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-stone-800/20 z-0 pointer-events-none" />

            {/* Header Content */}
            <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pt-10 text-center flex flex-col items-center">
                <p className="text-xs font-medium text-accent flex items-center justify-center gap-4 uppercase tracking-wider mb-6">
                    <span className="w-8 h-[1px] bg-accent"></span> Premium Catalog
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-foreground mb-4 leading-none">
                    EXPLORE<span className="text-accent">.</span>
                </h1>
                <p className="text-stone-500 max-w-lg mx-auto text-sm md:text-base">
                    Interact with the wheel below to navigate our precision-engineered automotive product categories.
                </p>
            </div>

            {/* The Circular Nav Hero */}
            <div className="flex-1 w-full flex items-center justify-center relative z-20 mt-8 mb-16 md:mb-0 md:mt-16">
                <CategoryWheel />
            </div>

            {/* Background Aesthetic Flourishes */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-stone-950 to-transparent z-0 pointer-events-none" />
        </main>
    );
}
