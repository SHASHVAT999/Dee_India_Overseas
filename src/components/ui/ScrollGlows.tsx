"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollGlows — Two large blurred orbs (red + orange) that drift
 * with scroll parallax, giving each section zone a unique ambient glow.
 * Renders behind all page content at z-0.
 */
export function ScrollGlows() {
    const { scrollYProgress } = useScroll();

    // Red orb: drifts from top-left → center-right → bottom-left
    const redY = useTransform(scrollYProgress, [0, 0.5, 1], ["-15%", "40%", "85%"]);
    const redX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["-8%", "5%", "-12%", "2%"]);

    // Orange orb: drifts from bottom-right → center-left → top-right  
    const orangeY = useTransform(scrollYProgress, [0, 0.5, 1], ["65%", "20%", "-10%"]);
    const orangeX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["75%", "55%", "80%", "60%"]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Red orb */}
            <motion.div
                className="absolute w-[60vmax] h-[60vmax] bg-red-600/10 rounded-full blur-[160px]"
                style={{
                    top: redY,
                    left: redX,
                }}
            />

            {/* Orange / amber orb */}
            <motion.div
                className="absolute w-[50vmax] h-[50vmax] bg-amber-500/[0.08] rounded-full blur-[140px]"
                style={{
                    top: orangeY,
                    left: orangeX,
                }}
            />
        </div>
    );
}
