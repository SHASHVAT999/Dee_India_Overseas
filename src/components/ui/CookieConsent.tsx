"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 left-6 z-50 max-w-sm">
            <div className="glass-strong rounded-2xl p-5 shadow-xl">
                <div className="flex justify-between items-start mb-3">
                    <p className="text-sm font-medium text-foreground">Cookie Notice</p>
                    <button
                        onClick={decline}
                        className="text-stone-400 hover:text-stone-600 transition-colors -mt-1 -mr-1"
                    >
                        <X size={16} />
                    </button>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed mb-4">
                    We use cookies to improve your experience and analyze site traffic.
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={accept}
                        className="px-4 py-2 text-xs font-medium bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
                    >
                        Accept
                    </button>
                    <button
                        onClick={decline}
                        className="px-4 py-2 text-xs font-medium text-stone-500 hover:text-stone-700 transition-colors"
                    >
                        Decline
                    </button>
                </div>
            </div>
        </div>
    );
}
