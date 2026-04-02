"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RickshawIcon, MotorScooterIcon, EngineValveIcon, MotorcycleIcon } from "@/components/icons/CustomIcons";

const wheelCategories = [
    {
        id: "motorcycle",
        title: "Motorcycle Parts",
        description: "Precision-engineered critical systems for high-performance two-wheelers.",
        href: "/products/motorcycle-parts",
        Icon: MotorcycleIcon,
        clipPath: "polygon(0 0, 100% 0, 50% 50%)",
        iconPosition: "left-[50%] top-[16%] -translate-x-1/2 -translate-y-1/2",
    },
    {
        id: "scooter",
        title: "Scooter Parts",
        description: "Reliable and high-performance components suitable for a wide range of scooters.",
        href: "/products/scooter-parts",
        Icon: MotorScooterIcon,
        clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
        iconPosition: "left-[88%] top-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
        id: "engine-valves",
        title: "Engine Valves",
        description: "Precision-ground poppet valves and valve train components engineered for optimal combustion.",
        href: "/products/engine-valves",
        Icon: EngineValveIcon,
        clipPath: "polygon(100% 100%, 0 100%, 50% 50%)",
        iconPosition: "left-1/2 top-[88%] -translate-x-1/2 -translate-y-1/2",
    },
    {
        id: "three-wheeler",
        title: "Three Wheeler Parts",
        description: "Robust drivetrain and suspension components engineered for heavy-duty commercial utility.",
        href: "/products/three-wheeler-parts",
        Icon: RickshawIcon,
        clipPath: "polygon(0 100%, 0 0, 50% 50%)",
        iconPosition: "left-[12%] top-1/2 -translate-x-1/2 -translate-y-1/2",
    },
];

export function CategoryWheel() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative w-full max-w-[800px] aspect-square mx-auto rounded-full overflow-hidden border border-stone-800/50 shadow-sm bg-stone-900 md:mt-0 -mt-10">
            {/* The 4 Slices */}
            {wheelCategories.map((node, index) => {
                const isActive = index === activeIndex;

                return (
                    <div
                        key={node.id}
                        className={cn(
                            "absolute inset-0 transition-all duration-500 cursor-pointer group/slice",
                            isActive ? "bg-accent" : "bg-stone-900 hover:bg-accent/90"
                        )}
                        style={{ clipPath: node.clipPath }}
                        onMouseEnter={() => setActiveIndex(index)}
                    >
                        <div
                            className={cn(
                                "absolute flex flex-col items-center justify-center w-32 h-32 md:w-48 md:h-48 transition-all duration-500",
                                node.iconPosition,
                                isActive ? "opacity-100 scale-110" : "opacity-100 group-hover/slice:opacity-100 scale-100 group-hover/slice:scale-105"
                            )}
                        >
                            <node.Icon
                                strokeWidth={1}
                                className={cn(
                                    "w-[70%] h-[70%] transition-colors duration-500 scale-x-[-1]",
                                    isActive ? "text-white" : "text-accent group-hover/slice:text-white"
                                )}
                            />
                        </div>
                    </div>
                );
            })}

            {/* Dividers (X shape to match the pie slices) */}
            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[150%] rotate-45 bg-stone-800 pointer-events-none" />
            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[150%] -rotate-45 bg-stone-800 pointer-events-none" />

            {/* The Static Center Info Hub */}
            <div className="absolute z-30 w-[50%] h-[50%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-800/50 shadow-[0_32px_64px_rgba(0,0,0,0.05)] bg-stone-900/80 backdrop-blur-xl flex items-center justify-center text-center p-8 overflow-hidden pointer-events-auto transition-colors duration-500">
                {/* Dynamic Content crossfade container */}
                <div className="relative w-full h-full flex items-center justify-center">
                    {wheelCategories.map((node, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={node.id}
                                className={cn(
                                    "absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                                    isActive ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
                                )}
                            >
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent mb-4">
                                    0{index + 1}
                                </span>
                                <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-foreground mb-4 leading-none max-w-[80%]">
                                    {node.title}
                                </h2>
                                <p className="text-sm md:text-sm text-stone-500 max-w-[80%] mb-8 line-clamp-3">
                                    {node.description}
                                </p>

                                <Link
                                    href={node.href}
                                    className="group/btn flex items-center gap-3 bg-stone-800/80 border border-stone-700/60 hover:bg-accent hover:border-accent text-white px-6 py-2.5 rounded-full transition-all duration-300 transform scale-90 md:scale-100 shadow-lg"
                                >
                                    <span className="text-xs font-bold tracking-widest uppercase ml-1">Explore</span>
                                    <div className="w-6 h-6 rounded-full bg-stone-700 group-hover/btn:bg-white/20 flex items-center justify-center transition-colors">
                                        <ArrowUpRight size={12} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
