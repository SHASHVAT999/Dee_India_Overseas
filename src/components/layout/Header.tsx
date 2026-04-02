"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const productCategories = [
    { name: "Motorcycle Parts", href: "/products/motorcycle-parts" },
    { name: "Three Wheeler Parts", href: "/products/three-wheeler-parts" },
    { name: "Scooter Parts", href: "/products/scooter-parts" },
    { name: "Engine Valves", href: "/products/engine-valves" },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [productsHover, setProductsHover] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    const navLinkClass = (path: string) =>
        `text-[11px] uppercase tracking-widest font-medium transition-colors mix-blend-multiply ${
            isActive(path) ? "text-foreground" : "text-stone-500 hover:text-foreground"
        }`;

    const floatingNavLinkClass = (path: string) =>
        `px-5 py-2 hover:bg-stone-800 text-[13px] tracking-wide font-medium rounded-full transition-colors ${
            isActive(path) ? "text-foreground bg-stone-800/50" : "text-stone-500 hover:text-foreground"
        }`;

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <>
            {/* Desktop: Base Transparent Structural Header (Fades out on scroll) */}
            <header className={`fixed top-0 left-0 right-0 z-40 transition-opacity duration-700 hidden md:block pt-8 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <div className="max-w-container mx-auto px-6 md:px-8">
                    <div className="flex items-start justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex flex-col shrink-0">
                            <span className="text-xl font-bold tracking-tighter text-foreground uppercase leading-none">
                                DEE INDIA
                            </span>
                            <span className="text-[10px] text-stone-400 font-medium tracking-widest uppercase mt-1">
                                Overseas
                            </span>
                        </Link>

                        {/* Structural Typographic Nav */}
                        <nav className="flex items-center gap-8">
                            <Link href="/about" className={navLinkClass("/about")}>
                                About
                            </Link>
                            <Link href="/quality" className={navLinkClass("/quality")}>
                                Quality
                            </Link>
                            <div className="relative" onMouseEnter={() => setProductsHover(true)} onMouseLeave={() => setProductsHover(false)}>
                                <Link href="/products" className={`${navLinkClass("/products")} pb-4`}>
                                    Products
                                </Link>

                                {/* Abstract Minimal Dropdown */}
                                <div className={`absolute top-full right-0 pt-4 w-48 transition-all duration-300 ${productsHover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}>
                                    <div className="bg-stone-900/90 backdrop-blur-xl border border-stone-700/50 p-4 flex flex-col gap-3">
                                        {productCategories.map(cat => (
                                            <Link key={cat.href} href={cat.href} className="text-[11px] uppercase tracking-widest text-stone-500 hover:text-foreground transition-colors">
                                                {cat.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <Link href="/contact" className={navLinkClass("/contact")}>
                                Contact
                            </Link>
                            <LanguageSwitcher />
                        </nav>
                    </div>
                </div>
            </header>

            {/* Desktop: Floating Pill Dock (Fades in on scroll) */}
            <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hidden md:flex ${scrolled ? "translate-y-0 opacity-100 scale-100" : "-translate-y-12 opacity-0 scale-95 pointer-events-none"}`}>
                <nav className="flex items-center gap-2 px-2 py-2 bg-stone-900/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-stone-700/60 rounded-full">
                    <Link href="/" className={floatingNavLinkClass("/")}>
                        Home
                    </Link>
                    <Link href="/about" className={floatingNavLinkClass("/about")}>
                        About
                    </Link>
                    <Link href="/products" className={floatingNavLinkClass("/products")}>
                        Products
                    </Link>
                    <Link href="/quality" className={floatingNavLinkClass("/quality")}>
                        Quality
                    </Link>
                </nav>
            </div>

            {/* Mobile Header (Always visible at top, simple) */}
            <header className="fixed top-0 left-0 right-0 z-50 md:hidden bg-stone-900/80 backdrop-blur-md border-b border-stone-700/50">
                <div className="px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex flex-col shrink-0">
                        <span className="text-lg font-bold tracking-tighter text-foreground uppercase leading-none">
                            DEE INDIA
                        </span>
                    </Link>
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 -mr-2 text-stone-600">
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-stone-900 md:hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="pt-24 px-6 h-full flex flex-col">
                    <nav className="flex flex-col gap-8 text-2xl font-light tracking-tight text-foreground">
                        <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
                        <Link href="/quality" onClick={() => setMobileOpen(false)}>Quality</Link>
                        <Link href="/products" onClick={() => setMobileOpen(false)}>Products</Link>
                        <div className="pl-6 flex flex-col gap-4 text-lg text-stone-500 border-l border-stone-700">
                            {productCategories.map(cat => (
                                <Link key={cat.href} href={cat.href} onClick={() => setMobileOpen(false)}>
                                    {cat.name}
                                </Link>
                            ))}
                        </div>
                        <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
                    </nav>
                    <div className="mt-auto pb-12">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </>
    );
}
