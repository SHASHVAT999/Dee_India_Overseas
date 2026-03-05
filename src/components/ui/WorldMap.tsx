"use client";

import dotsData from "@/data/map-dots.json";

interface WorldMapProps {
    className?: string;
}

export function WorldMap({ className = "" }: WorldMapProps) {
    return (
        <div className={`relative w-full aspect-[2/1] max-w-[800px] mx-auto flex items-center justify-center ${className}`}>

            {/* Soft backdrop glow to ground the dotted map */}
            <div className="absolute inset-0 bg-stone-100/30 rounded-[100%] blur-3xl mix-blend-multiply pointer-events-none" />

            <svg
                viewBox="0 0 800 400"
                className="w-full h-full relative z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {dotsData.map((dot, i) => (
                    <rect
                        key={`dot-${i}`}
                        x={dot[0]}
                        y={dot[1]}
                        width={4}
                        height={4}
                        rx={1.5}
                        fill="#78716c" // stone-500 for a noticeably darker grey
                        className="opacity-60 transition-opacity hover:opacity-100 duration-300"
                    />
                ))}
            </svg>
        </div>
    );
}
