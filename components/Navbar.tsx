"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Terminal, Sparkles } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Products", href: "#products" },
        { name: "API Platform", href: "#api" },
        { name: "Documentation", href: "#docs" },
        { name: "About", href: "#about" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 pointer-events-none">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`flex items-center justify-between px-8 py-3 rounded-full border border-white/10 backdrop-blur-3xl transition-all duration-500 pointer-events-auto ${scrolled
                    ? "w-[95%] lg:w-[1050px] bg-white/[0.03] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]"
                    : "w-[98%] lg:w-[1280px] bg-transparent border-transparent"
                    }`}
            >
                <Link href="/" className="flex items-center gap-4 group shrink-0">
                    <div className="relative w-10 h-10 rounded-xl bg-white overflow-hidden flex items-center justify-center p-1.5 shadow-xl group-hover:rotate-6 transition-transform">
                        <img src="/LOGO.png" alt="VyorAI Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-white">VyorAI</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-black text-neutral-400 hover:text-white transition-colors uppercase tracking-widest relative group/item"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover/item:w-full" />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:flex items-center gap-2 text-xs font-black text-neutral-400 hover:text-white transition-colors uppercase tracking-widest group">
                        <Terminal className="w-3.5 h-3.5 text-purple-400 group-hover:rotate-12 transition-transform" />
                        Log In
                    </button>
                    <button className="px-5 py-2 rounded-full bg-white text-black text-xs font-black hover:scale-105 active:scale-95 transition-all shadow-xl">
                        Get Access
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="lg:hidden fixed inset-x-6 top-24 p-8 bg-[#0B0F19]/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] flex flex-col gap-8 shadow-2xl pointer-events-auto"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-black text-neutral-400 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5">
                            <button className="py-4 rounded-2xl bg-white/[0.05] border border-white/10 text-white font-black">Log In</button>
                            <button className="py-4 rounded-2xl bg-white text-black font-black">Get Started</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
