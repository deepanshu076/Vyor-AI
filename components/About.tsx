"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Target, Rocket, Globe } from "lucide-react";

export function About() {
    const team = [
        {
            name: "Hritik Jaiswal",
            role: "Founder & CEO",
            image: "/Founder.png",
            bio: "Visionary leader focused on the intersection of neural networks and autonomous workflows."
        },
        {
            name: "Rishabh Kushwah",
            role: "Co-Founder",
            image: "/Co-Founder.png",
            bio: "Strategic architect driving the global scaling of Vyor's core intelligence infrastructure."
        }
    ];

    const principles = [
        { icon: Target, title: "Precision", desc: "Every model is tuned for millisecond-scale accuracy." },
        { icon: Rocket, title: "Speed", desc: "Edge-computed inference for zero-wait experiences." },
        { icon: Globe, title: "Ethics", desc: "Privacy-first AI designed with transparency in mind." }
    ];

    return (
        <section id="about" className="py-40 relative bg-[#030712] overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-purple-500/5 blur-[160px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-12 items-end justify-between mb-32"
                >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="h-0.5 w-12 bg-pink-500" />
                            <span className="text-sm font-black uppercase tracking-[0.4em] text-pink-400">Our Mission</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                            Beyond Human <br />
                            <span className="text-white">Orchestration.</span>
                        </h2>
                    </div>
                    <p className="text-xl text-gray-400 max-w-sm leading-relaxed mb-4">
                        We are building the neural layer that powers the next generation of autonomous enterprise workflows and digital interaction.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-transparent rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <div className="relative flex flex-col md:flex-row gap-8 p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:bg-white/[0.04] transition-all duration-500">
                                <div className="w-48 h-48 shrink-0 rounded-[2rem] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-950 border border-white/10 group-hover:border-purple-500/30 transition-colors relative">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 gray-filter"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23111"/></svg>'
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-3xl font-black text-white mb-2">{member.name}</h3>
                                    <p className="text-pink-400 font-bold uppercase tracking-widest text-sm mb-4">{member.role}</p>
                                    <p className="text-gray-400 leading-relaxed font-medium">{member.bio}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Values / Principles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 border-t border-white/5">
                    {principles.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[2rem] bg-white/[0.01] hover:bg-white/[0.02] transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <p.icon className="w-6 h-6 text-purple-400" />
                            </div>
                            <h4 className="text-xl font-black text-white mb-3">{p.title}</h4>
                            <p className="text-gray-500 leading-relaxed font-medium">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Recruitment Call */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 text-center"
                >
                    <div className="bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-transparent p-1 shadow-2xl rounded-[3rem] inline-block">
                        <div className="bg-[#030712] rounded-[2.9rem] px-12 py-8 flex flex-col md:flex-row items-center gap-8">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#030712] bg-gray-800" />
                                ))}
                                <div className="w-12 h-12 rounded-full border-2 border-[#030712] bg-purple-500 flex items-center justify-center text-xs font-black">+8</div>
                            </div>
                            <div className="text-left">
                                <h4 className="text-xl font-black text-white">Join the Core Team</h4>
                                <p className="text-gray-500 font-medium">We're expanding our AI infra and neural modeling teams.</p>
                            </div>
                            <button className="px-8 py-3 bg-white text-black font-black rounded-xl hover:scale-105 active:scale-95 transition-all">
                                View Open Roles
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
