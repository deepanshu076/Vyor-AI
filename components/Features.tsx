"use client";

import { motion } from "framer-motion";
import { Server, Zap, ShieldCheck } from "lucide-react";

export function Features() {
    const features = [
        {
            icon: Server,
            title: "Scalable Architecture",
            description: "Built on Vercel Edge compute, our API routes provide sub-50ms latency globally, ensuring zero downtime for your apps.",
        },
        {
            icon: Zap,
            title: "AI-Native System",
            description: "Unlike traditional wrappers, Vyor is fundamentally designed around custom neural networks. We optimize everything for inference speed.",
        },
        {
            icon: ShieldCheck,
            title: "Fast Integration",
            description: "Drop the VyorAI SDK into any modern JavaScript environment. Fully typed, documented, and backward compatible.",
        }
    ];

    return (
        <section className="py-32 relative overflow-hidden bg-[#0a0e17] border-y border-white/5">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group flex flex-col p-8 rounded-[2rem] hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                                <feature.icon className="w-7 h-7 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-black mb-4 tracking-tight">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-base">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
