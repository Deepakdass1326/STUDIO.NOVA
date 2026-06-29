import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "../lib/site";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const words = gsap.utils.toArray(".manifesto-word");
            gsap.fromTo(
                words,
                { opacity: 0.12 },
                {
                    opacity: 1,
                    stagger: 0.04,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".manifesto",
                        start: "top 75%",
                        end: "bottom 40%",
                        scrub: true,
                    },
                },
            );

            gsap.from(".stat-num", {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "expo.out",
                stagger: 0.12,
                scrollTrigger: {
                    trigger: ".stats",
                    start: "top 80%",
                },
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    const manifesto =
        "We are a small studio of designers, engineers and writers. We make brands that act like products and products that act like brands. We work in long arcs, with small teams, on problems that matter to the people commissioning the work.";

    return (
        <section
            id="about"
            ref={ref}
            data-testid="about-section"
            className="section-pad container-x"
        >
            <div className="grid grid-cols-12 gap-y-12 gap-x-6 items-start">
                <div className="col-span-12 lg:col-span-3">
                    <span className="label-mono">[ 01 / Studio ]</span>
                    <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.95] tracking-tight">
                        Not a SaaS.
                        <br />
                        <span className="text-bone-muted">A studio.</span>
                    </h2>
                </div>

                <div className="col-span-12 lg:col-span-9 manifesto">
                    <p className="font-display text-2xl sm:text-3xl lg:text-[2.7rem] leading-[1.15] tracking-tight">
                        {manifesto.split(" ").map((w, i) => (
                            <span key={i} className="manifesto-word inline-block mr-[0.22em]">
                                {w}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            <div className="stats mt-24 sm:mt-32 grid grid-cols-2 lg:grid-cols-4 border-t border-ink-border">
                {STATS.map((s, i) => (
                    <div
                        key={s.label}
                        data-testid={`stat-${i}`}
                        className={`py-8 sm:py-10 ${i !== 0 ? "lg:border-l border-ink-border" : ""} ${
                            i % 2 === 1 ? "border-l border-ink-border lg:border-l" : ""
                        }`}
                    >
                        <div className="stat-num font-display text-5xl sm:text-6xl lg:text-7xl tracking-tighter">
                            {s.value}
                        </div>
                        <div className="label-mono mt-3">{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
