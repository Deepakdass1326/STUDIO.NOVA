import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "../lib/site";
import { Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-row", {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: "expo.out",
                stagger: 0.1,
                scrollTrigger: { trigger: ".services-list", start: "top 80%" },
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="services"
            ref={ref}
            data-testid="services-section"
            className="section-pad container-x"
        >
            <div className="flex items-end justify-between flex-wrap gap-6 mb-16 sm:mb-24">
                <div>
                    <span className="label-mono">[ 02 / Disciplines ]</span>
                    <h2 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.92] tracking-tighter uppercase">
                        Six things
                        <br />
                        we do <em className="text-acid not-italic">well.</em>
                    </h2>
                </div>
                <p className="max-w-sm text-bone-muted text-base sm:text-lg leading-relaxed">
                    We don’t sell deliverables — we operate as a partner. Most engagements run
                    between 8 weeks and 18 months.
                </p>
            </div>

            <div className="services-list border-t border-ink-border">
                {SERVICES.map((s) => (
                    <div
                        key={s.no}
                        data-testid={`service-${s.no}`}
                        className="service-row group grid grid-cols-12 gap-4 items-start py-10 sm:py-14 border-b border-ink-border hover:bg-ink-surface transition-colors duration-500"
                    >
                        <div className="col-span-2 sm:col-span-1 font-mono text-xs sm:text-sm text-bone-muted pt-2">
                            {s.no}
                        </div>
                        <div className="col-span-10 sm:col-span-5 font-display text-3xl sm:text-5xl lg:text-6xl tracking-tighter uppercase leading-[0.95]">
                            {s.title}
                        </div>
                        <div className="col-span-12 sm:col-span-4 text-bone-muted text-base leading-relaxed">
                            {s.desc}
                        </div>
                        <div className="col-span-12 sm:col-span-2 flex sm:justify-end items-start gap-2 pt-2 flex-wrap">
                            {s.tags.map((t) => (
                                <span
                                    key={t}
                                    className="label-mono border border-ink-border px-2 py-1 group-hover:border-acid group-hover:text-acid transition-colors"
                                >
                                    {t}
                                </span>
                            ))}
                            <Plus
                                size={20}
                                className="ml-auto text-bone-muted group-hover:text-acid group-hover:rotate-90 transition-all duration-500"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
