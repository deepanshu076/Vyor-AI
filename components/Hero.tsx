"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles, ChevronDown } from "lucide-react";
import { Spotlight } from "@/components/aceternity/spotlight";
import { useEffect, useRef, useState } from "react";

export function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-[#030712]">
            {/* Layer 1: Background Typography (STAYING BEHIND) */}
            <div className="absolute inset-0 z-0 flex flex-col items-center justify-center select-none pointer-events-none overflow-hidden mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center w-full"
                >
                    <span className="text-[18vw] font-black tracking-tightest text-white/[0.02] leading-[0.75] uppercase">
                        Future
                    </span>
                    <span className="text-[18vw] font-black tracking-tightest text-transparent bg-clip-text bg-gradient-to-b from-white/[0.04] to-transparent leading-[0.75] uppercase">
                        Intelligence
                    </span>
                </motion.div>
            </div>

            {/* Visual Overlays & Lighting */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20 z-[1]"
                fill="white"
            />

            <div className="absolute inset-0 z-[2] bg-transparent pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-gradient-to-r from-purple-500/10 via-indigo-500/5 to-transparent blur-[140px] opacity-30 pointer-events-none rounded-full animate-pulse z-[1]"></div>

            {/* Premium Enhanced Infinity Symbol */}
            {mounted && (
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] z-[10] pointer-events-none select-none overflow-visible w-full flex justify-center [perspective:1500px]"
                >
                    <motion.div
                        animate={{
                            y: [0, -25, 0],
                            scale: [1, 1.02, 1],
                            opacity: [0.35, 0.45, 0.35]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-[95vw] max-w-[1100px] flex justify-center items-center"
                    >
                        <svg
                            viewBox="0 0 900 320"
                            className="w-full filter drop-shadow-[0_0_120px_rgba(99,102,241,0.3)]"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <defs>
                                {/* Ultra-Vibrant Multi-Stop Gradient */}
                                <linearGradient id="premium-infinity-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#4f46e5" /> {/* Indigo */}
                                    <stop offset="25%" stopColor="#818cf8" /> {/* Indigo Light */}
                                    <stop offset="50%" stopColor="#a855f7" /> {/* Purple */}
                                    <stop offset="75%" stopColor="#d946ef" /> {/* Fuchsia */}
                                    <stop offset="100%" stopColor="#6366f1" /> {/* Blue */}
                                </linearGradient>

                                {/* Shimmer Trace Gradient */}
                                <linearGradient id="energy-trace-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                                    <stop offset="50%" stopColor="white" stopOpacity="0.9" />
                                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                                </linearGradient>

                                {/* Complex Glow Filter */}
                                <filter id="nebula-glow" x="-40%" y="-40%" width="180%" height="180%">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur25" />
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur10" />
                                    <feMerge>
                                        <feMergeNode in="blur25" />
                                        <feMergeNode in="blur10" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                {/* Sharp Edge Reflection */}
                                <linearGradient id="edge-glass" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                                    <stop offset="20%" stopColor="white" stopOpacity="0.1" />
                                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Lemniscate Path: Shared across layers */}
                            <path id="inf-path" d="M 450 160 C 450 92 522 36 614 36 C 706 36 772 96 772 160 C 772 224 706 284 614 284 C 522 284 450 228 450 160 C 450 92 378 36 286 36 C 194 36 128 96 128 160 C 128 224 194 284 286 284 C 378 284 450 228 450 160 Z" />

                            {/* Deep Background Glow (Cyan/Purple) */}
                            <use href="#inf-path" stroke="#6366f1" strokeWidth="90" opacity="0.08" filter="url(#nebula-glow)" />

                            {/* Main Body (Vibrant Gradient) */}
                            <use href="#inf-path" stroke="url(#premium-infinity-grad)" strokeWidth="64" strokeLinecap="round" />

                            {/* Top Edge 'Glass' Reflection (Adds 3D Depth) */}
                            <use href="#inf-path" stroke="url(#edge-glass)" strokeWidth="64" strokeLinecap="round" strokeDasharray="1800" strokeDashoffset="0" opacity="0.4" />

                            {/* Energy Pulse Trace (The moving shimmer) */}
                            <use
                                href="#inf-path"
                                stroke="url(#energy-trace-grad)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                style={{
                                    strokeDasharray: "300 1600",
                                    animation: "infinityOrbit 5s linear infinite",
                                }}
                            />

                            {/* Energy Photons Stream (Three particles for a 'tail' effect) */}
                            <g>
                                <circle r="6" fill="white" filter="url(#nebula-glow)">
                                    <animateMotion dur="5s" repeatCount="indefinite" rotate="auto" path="M 450 160 C 450 92 522 36 614 36 C 706 36 772 96 772 160 C 772 224 706 284 614 284 C 522 284 450 228 450 160 C 450 92 378 36 286 36 C 194 36 128 96 128 160 C 128 224 194 284 286 284 C 378 284 450 228 450 160 Z" />
                                </circle>
                                <circle r="4" fill="white" opacity="0.6">
                                    <animateMotion begin="0.1s" dur="5s" repeatCount="indefinite" rotate="auto" path="M 450 160 C 450 92 522 36 614 36 C 706 36 772 96 772 160 C 772 224 706 284 614 284 C 522 284 450 228 450 160 C 450 92 378 36 286 36 C 194 36 128 96 128 160 C 128 224 194 284 286 284 C 378 284 450 228 450 160 Z" />
                                </circle>
                                <circle r="3" fill="white" opacity="0.3">
                                    <animateMotion begin="0.2s" dur="5s" repeatCount="indefinite" rotate="auto" path="M 450 160 C 450 92 522 36 614 36 C 706 36 772 96 772 160 C 772 224 706 284 614 284 C 522 284 450 228 450 160 C 450 92 378 36 286 36 C 194 36 128 96 128 160 C 128 224 194 284 286 284 C 378 284 450 228 450 160 Z" />
                                </circle>
                            </g>
                        </svg>
                    </motion.div>
                </div>
            )}

            {/* Layer 2: Interactive Foreground */}
            <div className="relative z-20 container mx-auto px-6 flex flex-col items-start justify-between min-h-[85vh] py-12">

                {/* Branding & Badge */}
                <div className="flex flex-col items-start text-left pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-6 shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] hover:border-purple-500/30 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                        <span className="text-xs font-bold text-neutral-300 uppercase tracking-[0.3em] font-mono">
                            VyorAI Neural Interface
                        </span>
                    </motion.div>

                    <h3 className="text-sm font-mono text-purple-400/60 tracking-[0.5em] uppercase mb-4 ml-2">Autonomous OS v4.0</h3>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tighter ml-2 mb-10 max-w-2xl leading-[1.1]"
                    >
                        AI That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Understands, Decides & Executes</span>
                    </motion.h1>
                </div>

                {/* Subtitle & Actions Bar */}
                <div className="w-full flex flex-col lg:flex-row items-end justify-between gap-12 mt-auto">
                    <div className="hidden lg:flex flex-col items-start max-w-xs text-left pointer-events-auto">
                        <div className="h-px w-20 bg-white/20 mb-6" />
                        <p className="text-xs font-mono text-neutral-400 tracking-widest leading-relaxed uppercase">
                            Optimized for low-latency inference and cross-model orchestration workflows.
                        </p>
                    </div>

                    <div className="flex flex-col items-center lg:items-end text-center lg:text-right pointer-events-auto">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg md:text-2xl text-neutral-300/90 max-w-xl mb-10 leading-relaxed font-medium tracking-tight bg-black/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 shadow-2xl"
                        >
                            Deploy high-performance <span className="text-white font-bold">AI agents</span> and autonomous pipelines with <span className="text-purple-400 font-extrabold underline decoration-purple-500/30 underline-offset-8">millisecond-scale</span> latency.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                        >
                            <button className="relative group px-12 py-5 rounded-2xl bg-white text-black font-black hover:scale-[1.05] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 overflow-hidden shadow-[0_20px_50px_-15px_rgba(255,255,255,0.3)]">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                                    Access API <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                                </span>
                            </button>
                            <button className="relative group px-12 py-5 rounded-2xl bg-white/[0.02] text-white font-bold backdrop-blur-3xl border border-white/10 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-lg">
                                <Code className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" />
                                <span>Library</span>
                                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-auto"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold mb-2">Initialize Core</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-5 h-5 text-neutral-500"
                    >
                        <ChevronDown className="w-full h-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
