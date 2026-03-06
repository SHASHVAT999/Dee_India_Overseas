"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RickshawIcon, MotorScooterIcon, SolidTyreIcon, MotorcycleIcon } from "@/components/icons/CustomIcons";

// The 4 fixed categories mapped to precise angles around the circle
// Top: 0 (Motorcycle), Right: 90 (Scooter), Bottom: 180 (Tyres), Left: 270 (Three Wheeler)
const wheelCategories = [
    {
        id: "motorcycle",
        title: "Motorcycle Parts",
        description: "Precision-engineered critical systems for high-performance two-wheelers.",
        href: "/products/motorcycle-parts",
        Icon: MotorcycleIcon,
        angle: 0,
    },
    {
        id: "scooter",
        title: "Scooter Parts",
        description: "Reliable and high-performance components suitable for a wide range of scooters.",
        href: "/products/scooter-parts",
        Icon: MotorScooterIcon,
        angle: 90,
    },
    {
        id: "tyres",
        title: "Inner Tubes & Tyres",
        description: "High-endurance rubber compounds for all-terrain global mobility.",
        href: "/products/inner-tubes-and-tyres",
        Icon: SolidTyreIcon,
        angle: 180,
    },
    {
        id: "three-wheeler",
        title: "Three Wheeler Parts",
        description: "Robust drivetrain and suspension components engineered for heavy-duty commercial utility.",
        href: "/products/three-wheeler-systems",
        Icon: RickshawIcon,
        angle: 270,
    },
];

export function CategoryWheel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Calculate dynamic rotation so the active node is always placed nicely, 
    // or just let them stay fixed and highlight them in place. 
    // Staying fixed in place but rotating slowly is a very premium feel.
    const [wheelRotation, setWheelRotation] = useState(0);

    // Auto-slow rotation logic (optional mature animation)
    useEffect(() => {
        if (!mounted) return;
        let animationFrameId: number;
        let lastTime = performance.now();

        const animate = (time: number) => {
            const delta = time - lastTime;
            lastTime = time;
            // Extremely slow rotation (e.g., 2 degrees per second)
            setWheelRotation((prev) => (prev + delta * 0.002) % 360);
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [mounted]);

    return (
        <div className="relative w-full max-w-[800px] aspect-square mx-auto flex items-center justify-center -mt-10 md:mt-0">
            {/* The Outer Ring */}
            <div className="absolute inset-10 md:inset-16 rounded-full border-[1px] border-stone-200/50" />
            <div className="absolute inset-[60px] md:inset-[85px] rounded-full border-[1px] border-stone-200/20 mix-blend-multiply" />

            {/* The Rotating Wheel Container */}
            <div
                className="absolute inset-0 transition-transform duration-1000 ease-linear"
                style={{ transform: `rotate(${wheelRotation}deg)` }}
            >
                {wheelCategories.map((node, index) => {
                    const isActive = index === activeIndex;
                    // Calculate position using standard math: x = r * cos(theta), y = r * sin(theta)
                    // Subtract 90 to make 0 deg start at Top instead of Right
                    const angleRad = (node.angle - 90) * (Math.PI / 180);
                    // Radius acts as a percentage (50% is edge)
                    const radius = 42;

                    const x = 50 + radius * Math.cos(angleRad);
                    const y = 50 + radius * Math.sin(angleRad);

                    return (
                        <div
                            key={node.id}
                            className="absolute z-20 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                            }}
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            {/* Counter-rotate the child element so the icon stays upright regardless of the wheel's rotation */}
                            <div
                                className={cn(
                                    "relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                                    isActive ? "scale-110" : "scale-100 hover:scale-105 opacity-60 hover:opacity-100"
                                )}
                                style={{ transform: `rotate(${-wheelRotation}deg)` }}
                            >
                                {/* Glow backdrop for active state */}
                                <div className={cn(
                                    "absolute inset-0 rounded-full bg-accent blur-2xl transition-opacity duration-700 pointer-events-none",
                                    isActive ? "opacity-10" : "opacity-0 group-hover:opacity-5"
                                )} />

                                <node.Icon
                                    strokeWidth={isActive ? 1.5 : 1}
                                    className={cn(
                                        "w-[80%] h-[80%] transition-colors duration-500",
                                        isActive ? "text-accent" : "text-stone-400 group-hover:text-stone-900"
                                    )}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* The Static Center Info Hub */}
            <div className="absolute z-30 w-[60%] h-[60%] rounded-full bg-white/60 backdrop-blur-2xl border border-stone-200/50 shadow-[0_32px_64px_rgba(0,0,0,0.05)] flex items-center justify-center text-center p-8 overflow-hidden pointer-events-auto">
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
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-4 leading-none max-w-[80%]">
                                    {node.title}
                                </h2>
                                <p className="text-sm md:text-base text-stone-500 max-w-[70%] mb-8 line-clamp-3">
                                    {node.description}
                                </p>

                                <Link
                                    href={node.href}
                                    className="group/btn flex items-center gap-3 bg-stone-900 hover:bg-accent text-white px-6 py-3 rounded-full transition-colors duration-300"
                                >
                                    <span className="text-xs font-bold tracking-widest uppercase">Explore</span>
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
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
