import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS } from "../lib/site";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".phase-card", {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "expo.out",
                stagger: 0.12,
                scrollTrigger: { trigger: ".phases", start: "top 80%" },
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="process"
            ref={ref}
            data-testid="process-section"
            className="section-pad bg-ink-surface border-y border-ink-border"
        >
            <div className="container-x">
                <div className="flex items-end justify-between mb-16 sm:mb-24 flex-wrap gap-6">
                    <div>
                        <span className="label-mono">[ 04 / Process ]</span>
                        <h2 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.92] tracking-tighter uppercase">
                            How we
                            <br />
                            <em className="text-acid not-italic">operate.</em>
                        </h2>
                    </div>
                    <p className="max-w-sm text-bone-muted text-base sm:text-lg leading-relaxed">
                        Four phases. No theatre. We over‑communicate, plan in public, and write
                        down our decisions.
                    </p>
                </div>

                <div className="phases grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-border">
                    {PROCESS.map((p) => (
                        <div
                            key={p.no}
                            data-testid={`phase-${p.no}`}
                            className="phase-card bg-ink-surface p-8 sm:p-10 h-full hover:bg-ink-base transition-colors duration-500"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <span className="font-mono text-xs tracking-[0.22em] text-bone-muted">
                                    PHASE {p.no}
                                </span>
                                <span className="h-2 w-2 rounded-full bg-acid" />
                            </div>
                            <h3 className="font-display text-3xl sm:text-4xl tracking-tight leading-none">
                                {p.phase}
                            </h3>
                            <p className="mt-6 text-bone-muted text-sm sm:text-base leading-relaxed">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
