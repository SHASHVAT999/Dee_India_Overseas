export default function TermsPage() {
    return (
        <main>
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-background">
                <div className="max-w-container mx-auto px-6 md:px-8">
                    <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-4">Legal</p>
                    <h1 className="text-h1 text-foreground">Terms &amp; Conditions</h1>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white border-t border-stone-100">
                <div className="max-w-container mx-auto px-6 md:px-8 max-w-3xl">
                    <div className="prose prose-stone prose-sm max-w-none">
                        <h2 className="text-h3 text-foreground mt-0 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-stone-500 leading-relaxed mb-8">
                            By accessing and utilizing the Dee India Overseas manufacturing and export catalog, you engage in our &quot;Service&quot; and agree to be bound by the following global trade terms and conditions.
                        </p>

                        <h2 className="text-h3 text-foreground mb-4">2. Commercial Quotes &amp; Pricing</h2>
                        <p className="text-stone-500 leading-relaxed mb-8">
                            All prices quoted via this platform are subject to international market fluctuations. Final pricing will be communicated separately from standard web quotations.
                        </p>

                        <h2 className="text-h3 text-foreground mb-4">3. Intellectual Property</h2>
                        <p className="text-stone-500 leading-relaxed mb-8">
                            All technical specifications, mechanical drawings, photography, and branding materials on this site are the exclusive intellectual property of the Divyesh Securities parent group and Dee India Overseas.
                        </p>

                        <h2 className="text-h3 text-foreground mb-4">4. Liability Limitations</h2>
                        <p className="text-stone-500 leading-relaxed">
                            Dee India Overseas shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
