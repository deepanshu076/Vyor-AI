"use client";

import { motion } from "framer-motion";

export function Marquee() {
    const texts = [
        "AI Interaction Layer",
        "Contextual Intelligence",
        "Real-time Automation",
        "Sub-50ms Inference",
        "Neural Workflow SDK",
        "Virtual Enterprise Studio",
        "Emotion Analytics Engine"
    ];

    return (
        <div className="py-10 border-y border-white/5 bg-white/[0.01] overflow-hidden whitespace-nowrap flex relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                className="flex gap-16 items-center px-8"
            >
                {/* Double the array for seamless looping */}
                {[...texts, ...texts].map((text, i) => (
                    <div key={i} className="flex items-center gap-16">
                        <span className="text-xl md:text-3xl font-bold text-white/20 uppercase tracking-wider">
                            {text}
                        </span>
                        <span className="text-purple-500/50 text-xl md:text-3xl">•</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
