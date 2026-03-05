import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <html>
            <body className="bg-[#FAFAF9] text-stone-900 font-sans antialiased">
                <main className="min-h-screen flex items-center justify-center px-6">
                    <div className="text-center">
                        <p className="text-8xl font-semibold text-stone-200 mb-4">404</p>
                        <h1 className="text-xl font-semibold text-stone-900 mb-2">
                            Page Not Found
                        </h1>
                        <p className="text-sm text-stone-500 mb-8 max-w-sm mx-auto">
                            The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
                        >
                            <ArrowLeft size={16} />
                            Back to Home
                        </Link>
                    </div>
                </main>
            </body>
        </html>
    );
}
