"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, Zap, Code2, Globe, Cpu, Layers } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const codeSnippet = `import { VyorAI } from '@vyorai/sdk';

const client = new VyorAI(process.env.API_KEY);

// Start autonomous engine
const response = await client.studio.virtualTryOn({
  model: 'base_v4',
  garmentId: 'garment_821',
  precision: 'ultra'
});

console.log(response.outputUrl);`;

export function ApiPlatform() {
    const [typedCode, setTypedCode] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const sectionRef = useRef(null);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedCode(codeSnippet.slice(0, i));
            i++;
            if (i > codeSnippet.length) {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="api" ref={sectionRef} className="py-40 relative overflow-hidden bg-[#030712]">
            {/* Background Elements */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-5/12"
                    >
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                            <span className="text-sm font-black uppercase tracking-[0.4em] text-purple-400">Developer Infrastructure</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                            Build with <br />
                            <span className="text-white">Total Control.</span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-lg">
                            An API built for engineers who demand millisecond-scale latency and 99.99% reliability. Orchestrate complex AI workflows via a single, unified interface.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                            {[
                                { icon: Code2, title: "Universal SDK", desc: "JS/TS, Python, and Go support." },
                                { icon: Globe, title: "Edge Native", desc: "Global distribution with 0ms cold starts." },
                                { icon: Cpu, title: "Auto-Scale", desc: "From 1 to 1M requests instantly." },
                                { icon: Layers, title: "Versioned API", desc: "Backward compatibility guaranteed." }
                            ].map((item, idx) => (
                                <div key={idx} className="group">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all duration-300">
                                            <item.icon className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <h3 className="font-bold text-lg text-white group-hover:text-purple-300 transition-colors">{item.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed pl-14">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="relative group p-10 rounded-[2.5rem] bg-gradient-to-br from-purple-500/10 via-transparent to-transparent border border-white/5 backdrop-blur-3xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-[60px] -z-10 group-hover:bg-purple-500/20 transition-all duration-700" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black text-white mb-3">Free Developer Tier</h3>
                                <p className="text-gray-400 mb-8 max-w-xs">Start with 10 free credits. No credit card required. Scaling starts at ₹5/1k.</p>
                                <button className="group/btn relative px-10 py-4 bg-white text-black font-black rounded-2xl hover:scale-105 active:scale-95 transition-all">
                                    <span className="relative z-10 flex items-center gap-3">
                                        Get Your API Key <Zap className="w-4 h-4 fill-black" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-7/12 w-full perspective-[2000px]"
                    >
                        <div className="relative group">
                            {/* Decorative Glows */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

                            <div className="relative rounded-3xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
                                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/40 border border-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/40 border border-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/40 border border-green-500/50" />
                                    </div>
                                    <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Endpoint: v4.0.0-stable</div>
                                </div>
                                <div className="p-10 font-mono text-base md:text-lg overflow-x-auto min-h-[400px]">
                                    <pre className="text-gray-400 leading-relaxed">
                                        <code>
                                            {typedCode}
                                            <span className={`inline-block w-2 h-5 ml-1 bg-purple-500 align-middle ${isTyping ? "animate-pulse" : "hidden"}`} />
                                        </code>
                                    </pre>
                                </div>
                                <div className="px-10 py-6 bg-white/[0.02] border-t border-white/10 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Status: Active</span>
                                        </div>
                                        <div className="h-4 w-px bg-white/10" />
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Latency: 42ms</span>
                                    </div>
                                    <Terminal className="w-5 h-5 text-gray-700" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
