"use client";

import { Microscope, FlaskConical, PackageCheck, FileCheck } from "lucide-react";

const steps = [
    {
        icon: <Microscope size={24} strokeWidth={1.5} />,
        title: "Incoming Inspection",
        desc: "Raw materials undergo spectroscopic analysis and hardness testing to verify composition and grade before entering production.",
    },
    {
        icon: <FlaskConical size={24} strokeWidth={1.5} />,
        title: "In-Process Control",
        desc: "CNC precision machining with real-time dimensional monitoring ensures tolerances within ±0.01mm at every manufacturing stage.",
    },
    {
        icon: <PackageCheck size={24} strokeWidth={1.5} />,
        title: "Metallurgical Testing",
        desc: "Microstructure analysis, tensile strength testing, and fatigue life assessment ensure long-term component reliability.",
    },
    {
        icon: <FileCheck size={24} strokeWidth={1.5} />,
        title: "Final Audit",
        desc: "100% visual inspection, packaging audit, and documentation review before shipment clearance.",
    },
];

export default function QualityPage() {
    return (
        <main>
            {/* Page Header */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-background">
                <div className="max-w-container mx-auto px-6 md:px-8">
                    <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-4">Quality</p>
                    <h1 className="text-h1 text-foreground max-w-2xl">
                        Quality Quad
                    </h1>
                    <p className="text-stone-500 mt-4 max-w-lg">
                        Our four-pillar quality framework ensures every component meets international standards.
                    </p>
                </div>
            </section>

            {/* Quality Steps */}
            <section className="py-24 md:py-32 bg-stone-900/40 backdrop-blur-md border-y border-stone-800 relative z-10">
                <div className="max-w-container mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className="bg-stone-800/50 rounded-xl p-8 md:p-10 hover:shadow-md hover:bg-stone-800 transition-all duration-300 border border-transparent hover:border-stone-700"
                            >
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="text-accent">{step.icon}</div>
                                    <span className="text-xs font-medium text-stone-400 uppercase tracking-wider">
                                        Step {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <h3 className="text-h3 text-foreground mb-3">{step.title}</h3>
                                <p className="text-sm text-stone-500 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
