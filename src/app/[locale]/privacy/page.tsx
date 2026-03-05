export default function PrivacyPage() {
    return (
        <main>
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-background">
                <div className="max-w-container mx-auto px-6 md:px-8">
                    <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-4">Legal</p>
                    <h1 className="text-h1 text-foreground">Privacy Policy</h1>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white border-t border-stone-100">
                <div className="max-w-container mx-auto px-6 md:px-8 max-w-3xl">
                    <div className="prose prose-stone prose-sm max-w-none">
                        <h2 className="text-h3 text-foreground mt-0 mb-4">1. Information Collection</h2>
                        <p className="text-stone-500 leading-relaxed mb-8">
                            We collect B2B corporate information including names, enterprise email addresses, phone numbers, and location data solely for the purpose of executing manufacturing and export inquiries.
                        </p>

                        <h2 className="text-h3 text-foreground mb-4">2. Cookies and Tracking</h2>
                        <p className="text-stone-500 leading-relaxed mb-8">
                            This site uses Google Analytics 4 (GA4) with anonymized IP masking to track page interactions. This data allows us to optimize product catalog navigation and language processing.
                        </p>

                        <h2 className="text-h3 text-foreground mb-4">3. Data Security</h2>
                        <p className="text-stone-500 leading-relaxed">
                            All inquiries are transmitted securely via TLS 1.3 encryption. We do not sell or lease corporate data to third parties. All inquiries are maintained within our localized CRM infrastructure.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
