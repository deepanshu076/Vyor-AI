"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

export function Footer() {
    return (
        <footer className="relative bg-[#030712] pt-32 pb-10 overflow-hidden border-t border-white/[0.05]">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20"
                >
                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className="lg:col-span-1 lg:pr-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3 mb-6 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-white/10 to-transparent p-[1px] group-hover:scale-105 transition-transform duration-500">
                                <div className="w-full h-full rounded-2xl bg-black overflow-hidden flex items-center justify-center p-2">
                                    <img
                                        src="/LOGO.png"
                                        alt="VyorAI Logo"
                                        className="w-full h-full object-contain filter invert group-hover:brightness-110 transition-all"
                                    />
                                </div>
                            </div>
                            <span className="text-2xl font-black tracking-tight text-white group-hover:text-purple-400 transition-colors duration-500">
                                VyorAI
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed font-medium">
                            The global AI infrastructure platform for building intelligent
                            applications and automating complex workflows.
                        </p>
                    </motion.div>

                    {/* Products Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="font-black text-white mb-6 uppercase tracking-widest text-sm text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
                            Products
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {[
                                "Virtual Try-On",
                                "AI Studio Catalog",
                                "Stress Detection AI",
                                "Omni-Engine (Soon)",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                                    >
                                        <span className="relative overflow-hidden">
                                            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                                                {item}
                                            </span>
                                            <span className="absolute left-0 top-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-purple-400">
                                                {item}
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Developers Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="font-black text-white mb-6 uppercase tracking-widest text-sm text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
                            Developers
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {["API Platform", "Documentation", "SDKs", "Pricing"].map(
                                (item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                                        >
                                            <span className="relative overflow-hidden">
                                                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                                                    {item}
                                                </span>
                                                <span className="absolute left-0 top-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-pink-400">
                                                    {item}
                                                </span>
                                            </span>
                                        </Link>
                                    </li>
                                ),
                            )}
                        </ul>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="font-black text-white mb-6 uppercase tracking-widest text-sm text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
                            Company
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {[
                                { name: "About Us", href: "#about" },
                                { name: "Careers", href: "#" },
                                { name: "Contact", href: "#" },
                                { name: "Privacy Policy", href: "#" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                                    >
                                        <span className="relative overflow-hidden">
                                            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                                                {item.name}
                                            </span>
                                            <span className="absolute left-0 top-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-white">
                                                {item.name}
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0, borderTopColor: "rgba(255,255,255,0)" }}
                    whileInView={{ opacity: 1, borderTopColor: "rgba(255,255,255,0.1)" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="pt-8 border-t flex flex-col-reverse md:flex-row justify-between items-center gap-6"
                >
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-gray-500 font-medium">
                        <p>© {new Date().getFullYear()} VyorAI. All rights reserved.</p>
                        <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-purple-500/50" />
                        <p className="flex items-center gap-2">
                            Built in <span className="text-white">India</span>
                        </p>
                    </div>

                    <div className="flex gap-3">
                        {[
                            { icon: Github, href: "#", label: "GitHub" },
                            { icon: Twitter, href: "#", label: "Twitter" },
                            {
                                icon: Linkedin,
                                href: "https://www.linkedin.com/company/vyorai/",
                                label: "LinkedIn",
                            },
                        ].map((social, i) => (
                            <Link
                                key={i}
                                href={social.href}
                                target={social.href.startsWith("http") ? "_blank" : undefined}
                                rel={
                                    social.href.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                aria-label={social.label}
                                className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-400 hover:bg-white/[0.1] hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-110 active:scale-95"
                            >
                                <social.icon className="w-4 h-4" />
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
