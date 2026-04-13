"use client";

import { motion } from "framer-motion";
import { Server, Zap, ShieldCheck, LucideIcon } from "lucide-react";

// 5. TypeScript Interface
interface FeatureItem {
    icon: LucideIcon;
    title: string;
    description: string;
}

// 1. Static data moved OUTSIDE the component to prevent memory reallocation on re-renders
const FEATURES: FeatureItem[] = [
    {
        icon: Server,
        title: "Scalable Architecture",
        description:
            "Built on Vercel Edge compute, our API routes provide sub-50ms latency globally, ensuring zero downtime for your apps.",
    },
    {
        icon: Zap,
        title: "AI-Native System",
        description:
            "Unlike traditional wrappers, Vyor is fundamentally designed around custom neural networks. We optimize everything for inference speed.",
    },
    {
        icon: ShieldCheck,
        title: "Fast Integration",
        description:
            "Drop the VyorAI SDK into any modern JavaScript environment. Fully typed, documented, and backward compatible.",
    },
];

export function Features() {
    return (
        // 3. Responsive padding (py-16 on mobile, py-32 on desktop)
        <section className="py-16 md:py-32 relative overflow-hidden bg-[#0a0e17] border-y border-white/5">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* 3. Responsive gaps (gap-8 on mobile, gap-16 on desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                    {FEATURES.map((feature, i) => (
                        <motion.div
                            key={feature.title} // 2. Using a stable, unique identifier instead of the map index
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group flex flex-col p-8 rounded-[2rem] hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                                {/* 4. Added aria-hidden for screen reader accessibility */}
                                <feature.icon
                                    className="w-7 h-7 text-purple-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <h3 className="text-2xl font-black mb-4 tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-base">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
