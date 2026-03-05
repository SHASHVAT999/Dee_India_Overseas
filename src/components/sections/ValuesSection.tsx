"use client";

import { ShieldCheck, Lightbulb, Globe2 } from "lucide-react";

export function ValuesSection() {
    const values = [
        {
            icon: <ShieldCheck size={24} strokeWidth={1.5} />,
            title: "Quality Assurance",
            desc: "Every component undergoes 100% automated optical inspection and metallurgical stress testing before clearance.",
        },
        {
            icon: <Lightbulb size={24} strokeWidth={1.5} />,
            title: "Material Innovation",
            desc: "Pioneering lightweight alloys and advanced composites to reduce mass while exponentially increasing tensile strength.",
        },
        {
            icon: <Globe2 size={24} strokeWidth={1.5} />,
            title: "Global Standards",
            desc: "Homologated for international markets, exceeding TUV, DOT, and specialized OEM manufacturing requirements.",
        },
    ];

    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="max-w-container mx-auto px-6 md:px-8">
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-12 h-[1px] bg-accent" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium">Core Principles</span>
                </div>
                <h2 className="text-[3rem] sm:text-[4.5rem] leading-[0.9] tracking-tighter font-bold text-foreground mb-4">
                    ENGINEERING<br />INTEGRITY<span className="text-accent">.</span>
                </h2>
                <p className="text-stone-500 mb-16 max-w-lg">
                    The principles that drive everything we manufacture.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {values.map((v, i) => (
                        <div key={i}>
                            <div className="text-accent mb-5">
                                {v.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold tracking-tighter text-foreground mb-3">
                                {v.title}<span className="text-accent">.</span>
                            </h3>
                            <p className="text-sm text-stone-500 leading-relaxed">
                                {v.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
