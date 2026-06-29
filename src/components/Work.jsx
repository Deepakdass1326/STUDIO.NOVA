import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WORKS } from "../lib/site";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray(".work-card").forEach((card) => {
                gsap.from(card, {
                    y: 80,
                    opacity: 0,
                    duration: 1.1,
                    ease: "expo.out",
                    scrollTrigger: { trigger: card, start: "top 85%" },
                });
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="work"
            ref={ref}
            data-testid="work-section"
            className="section-pad container-x"
        >
            <div className="flex items-end justify-between mb-16 sm:mb-24 flex-wrap gap-6">
                <div>
                    <span className="label-mono">[ 03 / Selected work ]</span>
                    <h2 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.92] tracking-tighter uppercase">
                        Work in
                        <br />
                        <span className="text-acid italic font-light">progress.</span>
                    </h2>
                </div>
                <a
                    href="#contact"
                    data-testid="work-archive-link"
                    className="link-reveal font-mono text-xs uppercase tracking-[0.22em] text-bone-muted hover:text-bone"
                >
                    Full archive on request →
                </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {WORKS.map((w, i) => (
                    <article
                        key={w.client}
                        data-testid={`work-${i}`}
                        className={`work-card ${w.span || "lg:col-span-6"} col-span-1 group cursor-pointer`}
                    >
                        <div className="relative overflow-hidden border border-ink-border bg-ink-surface aspect-[4/3]">
                            <img
                                src={w.img}
                                alt={w.client}
                                loading="lazy"
                                className="work-img absolute inset-0 h-full w-full object-cover opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink-base/80 via-transparent to-transparent" />
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                <span className="label-mono text-bone">{w.category}</span>
                                <span className="h-10 w-10 rounded-full bg-ink-base/70 backdrop-blur border border-ink-border flex items-center justify-center group-hover:bg-acid group-hover:text-ink-base group-hover:border-acid transition-all duration-500">
                                    <ArrowUpRight size={16} />
                                </span>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                <div>
                                    <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-bone-muted">
                                        {w.client} — {w.year}
                                    </div>
                                    <h3 className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight max-w-md">
                                        {w.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
