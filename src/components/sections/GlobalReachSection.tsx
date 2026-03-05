"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { WorldMap } from "@/components/ui/WorldMap";

export function GlobalReachSection() {
    const regions = [
        { name: "Asia Pacific", countries: "15+ countries", share: "35%" },
        { name: "Middle East & Africa", countries: "12+ countries", share: "25%" },
        { name: "Europe", countries: "10+ countries", share: "20%" },
        { name: "Americas", countries: "8+ countries", share: "15%" },
        { name: "Oceania", countries: "3+ countries", share: "5%" },
    ];

    return (
        <section className="py-24 md:py-32 bg-surface-alt border-y border-stone-200">
            <div className="max-w-container mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-center">
                    {/* Left Column Text & Counters */}
                    <div>
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-12 h-[1px] bg-accent" />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium">Global Network</span>
                        </div>
                        <h2 className="text-[3rem] sm:text-[4.5rem] leading-[0.9] tracking-tighter font-bold text-foreground mb-6">
                            SERVING <AnimatedCounter value={50} className="inline-block" />+<br />COUNTRIES<span className="text-accent">.</span>
                        </h2>
                        <p className="text-stone-500 leading-relaxed mb-8 max-w-md">
                            From our manufacturing hub in Rajkot, Gujarat, we ship precision components to automotive markets across every major continent — maintaining consistent quality and timely delivery.
                        </p>
                        <div className="flex flex-wrap items-center gap-8 md:gap-12 mt-12">
                            <div>
                                <p className="text-[3rem] leading-none tracking-tighter font-bold text-foreground">
                                    <AnimatedCounter value={50} />
                                    <span className="text-accent">+</span>
                                </p>
                                <p className="text-[10px] uppercase font-semibold tracking-widest text-stone-400 mt-2">Countries</p>
                            </div>
                            <div className="w-px h-16 bg-stone-200 hidden sm:block" />
                            <div>
                                <p className="text-[3rem] leading-none tracking-tighter font-bold text-foreground">
                                    <AnimatedCounter value={6} />
                                    <span className="text-accent">.</span>
                                </p>
                                <p className="text-[10px] uppercase font-semibold tracking-widest text-stone-400 mt-2">Continents</p>
                            </div>
                            <div className="w-px h-16 bg-stone-200 hidden sm:block" />
                            <div>
                                <p className="text-[3rem] leading-none tracking-tighter font-bold text-foreground">
                                    <AnimatedCounter value={500} />
                                    <span className="text-accent">+</span>
                                </p>
                                <p className="text-[10px] uppercase font-semibold tracking-widest text-stone-400 mt-2">Clients</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Map & Legend */}
                    <div className="flex flex-col relative pt-8 lg:pt-0">
                        {/* World Map Visualization */}
                        <div className="flex-grow flex items-center justify-center p-8 bg-zinc-100/50 rounded-3xl border border-stone-200/60 mb-8 self-center w-full shadow-inner">
                            <WorldMap />
                        </div>

                        {/* Minimal Region Legend */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
                            {regions.map((region, i) => (
                                <div key={i} className="flex flex-col">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-80" />
                                        <p className="text-xs font-bold text-foreground">{region.name}</p>
                                    </div>
                                    <p className="text-[10px] uppercase tracking-widest text-stone-400 pl-3.5">{region.countries}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
