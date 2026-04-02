"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main>
            {/* Page Header */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-background">
                <div className="max-w-container mx-auto px-6 md:px-8">
                    <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-4">Contact</p>
                    <h1 className="text-h1 text-foreground max-w-2xl">
                        Get in Touch
                    </h1>
                    <p className="text-stone-500 mt-4 max-w-lg">
                        Whether you need a quote, technical specifications, or want to discuss a partnership — we&apos;re here to help.
                    </p>
                </div>
            </section>

            {/* Form + Info */}
            <section className="py-24 md:py-32 bg-stone-900/40 backdrop-blur-md border-y border-stone-800 relative z-10">
                <div className="max-w-container mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                        {/* Form */}
                        <div className="lg:col-span-3">
                            <h2 className="text-h3 text-foreground mb-8">Send an Inquiry</h2>

                            {submitted ? (
                                <div className="bg-stone-800/50 rounded-xl p-8 text-center border border-stone-700">
                                    <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                                        <Send size={20} className="text-emerald-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">Message Sent</h3>
                                    <p className="text-sm text-stone-500">We&apos;ll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-3 text-sm bg-stone-800 border border-stone-700 text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 text-sm bg-stone-800 border border-stone-700 text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                                                placeholder="Company name"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-3 text-sm bg-stone-800 border border-stone-700 text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Product Interest</label>
                                        <select className="w-full px-4 py-3 text-sm bg-stone-800 border border-stone-700 text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow">
                                            <option value="" className="text-stone-500">Select a category</option>
                                            <option>Engine Valves</option>
                                            <option>Clutch Parts</option>
                                            <option>Brake Systems</option>
                                            <option>Inner Tubes</option>
                                            <option>Suspension Parts</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                                        <textarea
                                            rows={5}
                                            required
                                            className="w-full px-4 py-3 text-sm bg-stone-800 border border-stone-700 text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow resize-none"
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>
                                    <Button type="submit" size="lg">
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-2">
                            <h2 className="text-h3 text-foreground mb-8">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <MapPin size={18} className="shrink-0 mt-0.5 text-stone-400" />
                                    <div>
                                        <p className="text-sm font-medium text-foreground mb-1">Address</p>
                                        <p className="text-sm text-stone-500 leading-relaxed">
                                            Dee India Overseas, LLC<br />
                                            Bhaktinagar Station Road – 2/22,<br />
                                            Near Bhaktinagar Station Circle,<br />
                                            Rajkot-2 (Gujarat) INDIA
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Phone size={18} className="shrink-0 mt-0.5 text-stone-400" />
                                    <div>
                                        <p className="text-sm font-medium text-foreground mb-1">Phone</p>
                                        <a href="tel:+919825075874" className="text-sm text-stone-500 hover:text-foreground transition-colors">
                                            +91 98250 75874
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Mail size={18} className="shrink-0 mt-0.5 text-stone-400" />
                                    <div>
                                        <p className="text-sm font-medium text-foreground mb-1">Email</p>
                                        <a href="mailto:info@deeindia.com" className="text-sm text-stone-500 hover:text-foreground transition-colors">
                                            info@deeindia.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="mt-10 rounded-xl overflow-hidden border border-stone-700/50">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.469659372!2d70.7774!3d22.2883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE3JzE4LjAiTiA3MMKwNDYnMzguNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
