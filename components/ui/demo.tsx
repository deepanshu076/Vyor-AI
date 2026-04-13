'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
    return (
        <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="relative h-full w-full flex items-center justify-center">
                {/* 3D Scene - Centered and full-width */}
                <div className="absolute inset-0 z-0">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>

                {/* Content Overlay - Centered on top of the Robot */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 md:p-12 max-w-3xl border border-white/10 rounded-[2rem] bg-black/40 backdrop-blur-md">
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-400 tracking-tightest leading-[1.1] mb-6">
                        The Neural <br />Interaction Layer
                    </h1>
                    <p className="text-neutral-300/80 text-base md:text-lg leading-relaxed max-w-xl font-medium">
                        VyorAI powers the next generation of autonomous systems.
                        Context-aware AI orchestration at the speed of thought.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-3 rounded-xl bg-white text-black font-bold text-sm hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            Launch Interface
                        </button>
                        <button className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm backdrop-blur-xl hover:bg-white/10 transition-all">
                            View Platform SDK
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    )
}
