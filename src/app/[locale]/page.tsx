"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { RickshawIcon, MotorScooterIcon, SolidTyreIcon, MotorcycleIcon } from "@/components/icons/CustomIcons";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { GlobalReachSection } from "@/components/sections/GlobalReachSection";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
    { value: "40+", label: "Years Experience" },
    { value: "50+", label: "Export Markets" },
    { value: "1000+", label: "SKUs" },
];

const categories = [
    { title: "Motorcycle Parts", href: "/products/motorcycle-parts", Icon: MotorcycleIcon },
    { title: "Three Wheeler Parts", href: "/products/three-wheeler-parts", Icon: RickshawIcon },
    { title: "Scooter Parts", href: "/products/scooter-parts", Icon: MotorScooterIcon },
    { title: "Tyres", href: "/products/tyres", Icon: SolidTyreIcon },
];

export default function HomePage() {
    return (
        <main className="bg-background selection:bg-stone-900 selection:text-white">

            {/* HERO: Structural Typography */}
            <section className="min-h-[90vh] flex flex-col justify-end pt-32 pb-16 px-6 md:px-12 relative overflow-hidden">
                {/* Abstract technical lines (Blueprint style) */}
                <div className="absolute top-0 left-[10%] bottom-0 w-[1px] bg-stone-200/40 hidden lg:block z-0" />
                <div className="absolute top-0 left-[40%] bottom-0 w-[1px] bg-stone-200/40 hidden lg:block z-0" />

                <div className="relative z-10 w-full max-w-[1600px] mx-auto">
                    {/* Top small label */}
                    <div className="flex items-center gap-6 mb-16 md:mb-24">
                        <div className="w-12 h-[1px] bg-accent" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium">B2B Automotive Exports</span>
                    </div>

                    {/* Massive Typography */}
                    <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] xl:text-[11rem] leading-[0.85] tracking-tighter font-bold text-foreground text-balance">
                        PRECISION<br />
                        <span className="text-stone-300">ENGINEERED<span className="text-accent">.</span></span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-12 mt-12 md:mt-24 gap-12 border-t border-stone-200 pt-8">
                        <div className="md:col-span-4 lg:col-span-5">
                            <p className="text-sm text-stone-500 leading-relaxed font-medium uppercase tracking-widest max-w-[300px]">
                                Established in 1985 in Rajkot, India. Dedicated to manufacturing OEM-grade components.
                            </p>
                        </div>
                        <div className="md:col-span-8 lg:col-span-7 flex flex-col sm:flex-row gap-6 md:items-center md:justify-end">
                            <Link href="/products" className="group inline-flex items-center justify-between gap-8 px-8 py-5 bg-stone-900 text-white hover:bg-stone-800 transition-colors">
                                <span className="text-xs uppercase tracking-[0.15em] font-semibold">View Capabilities</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/contact" className="group inline-flex items-center justify-between gap-8 px-8 py-5 border border-stone-200 text-stone-900 hover:bg-stone-50 transition-colors bg-white">
                                <span className="text-xs uppercase tracking-[0.15em] font-semibold">Contact Us</span>
                                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPLIT SCREEN ABOUT */}
            <section className="border-t border-stone-200 bg-surface-alt bg-noise">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Sticky Left: Title */}
                        <div className="py-24 lg:py-48 lg:border-r border-stone-200 lg:pr-24 relative">
                            <div className="lg:sticky lg:top-48">
                                <h2 className="text-[3rem] sm:text-[4.5rem] leading-[0.9] tracking-tighter font-bold text-foreground">
                                    FOUR<br />
                                    DECADES<br />
                                    OF<br />
                                    EXCELLENCE<span className="text-accent">.</span>
                                </h2>
                            </div>
                        </div>

                        {/* Scrolling Right: Content */}
                        <div className="py-12 lg:py-48 lg:pl-24">
                            <h3 className="text-xl md:text-3xl font-medium text-foreground leading-snug mb-12 max-w-xl">
                                Dee India Overseas laid its foundation stone with sheer determination and excellence-driven passion, focusing solely on strict tolerance automotive parts.
                            </h3>

                            <p className="text-stone-500 leading-relaxed max-w-xl mb-16 text-lg">
                                Located in Rajkot, Gujarat — the heart of India&apos;s engineering belt — we have built an unyielding reputation for producing high-tolerance components that consistently meet international OEM standards.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-stone-200 pt-16">
                                {stats.map((stat, i) => (
                                    <div key={i}>
                                        <p className="text-[3rem] leading-none tracking-tighter font-semibold text-foreground mb-4 flex items-center">
                                            <AnimatedCounter value={parseInt(stat.value, 10)} />
                                            <span className="text-accent">+</span>
                                        </p>
                                        <p className="text-[10px] uppercase font-semibold tracking-widest text-stone-400">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            <Link href="/about" className="inline-flex mt-20 items-center gap-4 text-xs font-bold uppercase tracking-[0.15em] text-accent hover:text-stone-900 transition-colors group">
                                Read our full history <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* STRUCTURAL CAPABILITIES LIST (Replaces Bento Grid) */}
            <section className="bg-background border-t border-stone-200 py-24 md:py-40 relative">
                {/* Blueprint line */}
                <div className="absolute top-0 left-[10%] bottom-0 w-[1px] bg-stone-200/40 hidden lg:block z-0 pointer-events-none" />

                <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                        <div>
                            <div className="w-12 h-[1px] bg-accent mb-8" />
                            <h2 className="text-[3rem] sm:text-[5rem] tracking-tighter font-bold leading-none">CAPABILITIES<span className="text-accent">.</span></h2>
                        </div>
                        <p className="text-stone-500 max-w-sm text-lg -mb-2">
                            We supply precision components for high-performance applications across multiple vehicle segments globally.
                        </p>
                    </div>

                    <div className="border-t border-stone-200">
                        {categories.map((cat, i) => (
                            <Link
                                href={cat.href}
                                key={cat.title}
                                className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-stone-200 hover:bg-stone-50 transition-colors px-6 -mx-6 md:px-12 md:-mx-12 cursor-pointer overflow-hidden"
                            >
                                {/* Abstract Line Drawing Background */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-all duration-700 pointer-events-none z-0">
                                    <cat.Icon strokeWidth={0.5} className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] text-stone-900 translate-x-[20%] group-hover:translate-x-[15%] scale-x-[-1] transition-transform duration-700" />
                                </div>

                                <div className="relative z-10 flex items-center gap-6 md:gap-16 mb-6 md:mb-0">
                                    <span className="text-xs md:text-sm font-bold text-accent w-8 tracking-widest hidden md:block">0{i + 1}</span>
                                    <h3 className="text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-bold tracking-tighter text-foreground group-hover:text-accent transition-colors leading-none">
                                        {cat.title}
                                    </h3>
                                </div>
                                <div className="relative z-10 flex items-center gap-6 mt-4 md:mt-0">
                                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-stone-400 group-hover:text-stone-900 transition-colors">Explore</span>
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-stone-200 flex items-center justify-center bg-white group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <ValuesSection />

            {/* Global Reach */}
            <GlobalReachSection />

            {/* CTA */}
            <CTASection />
        </main>
    );
}
