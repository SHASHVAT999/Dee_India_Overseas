"use client";

import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/919825075874"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-20 right-6 z-40 w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:bg-emerald-600 hover:shadow-xl transition-all duration-200"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={22} />
        </a>
    );
}
