"use client";

import { Link } from "@/i18n/routing";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const pages = [
        { name: "About", href: "/about" },
        { name: "Quality", href: "/quality" },
        { name: "Products", href: "/products" },
        { name: "Contact", href: "/contact" },
    ];

    const products = [
        { name: "Motorcycle Parts", href: "/products/motorcycle-parts" },
        { name: "Three Wheeler Parts", href: "/products/three-wheeler-parts" },
        { name: "Scooter Parts", href: "/products/scooter-parts" },
        { name: "Engine Valves", href: "/products/engine-valves" },
    ];

    return (
        <footer className="bg-stone-900 border-t border-stone-800">
            <div className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <h3 className="text-base font-semibold text-foreground tracking-tight mb-4">
                            DEE INDIA<span className="text-stone-400 font-normal ml-1">Overseas</span>
                        </h3>
                        <p className="text-sm text-stone-500 leading-relaxed">
                            Manufacturer and exporter of precision automobile spare parts, serving global markets since 1985.
                        </p>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {pages.map((page) => (
                                <li key={page.href}>
                                    <Link
                                        href={page.href}
                                        className="text-sm text-stone-500 hover:text-foreground transition-colors duration-200"
                                    >
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-4">
                            Products
                        </h4>
                        <ul className="space-y-3">
                            {products.map((product) => (
                                <li key={product.href}>
                                    <Link
                                        href={product.href}
                                        className="text-sm text-stone-500 hover:text-foreground transition-colors duration-200"
                                    >
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-sm text-stone-500">
                                <MapPin size={16} className="shrink-0 mt-0.5 text-stone-400" />
                                <span>Bhaktinagar Station Road – 2/22, Rajkot, Gujarat, India</span>
                            </li>
                            <li>
                                <a
                                    href="tel:+919825075874"
                                    className="flex items-center gap-3 text-sm text-stone-500 hover:text-foreground transition-colors"
                                >
                                    <Phone size={16} className="shrink-0 text-stone-400" />
                                    +91 98250 75874
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@deeindia.com"
                                    className="flex items-center gap-3 text-sm text-stone-500 hover:text-foreground transition-colors"
                                >
                                    <Mail size={16} className="shrink-0 text-stone-400" />
                                    info@deeindia.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-stone-800">
                <div className="max-w-container mx-auto px-6 md:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-stone-400">
                        © {currentYear} Dee India Overseas. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-xs text-stone-400 hover:text-stone-600 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-xs text-stone-400 hover:text-stone-600 transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
