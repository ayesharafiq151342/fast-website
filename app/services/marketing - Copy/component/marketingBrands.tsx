"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Headphones, ShieldCheck, Phone, TrendingUp } from "lucide-react";

export default function Marketing_section() {
    return (
      <section
  className="relative py-24 text-white bg-cover bg-center"
  style={{
    backgroundImage: "url('/bg-common-2 (1).webp')",
  }}
>       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                > <span className="text-sm uppercase tracking-widest text-white/70">
                        Not just visible.
                    </span>

                    <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mt-4">
                        Making Brands MEMORABLE
                    </h2>
                    <img
                        src="/services/marketing2.png"
                        alt="Team Discussion"
                        className="rounded-3xl mt-10 shadow-2xl"
                    />
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div


                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                >


                    <p className="text-white/80 mt-24 max-w-xl">
                        In a world of noise, we create signals. Your brand deserves more than impressions — it deserves impact, engagement, and loyalty that lasts.


                    </p>

                    {/* FEATURES */}
                    <div className="space-y-6 mt-10">
                        {[
                            {
                                icon: BadgeCheck,
                                title: "Bold Ideas",
                                desc: "We create bold, scroll-stopping ideas that capture attention and build strong brand identity.",
                            },
                            {
                                icon: ShieldCheck,
                                title: "Creative Content",
                                desc: "High-impact visuals and viral-ready content designed to engage and convert audiences.",
                            },
                            {
                                icon: Headphones,
                                title: "Data-Driven Strategy",
                                desc: "Every campaign is backed by insights, analytics, and performance-focused decisions.",
                            },
                            {
                                icon: TrendingUp,
                                title: "Proven Results",
                                desc: "We focus on real growth—more reach, higher engagement, and measurable conversions.",
                            },

                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex gap-4 items-start"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                    <item.icon className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">{item.title}</h4>
                                    <p className="text-white/75 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap gap-6 mt-10">
                        <button className="px-8 py-4 rounded-full font-semibold bg-[var(--accent)] border border-white/30
              hover:bg-[var(--primary)] transition-all duration-300">
                            Learn More
                        </button>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                <Phone />
                            </div>
                            <div>
                                <p className="text-sm text-white/70">Call Us Now</p>
                                <p className="font-semibold">+92 123 456 7890</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
