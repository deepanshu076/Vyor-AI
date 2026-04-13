"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Target, Rocket, Globe, ArrowUpRight } from "lucide-react";

const team = [
    {
        name: "Hritik Jaiswal",
        role: "Founder & CEO",
        image: "/Founder.png",
        bio: "Visionary leader focused on the intersection of neural networks and autonomous workflows.",
    },
    {
        name: "Rishabh Kushwah",
        role: "Co-Founder",
        image: "/Co-Founder.png",
        bio: "Strategic architect driving the global scaling of Vyor's core intelligence infrastructure.",
    },
];

const principles = [
    {
        icon: Target,
        title: "Precision",
        desc: "Every model is tuned for millisecond-scale accuracy.",
    },
    {
        icon: Rocket,
        title: "Speed",
        desc: "Edge-computed inference for zero-wait experiences.",
    },
    {
        icon: Globe,
        title: "Ethics",
        desc: "Privacy-first AI designed with transparency in mind.",
    },
];

// Production-level easing curve
const smoothEase = [0.16, 1, 0.3, 1];

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const slideUpBlur = {
    hidden: { opacity: 0, y: 60, filter: "blur(12px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 1, ease: smoothEase },
    },
};

export function About() {
    const containerRef = useRef<HTMLElement>(null);

    // Smooth scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax transformations
    const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const opacityFade = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 1, 1, 0],
    );

    return (
        <section
            id="about"
            ref={containerRef}
            className="py-40 relative bg-[#030712] overflow-hidden selection:bg-pink-500/30"
        >
            {/* Scroll-linked Background Atmosphere */}
            <motion.div
                style={{ y: bgY, opacity: opacityFade }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-purple-600/10 via-pink-500/5 to-transparent blur-[120px] pointer-events-none rounded-full"
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-32">
                    <motion.div style={{ y: headingY }} className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            whileInView={{ opacity: 1, width: "100%" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: smoothEase }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <div className="h-[2px] w-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                            <span className="text-sm font-black uppercase tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                                Our Mission
                            </span>
                        </motion.div>

                        <motion.h2
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] text-white"
                        >
                            <motion.span
                                variants={slideUpBlur}
                                className="block text-gray-500"
                            >
                                Beyond Human
                            </motion.span>
                            <motion.span
                                variants={slideUpBlur}
                                className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 pb-2"
                            >
                                Orchestration.
                            </motion.span>
                        </motion.h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: smoothEase, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-sm leading-relaxed mb-4 font-medium"
                    >
                        We are building the neural layer that powers the next generation of
                        autonomous enterprise workflows and digital interaction.
                    </motion.p>
                </div>

                {/* Team Grid Cascading Reveal */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-40"
                >
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            variants={slideUpBlur}
                            className="group relative"
                        >
                            {/* Premium Glow effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative h-full flex flex-col xl:flex-row gap-8 p-8 lg:p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:bg-white/[0.04] transition-all duration-500 shadow-2xl shadow-black/50">
                                <div className="w-full xl:w-48 h-64 xl:h-48 shrink-0 rounded-[2rem] overflow-hidden bg-gradient-to-br from-gray-900 to-[#030712] border border-white/10 group-hover:border-purple-500/30 transition-colors relative group-hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)]">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out filter grayscale group-hover:grayscale-0"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src =
                                                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23111"/></svg>';
                                        }}
                                    />
                                    {/* Inner image overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
                                </div>

                                <div className="flex flex-col justify-center flex-grow">
                                    <h3 className="text-3xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-pink-500 font-bold uppercase tracking-widest text-xs mb-4">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-400 leading-relaxed font-medium">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Values / Principles */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-20 border-t border-white/[0.08]"
                >
                    {principles.map((p, i) => (
                        <motion.div
                            key={i}
                            variants={slideUpBlur}
                            className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] hover:border-white/[0.1] transition-colors group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-500">
                                <p.icon className="w-7 h-7 text-purple-400" />
                            </div>
                            <h4 className="text-2xl font-black text-white mb-4">{p.title}</h4>
                            <p className="text-gray-400 leading-relaxed font-medium">
                                {p.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Recruitment Call */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: smoothEase }}
                    className="mt-40 text-center w-full flex justify-center"
                >
                    <div className="relative p-[1px] rounded-[3rem] overflow-hidden group">
                        {/* Animated Border Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-purple-500/40 group-hover:opacity-100 opacity-50 transition-opacity duration-500 animate-[spin_4s_linear_infinite]" />

                        <div className="relative bg-[#030712] rounded-[3rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 backdrop-blur-xl">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-14 h-14 rounded-full border-4 border-[#030712] bg-gradient-to-br from-gray-800 to-gray-900"
                                    />
                                ))}
                                <div className="w-14 h-14 rounded-full border-4 border-[#030712] bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-sm font-black text-white shadow-lg shadow-purple-500/30 z-10">
                                    +8
                                </div>
                            </div>

                            <div className="text-center md:text-left">
                                <h4 className="text-2xl font-black text-white mb-2">
                                    Join the Core Team
                                </h4>
                                <p className="text-gray-400 font-medium">
                                    We're expanding our AI infra and neural modeling teams.
                                </p>
                            </div>

                            <button className="flex items-center gap-2 px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300">
                                View Open Roles
                                <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
