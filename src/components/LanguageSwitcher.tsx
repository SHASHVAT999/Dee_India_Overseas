"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition, useState, useEffect, useRef } from "react";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
    const [isPending, startTransition] = useTransition();
    const [isOpen, setIsOpen] = useState(false);
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const ref = useRef<HTMLDivElement>(null);

    const changeLocale = (nextLocale: string) => {
        setIsOpen(false);
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    // Close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                disabled={isPending}
                className="flex items-center gap-1.5 text-stone-400 hover:text-stone-600 transition-colors duration-200 focus:outline-none"
            >
                <Globe size={15} />
                <span className="text-xs font-medium uppercase tracking-wider">
                    {locale}
                </span>
            </button>

            <div
                className={`absolute right-0 mt-2 w-32 bg-white border border-stone-100 shadow-lg rounded-lg overflow-hidden z-50 transition-all duration-200 ${isOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
            >
                {["en", "es", "zh"].map((lang) => (
                    <button
                        key={lang}
                        onClick={() => changeLocale(lang)}
                        className={`w-full px-4 py-2.5 text-sm text-left transition-colors duration-150 ${locale === lang
                                ? "bg-stone-50 text-foreground font-medium"
                                : "text-stone-500 hover:bg-stone-50 hover:text-foreground"
                            }`}
                    >
                        {lang === "en" ? "English" : lang === "es" ? "Español" : "中文"}
                    </button>
                ))}
            </div>
        </div>
    );
};
