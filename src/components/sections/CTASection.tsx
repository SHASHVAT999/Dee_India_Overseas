"use client";

import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 md:py-32 bg-stone-900">
            <div className="max-w-container mx-auto px-6 md:px-8 text-center">
                <h2 className="text-h2 text-white mb-4">
                    Ready to Partner?
                </h2>
                <p className="text-stone-400 max-w-md mx-auto mb-10">
                    Get a customized quote for your automobile spare parts requirements. Our team is ready to assist.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link href="/contact">
                        <Button size="lg" className="bg-white text-stone-900 hover:bg-stone-100">
                            Request a Quote <ArrowRight className="ml-2" size={16} />
                        </Button>
                    </Link>
                    <a
                        href="mailto:info@deeindia.com"
                        className="text-stone-500 hover:text-stone-300 transition-colors text-sm"
                    >
                        or email info@deeindia.com
                    </a>
                </div>
            </div>
        </section>
    );
}
