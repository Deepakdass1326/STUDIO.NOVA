import { Suspense, lazy, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDownRight } from "lucide-react";

const ThreeBackground = lazy(() => import("./ThreeBackground"));

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".hero-line", { yPercent: 110 });
            gsap.set(".hero-fade", { opacity: 0, y: 24 });
            const tl = gsap.timeline({ delay: 0.15 });
            tl.to(".hero-line", {
                yPercent: 0,
                duration: 1.1,
                ease: "expo.out",
                stagger: 0.08,
            })
                .to(
                    ".hero-fade",
                    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.08 },
                    "-=0.6",
                );
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="top"
            ref={heroRef}
            data-testid="hero-section"
            className="relative min-h-[100svh] w-full overflow-hidden"
        >
            <Suspense
                fallback={
                    <div className="absolute inset-0 bg-gradient-to-br from-ink-base via-ink-surface to-ink-base" />
                }
            >
                <ThreeBackground />
            </Suspense>

            {/* vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#050505_85%)]" />

            <div className="relative z-10 container-x pt-32 sm:pt-40 lg:pt-48 pb-16">
                {/* top meta */}
                <div className="flex items-center justify-between hero-fade">
                    <span className="label-mono">[ Vol. 1 — 2026 ]</span>
                    <span className="hidden sm:block label-mono">New Delhi · India</span>
                </div>

                {/* main title */}
                <h1 className="mt-12 sm:mt-16 font-display uppercase tracking-tighter leading-[0.88] text-[10.5vw] sm:text-[11vw] lg:text-[9.5vw]">
                    <span className="reveal-mask block">
                        <span className="hero-line block">An independent</span>
                    </span>
                    <span className="reveal-mask block">
                        <span className="hero-line block">
                            studio for <em className="not-italic text-acid">brands</em>
                        </span>
                    </span>
                    <span className="reveal-mask block">
                        <span className="hero-line block">
                            with a <em className="not-italic font-thin">pulse.</em>
                        </span>
                    </span>
                </h1>

                {/* meta strip */}
                <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-6 items-end">
                    <div className="sm:col-span-5 hero-fade">
                        <p className="text-bone-muted text-base sm:text-lg leading-relaxed max-w-md">
                            Studio Nova is a Solo creative & engineering studio building
                            identities, products and immersive web for ambitious teams.

                        </p>
                    </div>

                    <div className="sm:col-span-3 sm:col-start-7 hero-fade">
                        <div className="label-mono mb-3">Currently working on</div>
                        <ul className="space-y-2 text-bone text-sm">
                            <li>↳ · brand</li>
                            <li>↳ · platform</li>

                        </ul>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-11 hero-fade flex justify-start sm:justify-end">
                        <a
                            href="#work"
                            data-testid="hero-scroll-cta"
                            className="inline-flex items-center gap-3 group"
                        >
                            <span className="label-mono">See the work</span>
                            <span className="h-10 w-10 rounded-full border border-ink-border flex items-center justify-center group-hover:bg-acid group-hover:border-acid group-hover:text-ink-base transition-all duration-500">
                                <ArrowDownRight size={16} />
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* ticker bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-ink-border bg-ink-base/60 backdrop-blur-xl">
                <div className="container-x flex items-center justify-between py-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-bone-muted">
                    <span data-testid="hero-ticker-left">◉ Open for briefs · ready to start now</span>
                    <span className="hidden sm:inline">Scroll ↓</span>
                   
                </div>
            </div>
        </section>
    );
}
