"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register once at module scope — safe in Next.js App Router client components
gsap.registerPlugin(ScrollTrigger);

/**
 * HeroGSAP — Scroll-driven logo animation
 *
 * Phase 0  (page load)    : Logo scales + fades into centre
 * Phase 1  (scroll start) : Logo glides LEFT  |  text reveals from RIGHT
 * Phase 2  (hold)         : Both elements stay in position briefly
 * Phase 3  (next scroll)  : Text disappears   |  logo returns to CENTRE
 * Phase 4  (final scroll) : Logo ZOOMS to fill entire screen → next section
 */
export function HeroGSAP() {
    /* ─── Refs ──────────────────────────────────────────────────────── */
    const wrapperRef = useRef<HTMLDivElement>(null);   // 400vh scroll driver
    const logoWrapRef = useRef<HTMLDivElement>(null);   // GSAP controls all transforms
    const textRef = useRef<HTMLDivElement>(null);   // right-side content block
    const hintRef = useRef<HTMLDivElement>(null);   // "scroll" indicator
    const descRef = useRef<HTMLDivElement>(null);   // pitch card below logo
    const topLeftTextRef = useRef<HTMLDivElement>(null); // top left badge/headline

    /* ─── Animation setup ───────────────────────────────────────────── */
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            /* ──────────────────────────────────────────────────────────────
               INITIAL STATES  — GSAP owns every transform on logoWrap
               (avoids CSS transform conflicts with scroll animations)
            ────────────────────────────────────────────────────────────── */
            gsap.set(logoWrapRef.current, {
                xPercent: -50,   // centres element: left:50% + xPercent:-50 = true centre
                yPercent: -50,
                scale: 0.6,
                opacity: 0,
            });
            gsap.set(textRef.current, { opacity: 0, x: 90 });
            gsap.set(hintRef.current, { opacity: 0 });
            gsap.set(descRef.current, { opacity: 0, y: 30 }); // Start slightly lower, anchored bottom
            gsap.set(topLeftTextRef.current, { opacity: 0, x: -40 });

            /* ──────────────────────────────────────────────────────────────
               PHASE 0 — Entry animation (page load)
               Logo blooms into view, scroll hint fades in after
            ────────────────────────────────────────────────────────────── */
            const entryTl = gsap.timeline({ delay: 0.35 });

            entryTl
                .to(logoWrapRef.current, {
                    scale: 1,
                    opacity: 1,
                    duration: 1.4,
                    ease: "expo.out",
                })
                // top-left text block slides in
                .to(topLeftTextRef.current, {
                    opacity: 1,
                    x: 0,
                    duration: 1.2,
                    ease: "power3.out",
                }, "-=1.2")
                // pitch card rises up under the logo
                .to(descRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                }, "-=0.8")
                .to(hintRef.current, {
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                }, "-=0.5");

            /* ──────────────────────────────────────────────────────────────
               SCROLL TIMELINE  (scrub: pinless sticky + ScrollTrigger)
               Total timeline duration: 4.0 units
               Scroll driver: 400vh → sticky 100vh = 300vh of scroll travel
            ────────────────────────────────────────────────────────────── */
            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top top",
                    end: "bottom bottom",   // 300vh of scroll distance
                    scrub: 2.5,             // Increased scrub lag to 2.5 for incredibly smooth, floating animation (fixes "atak raha hai")
                    invalidateOnRefresh: true,
                },
            });

            /* — Phase 1 (0 → 1.0): Logo LEFT  +  Text RIGHT ─────────── */
            scrollTl
                // hint, desc card, and top-left text fade out immediately on scroll
                .to(hintRef.current,
                    { opacity: 0, duration: 0.3, ease: "power1.in" },
                    0
                )
                .to(descRef.current,
                    { opacity: 0, y: -20, duration: 0.35, ease: "power2.in" },
                    0
                )
                .to(topLeftTextRef.current,
                    { opacity: 0, x: -30, duration: 0.35, ease: "power2.in" },
                    0
                )
                // logo glides to left third of screen (or top-right blank space on mobile)
                .to(logoWrapRef.current,
                    {
                        x: () => window.innerWidth < 768 ? window.innerWidth * 0.28 : -window.innerWidth * 0.22,
                        y: () => window.innerWidth < 768 ? -window.innerHeight * 0.18 : 0,
                        scale: () => window.innerWidth < 768 ? 0.75 : 1, // Shrink slightly on mobile
                        duration: 1.0,
                        ease: "power3.inOut",  // smoother s-curve than power2
                    },
                    0
                )
                // text sweeps in from the right
                .to(textRef.current,
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.9,
                        ease: "power3.out",
                    },
                    0.15   // slight delay so logo starts moving first
                );

            /* — Phase 2 (1.0 → 1.8): HOLD — nothing moves ────────────── */
            scrollTl.to({}, { duration: 0.8 });

            /* — Phase 3 (1.8 → 2.8): Text out  +  Logo back to centre ── */
            scrollTl
                .to(textRef.current,
                    { opacity: 0, x: -70, duration: 0.5, ease: "power2.in" },
                    1.8
                )
                .to(logoWrapRef.current,
                    { x: 0, y: 0, scale: 1, duration: 0.8, ease: "power3.inOut" }, // Revert positions & scale
                    2.0
                );

            /* — Phase 4 (2.8 → 4.0): Logo ZOOMS in for the finale ── */
            scrollTl.to(logoWrapRef.current,
                {
                    scale: 2.5,          // Controlled zoom (instead of 35x)
                    duration: 1.2,
                    ease: "sine.inOut",
                },
                2.8
            );

        }, wrapperRef);

        return () => ctx.revert();   // cleanup — React 18 Strict Mode safe
    }, []);

    /* ─── JSX ───────────────────────────────────────────────────────── */
    return (
        <div className="hero-gsap-root">

            {/*
        ┌──────────────────────────────────────────────────────────────┐
        │  SCROLL DRIVER — 400vh tall                                  │
        │  Inner sticky panel locks to viewport while parent scrolls   │
        └──────────────────────────────────────────────────────────────┘
      */}
            <div ref={wrapperRef} style={{ height: "400vh", position: "relative" }}>

                {/* ── Sticky canvas ─────────────────────────────────────── */}
                <div
                    style={{
                        position: "sticky",
                        top: 0,
                        height: "100vh",
                        overflow: "hidden",
                        background: "#030712",
                    }}
                >

                    {/* Ambient radial glow */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(ellipse 80% 65% at 50% 50%, rgba(99,102,241,0.13), transparent)",
                        }}
                    />

                    {/* Subtle grid lines */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808009_1px,transparent_1px),linear-gradient(to_bottom,#80808009_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />

                    {/* ── Animated Infinity Background ── */}
                    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
                        {/* Wrapper for positioning and massive scale to fill the blank spaces */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250vw] sm:w-[180vw] md:w-[130vw] min-w-[800px] h-auto rotate-[75deg] md:rotate-[-15deg] opacity-40 md:opacity-80 mix-blend-screen">
                            <svg
                                viewBox="0 0 1000 500"
                                className="w-full h-full text-white/5"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <defs>
                                    <linearGradient id="infGradSlow" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
                                        <stop offset="50%" stopColor="#c084fc" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#e879f9" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="infGradFast" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                                        <stop offset="50%" stopColor="#818cf8" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="infGradBase" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                                        <stop offset="50%" stopColor="#a855f7" stopOpacity="0.15" />
                                        <stop offset="100%" stopColor="#c084fc" stopOpacity="0.25" />
                                    </linearGradient>
                                    <filter id="glowLight">
                                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                    <filter id="glowHeavy">
                                        <feGaussianBlur stdDeviation="16" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Base thick track */}
                                <path
                                    d="M 500 250 C 400 150, 250 100, 150 150 C 50 200, 50 300, 150 350 C 250 400, 400 350, 500 250 C 600 150, 750 100, 850 150 C 950 200, 950 300, 850 350 C 750 400, 600 350, 500 250 Z"
                                    fill="none"
                                    stroke="url(#infGradBase)"
                                    strokeWidth="35"
                                    strokeLinecap="round"
                                />

                                {/* Glowing trail 1 (Slow, Purple) */}
                                <path
                                    d="M 500 250 C 400 150, 250 100, 150 150 C 50 200, 50 300, 150 350 C 250 400, 400 350, 500 250 C 600 150, 750 100, 850 150 C 950 200, 950 300, 850 350 C 750 400, 600 350, 500 250 Z"
                                    fill="none"
                                    stroke="url(#infGradSlow)"
                                    strokeWidth="14"
                                    strokeLinecap="round"
                                    pathLength="100"
                                    strokeDasharray="30 70"
                                    className="infinity-draw-slow"
                                    filter="url(#glowLight)"
                                />

                                {/* Glowing trail 2 (Fast, Blue/Indigo) */}
                                <path
                                    d="M 500 250 C 400 150, 250 100, 150 150 C 50 200, 50 300, 150 350 C 250 400, 400 350, 500 250 C 600 150, 750 100, 850 150 C 950 200, 950 300, 850 350 C 750 400, 600 350, 500 250 Z"
                                    fill="none"
                                    stroke="url(#infGradFast)"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    pathLength="100"
                                    strokeDasharray="15 85"
                                    className="infinity-draw-fast"
                                    filter="url(#glowHeavy)"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* ── TOP LEFT TEXT (visible on initial load) ──────────── */}
                    <div
                        ref={topLeftTextRef}
                        className="absolute z-[18] opacity-0 pointer-events-none left-[4%] md:left-[5%] top-[140px] md:top-[14%] w-[92vw] sm:w-auto md:max-w-[40vw]"
                    >
                        {/* Glassmorphism wrapper container */}
                        <div
                            className="p-5 sm:p-[clamp(20px,4vw,40px)] rounded-[20px] md:rounded-[24px]"
                            style={{
                                background: "rgba(8, 8, 18, 0.65)",
                                backdropFilter: "blur(20px)",
                                WebkitBackdropFilter: "blur(20px)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                boxShadow: "0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                            }}
                        >
                            {/* Interactive Badge */}
                            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-[#030712]/50 backdrop-blur-xl mb-4 sm:mb-6 shadow-xl">
                                <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#c084fc]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L12 10M12 14L12 22M2 12L10 12M14 12L22 12M10.5 4.5L13.5 7.5M10.5 19.5L13.5 16.5M4.5 10.5L7.5 13.5M19.5 10.5L16.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 12L12.01 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-[8px] sm:text-[10px] font-extrabold uppercase tracking-[0.25em] text-white/90">
                                    VyorAI Neural Interface
                                </span>
                            </div>

                            {/* OS Version Subtitle */}
                            <h3 className="text-[#a855f7] text-[9px] sm:text-[12px] font-bold tracking-[0.4em] uppercase mb-2 sm:mb-4 ml-1">
                                Autonomous OS v4.0
                            </h3>

                            {/* Main Headline */}
                            <h1 className="text-[1.35rem] leading-[1.1] sm:text-4xl lg:text-[3.2rem] font-black sm:leading-[1.05] tracking-[-0.03em] text-white/95">
                                AI That{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#818cf8]">
                                    Understands,
                                </span><br />
                                <span className="text-transparent bg-clip-text bg-[#a855f7]">
                                    Decides
                                </span><br />
                                <span className="text-transparent bg-clip-text bg-[#818cf8]">
                                    &amp; Executes
                                </span>
                            </h1>
                        </div>
                    </div>

                    {/* ── LOGO (GSAP owns all transforms) ─────────────────── */}
                    <div
                        ref={logoWrapRef}
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            zIndex: 20,
                            opacity: 0,   // GSAP animates this in; avoids SSR flash
                            willChange: "transform, opacity", // Forces hardware acceleration
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/LOGO-1.jpeg"
                            alt="VyorAI Logo"
                            style={{
                                display: "block",
                                width: "clamp(110px, 13vw, 200px)",
                                height: "auto",
                                background: "white",
                                borderRadius: "22px",
                                padding: "14px",
                                boxShadow:
                                    "0 0 0 1px rgba(255,255,255,0.08), 0 0 80px rgba(139,92,246,0.55), 0 8px 40px rgba(0,0,0,0.5)",
                            }}
                        />
                    </div>

                    {/* ── PITCH CARD (visible on initial load) ── */}
                    <div
                        ref={descRef}
                        className="absolute z-[18] opacity-0 pointer-events-none text-center left-[4%] sm:left-auto right-[4%] md:right-[6%] bottom-[4%] md:bottom-[8%] w-[92vw] sm:w-[clamp(300px,32vw,480px)]"
                    >
                        {/* Glassmorphism card */}
                        <div
                            className="p-[clamp(16px,4vw,30px)_clamp(16px,4vw,42px)] rounded-[20px] md:rounded-[22px] mb-3 md:mb-5"
                            style={{
                                background: "rgba(8, 8, 18, 0.75)",
                                backdropFilter: "blur(22px)",
                                WebkitBackdropFilter: "blur(22px)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
                            }}
                        >
                            <p
                                style={{
                                    color: "rgba(205,205,225,0.88)",
                                    fontSize: "clamp(14px, 1.4vw, 18px)",
                                    fontWeight: 500,
                                    lineHeight: 1.7,
                                    letterSpacing: "-0.01em",
                                    margin: 0,
                                }}
                            >
                                Deploy high-performance{" "}
                                <strong style={{ color: "#fff", fontWeight: 800 }}>AI agents</strong>{" "}
                                and autonomous pipelines with{" "}
                                <strong
                                    style={{
                                        fontWeight: 800,
                                        color: "transparent",
                                        backgroundImage: "linear-gradient(90deg,#a855f7,#6366f1)",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        textDecoration: "underline",
                                        textDecorationColor: "rgba(168,85,247,0.35)",
                                        textUnderlineOffset: "4px",
                                    }}
                                >
                                    millisecond-scale
                                </strong>{" "}
                                latency.
                            </p>
                        </div>

                        {/* CTA row */}
                        <div style={{ display: "flex", gap: "12px", justifyContent: "center", pointerEvents: "auto" }}>
                            <button
                                style={{
                                    padding: "13px 30px",
                                    borderRadius: "14px",
                                    background: "#fff",
                                    color: "#000",
                                    fontWeight: 800,
                                    fontSize: "14px",
                                    border: "none",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "7px",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                                }}
                                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                            >
                                Access API <span>→</span>
                            </button>
                            <button
                                style={{
                                    padding: "13px 30px",
                                    borderRadius: "14px",
                                    background: "rgba(255,255,255,0.04)",
                                    color: "#e2e2e2",
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "7px",
                                    backdropFilter: "blur(10px)",
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.09)")}
                                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                            >
                                <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#a78bfa" }}>&lt;/&gt;</span>
                                Library
                            </button>
                        </div>
                    </div>

                    {/* ── RIGHT TEXT BLOCK ─────────────────────────────────── */}
                    <div
                        ref={textRef}
                        className="absolute top-0 bottom-0 flex items-center z-[15] pointer-events-none opacity-0 right-[4%] md:right-[7%] left-[4%] sm:left-auto w-[92vw] sm:w-[clamp(260px,36vw,540px)]"
                    >
                        <div>
                            {/* Eyebrow */}
                            <span
                                className="block font-mono text-[11px] uppercase tracking-[0.45em] text-purple-400/70 font-bold mb-5"
                            >
                                Autonomous Intelligence
                            </span>

                            {/* Main heading */}
                            <h2
                                className="text-4xl md:text-[3.4rem] font-black tracking-tighter text-white leading-[1.06] mb-5"
                            >
                                AI That{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-violet-400 to-indigo-400">
                                    Thinks.
                                    <br />Decides.
                                    <br />Acts.
                                </span>
                            </h2>

                            {/* Divider */}
                            <div className="w-16 h-px bg-white/15 mb-5" />

                            {/* Description */}
                            <p className="text-neutral-400 text-base md:text-[1.05rem] leading-relaxed mb-8 max-w-[420px]">
                                Deploy autonomous AI agents and pipelines with{" "}
                                <span className="text-white font-semibold">millisecond-scale</span>{" "}
                                latency. Scale from prototype to production in minutes —
                                built for the teams that move fast.
                            </p>

                            {/* CTAs */}
                            <div className="flex items-center gap-4 flex-wrap">
                                <button className="px-7 py-3.5 rounded-2xl bg-white text-black font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_16px_48px_-12px_rgba(255,255,255,0.25)]">
                                    Get Started →
                                </button>
                                <button className="px-7 py-3.5 rounded-2xl border border-white/10 bg-white/[0.03] text-white font-bold text-sm backdrop-blur-xl hover:bg-white/[0.07] hover:border-white/20 transition-all">
                                    View Docs
                                </button>
                            </div>

                            {/* Stats row */}
                            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-white/[0.06]">
                                {[
                                    { val: "< 40ms", label: "Inference" },
                                    { val: "99.9%", label: "Uptime" },
                                    { val: "10k+", label: "Agents" },
                                ].map((s) => (
                                    <div key={s.label}>
                                        <div className="text-xl font-black text-white tracking-tight">{s.val}</div>
                                        <div className="text-[11px] text-neutral-500 uppercase tracking-widest font-mono mt-0.5">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── SCROLL HINT ──────────────────────────────────────── */}
                    <div
                        ref={hintRef}
                        style={{
                            position: "absolute",
                            bottom: "8%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "10px",
                            opacity: 0,
                            zIndex: 10,
                            pointerEvents: "none",
                        }}
                    >
                        <span className="text-[9px] font-bold uppercase tracking-[0.55em] text-neutral-500">
                            Scroll to explore
                        </span>
                        <div
                            className="w-px h-10 bg-gradient-to-b from-purple-500/50 to-transparent animate-pulse"
                        />
                    </div>

                </div>{/* /sticky */}
            </div>{/* /scroll driver */}

        </div>
    );
}
