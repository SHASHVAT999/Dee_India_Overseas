"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { RickshawIcon, MotorScooterIcon, EngineValveIcon, MotorcycleIcon, TruckIcon } from "@/components/icons/CustomIcons";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { motion } from "framer-motion";
import { GlobalReachSection } from "@/components/sections/GlobalReachSection";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CADMotorcycleGraphic, CADScooterGraphic, CADRickshawGraphic, CADTruckGraphic } from "@/components/ui/CADVehicleGraphics";
import { cn } from "@/lib/utils";

const stats = [
    { value: "40+", label: "Years Experience" },
    { value: "50+", label: "Export Markets" },
    { value: "1000+", label: "SKUs" },
];

const categories = [
    { title: "Motorcycle Parts", href: "/products/motorcycle-parts", Icon: MotorcycleIcon, bgIconClass: "w-[250px] h-[250px] md:w-[400px] md:h-[400px]" },
    { title: "Three Wheeler Parts", href: "/products/three-wheeler-parts", Icon: RickshawIcon },
    { title: "Scooter Parts", href: "/products/scooter-parts", Icon: MotorScooterIcon, bgIconClass: "w-[220px] h-[220px] md:w-[380px] md:h-[380px]" },
    { title: "Engine Valves", href: "/products/engine-valves", Icon: EngineValveIcon, bgIconClass: "w-[180px] h-[180px] md:w-[300px] md:h-[300px]", bgStrokeWidth: 0.8 },
];

export default function HomePage() {
    return (
        <main>
            {/* HERO */}
            <section className="h-screen min-h-[680px] flex flex-col items-center justify-center pt-32 pb-16 relative overflow-hidden">
                
                {/* Deep Edge Vignette */}
                <div className="absolute inset-0 z-[2] pointer-events-none shadow-[inset_0_0_180px_rgba(0,0,0,0.7)]" />



                {/* Main Responsive Flex Container */}
                <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 md:px-8 xl:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
                    
                    {/* LEFT FLANK: Scooter & Tuk Tuk */}
                    <div className="hidden lg:flex flex-col items-end justify-center gap-12 xl:gap-20 relative z-10 w-[25%] lg:w-[28%] xl:w-[25%] pr-4 md:pr-8">
                        <motion.div 
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
                            transition={{ opacity: { duration: 1, delay: 0.4 }, x: { duration: 1.2, delay: 0.4, ease: "easeOut" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                            className="w-[95%]"
                        >
                            <CADScooterGraphic className="w-full h-auto scale-x-[-1]" />
                        </motion.div>

                        <motion.div 
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, y: [0, -8, 0] }}
                            transition={{ opacity: { duration: 1, delay: 0.6 }, x: { duration: 1.2, delay: 0.6, ease: "easeOut" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                            className="w-[105%]"
                        >
                            <CADRickshawGraphic className="w-full h-auto scale-x-[-1]" />
                        </motion.div>
                    </div>

                    {/* CENTRAL COLUMN: Typography */}
                    <div className="flex flex-col items-center text-center px-2 w-full lg:w-[44%] xl:w-[50%] relative z-20">
                        {/* Top Label */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="w-8 h-[2px] bg-accent" />
                            <span className="text-[10px] xl:text-[11px] uppercase tracking-[0.3em] font-bold text-stone-400 whitespace-nowrap">Precision Engineered</span>
                            <div className="w-8 h-[2px] bg-accent" />
                        </motion.div>

                        {/* Central Typography */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            className="text-[2.5rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[4vw] xl:text-[4.8vw] 2xl:text-[5.5vw] leading-[0.85] tracking-tight font-extrabold text-white text-balance"
                        >
                            WELCOME TO<br />
                            <span className="text-accent drop-shadow-sm">DEE INDIA</span><br />
                            OVERSEAS
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="mt-8 text-stone-400 font-medium uppercase tracking-[0.15em] text-xs md:text-sm max-w-[500px] text-balance"
                        >
                            Manufacturing OEM-Grade Components Since 1985
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="mt-10 flex flex-col sm:flex-row gap-6"
                        >
                            <Link href="/products" className="group inline-flex items-center justify-center gap-4 px-8 py-4 bg-accent text-white hover:bg-stone-800 transition-colors shadow-2xl shadow-red-900/10 rounded-sm">
                                <span className="text-xs uppercase tracking-[0.2em] font-bold">View Capabilities</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* RIGHT FLANK: Truck & Motorcycle */}
                    <div className="hidden lg:flex flex-col items-start justify-center gap-16 xl:gap-24 relative z-10 w-[25%] lg:w-[28%] xl:w-[25%] pl-4 md:pl-8">
                        <motion.div 
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
                            transition={{ opacity: { duration: 1, delay: 0.5 }, x: { duration: 1.2, delay: 0.5, ease: "easeOut" }, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                            className="w-[105%]"
                        >
                            <CADTruckGraphic className="w-full h-auto" />
                        </motion.div>

                        <motion.div 
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, y: [0, -15, 0] }}
                            transition={{ opacity: { duration: 1, delay: 0.7 }, x: { duration: 1.2, delay: 0.7, ease: "easeOut" }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 } }}
                            className="w-[95%]"
                        >
                            <CADMotorcycleGraphic className="w-full h-auto" />
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* ABOUT — DARK */}
            <section className="relative overflow-clip">


                <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Sticky Left: Title */}
                        <div className="py-24 lg:py-48 lg:border-r border-stone-700 lg:pr-24 relative">
                            <div className="lg:sticky lg:top-48">
                                <h2 className="text-[3rem] sm:text-[4.5rem] leading-[0.9] tracking-tighter font-bold text-white">
                                    FOUR<br />
                                    DECADES<br />
                                    OF<br />
                                    EXCELLENCE<span className="text-accent">.</span>
                                </h2>
                            </div>
                        </div>

                        {/* Scrolling Right: Content */}
                        <div className="py-12 lg:py-48 lg:pl-24">
                            <h3 className="text-xl md:text-3xl font-medium text-stone-200 leading-snug mb-12 max-w-xl">
                                Dee India Overseas laid its foundation stone with sheer determination and excellence-driven passion, focusing solely on strict tolerance automotive parts.
                            </h3>

                            <p className="text-stone-400 leading-relaxed max-w-xl mb-16 text-lg">
                                Located in Rajkot, Gujarat — the heart of India&apos;s engineering belt — we have built an unyielding reputation for producing high-tolerance components that consistently meet international OEM standards.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-stone-700 pt-16">
                                {stats.map((stat, i) => (
                                    <div key={i}>
                                        <p className="text-[3rem] leading-none tracking-tighter font-semibold text-white mb-4 flex items-center">
                                            <AnimatedCounter value={parseInt(stat.value, 10)} />
                                            <span className="text-accent">+</span>
                                        </p>
                                        <p className="text-[10px] uppercase font-semibold tracking-widest text-stone-500">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            <Link href="/about" className="inline-flex mt-20 items-center gap-4 text-xs font-bold uppercase tracking-[0.15em] text-accent hover:text-white transition-colors group">
                                Read our full history <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEPARATOR */}
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="w-full h-[2px] bg-stone-700/80" />
            </div>

            {/* STRUCTURAL CAPABILITIES LIST (Replaces Bento Grid) */}
            <section className="pt-24 md:pt-40 pb-0 relative">
                {/* Blueprint line */}
                <div className="absolute top-0 left-[10%] bottom-0 w-[1px] bg-stone-800/40 hidden lg:block z-0 pointer-events-none" />

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

                    <div className="border-t border-stone-800">
                        {categories.map((cat, i) => (
                            <Link
                                href={cat.href}
                                key={cat.title}
                                className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-stone-800 hover:bg-stone-800/50 transition-colors px-6 -mx-6 md:px-12 md:-mx-12 cursor-pointer overflow-hidden"
                            >
                                {/* Abstract Line Drawing Background */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-all duration-700 pointer-events-none z-0">
                                    <cat.Icon strokeWidth={("bgStrokeWidth" in cat ? cat.bgStrokeWidth as number : 0.5)} className={cn(
                                        "bgIconClass" in cat ? cat.bgIconClass as string : "w-[300px] h-[300px] md:w-[500px] md:h-[500px]",
                                        "text-white translate-x-[20%] group-hover:translate-x-[15%] scale-x-[-1] transition-transform duration-700"
                                    )} />
                                </div>

                                <div className="relative z-10 flex items-center gap-6 md:gap-16 mb-6 md:mb-0">
                                    <span className="text-xs md:text-sm font-bold text-accent w-8 tracking-widest hidden md:block">0{i + 1}</span>
                                    <h3 className="text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-bold tracking-tighter text-foreground group-hover:text-accent transition-colors leading-none">
                                        {cat.title}
                                    </h3>
                                </div>
                                <div className="relative z-10 flex items-center gap-6 mt-4 md:mt-0">
                                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-stone-500 group-hover:text-white transition-colors">Explore</span>
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-stone-700 flex items-center justify-center bg-stone-900 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-stone-400 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values — commented out for future use */}
            {/* <ValuesSection /> */}

            {/* Global Reach */}
            <GlobalReachSection />

            {/* SEPARATOR */}
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="w-full h-[2px] bg-stone-700/80" />
            </div>

            {/* CTA */}
            <CTASection />
        </main>
    );
}
