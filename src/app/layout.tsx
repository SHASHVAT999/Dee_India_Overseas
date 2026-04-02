import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "Dee India Overseas — Precision Automotive Components",
    description:
        "Leading manufacturer and exporter of automobile spare parts. Engine valves, clutch assemblies, brake systems, and more — serving 50+ countries.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning>
            <body className="font-sans antialiased bg-background text-foreground selection:bg-stone-900 selection:text-white relative">
                {children}
            </body>
        </html>
    );
}
