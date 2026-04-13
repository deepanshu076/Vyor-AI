"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Camera, HeartPulse, Zap, Sparkles, Terminal, Activity } from "lucide-react";
import React, { useRef, useEffect } from "react";

const products = [
    {
        icon: Camera,
        title: "AI Virtual Try-On",
        description: "A state-of-the-art AI solution for realistic garment visualization. Get started with 10 free credits.",
        features: ["Realistic Rendering", "Body-aware Fitting", "Instant Style Switching"],
        color: "from-blue-500/20 to-purple-500/20",
        border: "group-hover:border-blue-500/30",
        span: "md:col-span-2",
        delay: 0.1,
    },
    {
        icon: HeartPulse,
        title: "Stress Detection",
        description: "Emotional pattern recognition through real-time biometrics.",
        features: ["Pattern Recognition", "Dynamic Wellness"],
        color: "from-purple-500/20 to-pink-500/20",
        border: "group-hover:border-pink-500/30",
        span: "md:col-span-1",
        delay: 0.2,
    },
    {
        icon: Zap,
        title: "Vyor Omni-Engine",
        description: "The flagship AI automation engine for enterprise-scale autonomous execution.",
        features: ["Logical Reasoning", "Enterprise Scale", "Autonomous Execution"],
        color: "from-orange-500/20 to-pink-500/20",
        border: "group-hover:border-orange-500/30",
        isComingSoon: true,
        span: "md:col-span-1",
        delay: 0.3,
    },
    {
        icon: Terminal,
        title: "Developer API",
        description: "Integrate high-speed AI capabilities into your stack with a few lines of code.",
        features: ["Sub-50ms Latency", "Fully Typed SDK"],
        color: "from-emerald-500/20 to-cyan-500/20",
        border: "group-hover:border-emerald-500/30",
        span: "md:col-span-2",
        delay: 0.4,
    }
];

function ProductCard({ product }: { product: typeof products[0] }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXRelative = (e.clientX - rect.left) / width - 0.5;
        const mouseYRelative = (e.clientY - rect.top) / height - 0.5;
        mouseX.set(mouseXRelative);
        mouseY.set(mouseYRelative);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: product.delay, duration: 0.6 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`group relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl transition-all duration-500 ${product.border} hover:bg-white/[0.06] overflow-hidden flex flex-col ${product.span} min-h-[320px] md:min-h-[400px] shadow-2xl`}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[40px] -z-10 scale-90 group-hover:scale-100`} />

            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_80%)] pointer-events-none"
                style={{
                    "--mouse-x": `${(mouseX.get() + 0.5) * 100}%`,
                    "--mouse-y": `${(mouseY.get() + 0.5) * 100}%`
                } as any}
            />

            {product.isComingSoon && (
                <div className="absolute top-8 right-8 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border border-purple-500/20 backdrop-blur-md animate-pulse">
                    Coming Soon
                </div>
            )}

            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl" style={{ transform: "translateZ(50px)" }}>
                <product.icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-purple-400 transition-colors" />
            </div>

            <div style={{ transform: "translateZ(40px)" }}>
                <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 tracking-tight">{product.title}</h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6 md:mb-8 max-w-sm">{product.description}</p>
            </div>

            {product.features && (
                <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 mt-auto" style={{ transform: "translateZ(30px)" }}>
                    {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                            <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.6)]" />
                            {feature}
                        </li>
                    ))}
                </ul>
            )}

            <div className="pt-8 border-t border-white/5 flex items-center gap-3 text-sm font-bold text-gray-300 group-hover:text-white transition-all cursor-pointer w-fit group/btn" style={{ transform: "translateZ(20px)" }}>
                <span className="relative">
                    Explore Engine
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover/btn:w-full" />
                </span>
                <span className="text-purple-400 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
        </motion.div>
    );
}

export function Products() {
    return (
        <section id="products" className="py-24 md:py-40 relative z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/5 blur-[160px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8"
                >
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 mb-4 md:mb-6">
                            <div className="h-0.5 w-8 md:w-12 bg-purple-500" />
                            <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.25em] md:tracking-[0.4em] text-purple-400/80">Intelligence Layer</span>
                        </div>
                        <h2 className="text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 md:mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                            Engineered for <br className="hidden md:block" />
                            <span className="text-white">Radical Autonomy.</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 w-full md:max-w-sm text-sm md:text-lg leading-relaxed mb-0 md:mb-4">
                        We don't just build wrappers. We build deep neural architectures that command complex workflows with millisecond precision.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto [perspective:2000px]">
                    {products.map((product, i) => (
                        <ProductCard key={i} product={product as any} />
                    ))}
                </div>
            </div>
        </section>
    );
}
