"use client";

import { ShieldCheck, Lightbulb, Globe2, Award } from "lucide-react";

const values = [
    { icon: <ShieldCheck size={22} strokeWidth={1.5} />, title: "Quality First", desc: "Rigorous testing at every stage of production." },
    { icon: <Lightbulb size={22} strokeWidth={1.5} />, title: "Innovation", desc: "Investing in advanced manufacturing technology." },
    { icon: <Globe2 size={22} strokeWidth={1.5} />, title: "Global Reach", desc: "Distributing to 50+ countries across 6 continents." },
    { icon: <Award size={22} strokeWidth={1.5} />, title: "Trust", desc: "40+ years of consistent, reliable partnerships." },
];

export default function AboutPage() {
    return (
        <main>
            {/* Page Header */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-background">
                <div className="max-w-container mx-auto px-6 md:px-8">
                    <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-4">About Us</p>
                    <h1 className="text-h1 text-foreground max-w-2xl">
                        Four Decades of Manufacturing Excellence
                    </h1>
                </div>
            </section>

            {/* Story */}
            <section className="py-24 md:py-32 bg-stone-900/40 backdrop-blur-md border-y border-stone-800 relative z-10">
                <div className="max-w-container mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-h2 text-foreground mb-6">Our Story</h2>
                            <p className="text-stone-500 leading-relaxed mb-4">
                                Dee India Overseas laid its foundation stone with the sheer determination and excellence-driven passion by focusing in Automobile Parts Manufacturing and Export having transcontinental business presence.
                            </p>
                            <p className="text-stone-500 leading-relaxed mb-4">
                                Located in Rajkot, Gujarat — the heart of India&apos;s engineering and manufacturing belt — we have built a reputation for producing high-tolerance automotive components that meet international standards.
                            </p>
                            <p className="text-stone-500 leading-relaxed">
                                Our product range spans engine valves, clutch assemblies, brake systems, inner tubes, and suspension components for motorcycles, three-wheelers, and commercial vehicles, serving OEMs and aftermarket distributors across the globe.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-800">
                            <div className="absolute inset-0 flex items-center justify-center text-stone-300">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-stone-700 mx-auto mb-3" />
                                    <p className="text-sm">Factory Image</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 md:py-32 relative z-10">
                <div className="max-w-container mx-auto px-6 md:px-8">
                    <h2 className="text-h2 text-foreground mb-4">What Drives Us</h2>
                    <p className="text-stone-500 mb-16 max-w-lg">
                        The core principles behind every component we manufacture.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {values.map((v, i) => (
                            <div key={i}>
                                <div className="text-accent mb-4">{v.icon}</div>
                                <h3 className="text-sm font-semibold text-foreground mb-2">{v.title}</h3>
                                <p className="text-sm text-stone-500 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className="py-24 md:py-32 bg-stone-900/40 backdrop-blur-md border-y border-stone-800 relative z-10">
                <div className="max-w-container mx-auto px-6 md:px-8 max-w-3xl text-center">
                    <h2 className="text-h2 text-foreground mb-6">Our Vision</h2>
                    <p className="text-lg text-stone-500 leading-relaxed">
                        To be the most trusted global supplier of automotive spare parts — known for uncompromising quality, material innovation, and manufacturing precision that exceeds international benchmarks.
                    </p>
                </div>
            </section>
        </main>
    );
}
