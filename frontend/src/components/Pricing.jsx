import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRICING_TIERS } from "../lib/site";
import { ArrowUpRight, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".pricing-card", {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: "expo.out",
                stagger: 0.1,
                scrollTrigger: { trigger: ".pricing-list", start: "top 80%" },
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="pricing"
            ref={ref}
            data-testid="pricing-section"
            className="section-pad container-x"
        >
            <div className="flex items-end justify-between flex-wrap gap-6 mb-16 sm:mb-24">
                <div>
                    <span className="label-mono">[ 05 / Pricing ]</span>
                    <h2 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.92] tracking-tighter uppercase">
                        Plain
                        <br />
                        <em className="text-acid not-italic">numbers.</em>
                    </h2>
                </div>
                <p className="max-w-sm text-bone-muted text-base sm:text-lg leading-relaxed">
                    Three engagement sizes. Pick the one that matches the ambition — we'll
                    scope the rest in a 30‑minute call.
                </p>
            </div>

            <div className="pricing-list grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {PRICING_TIERS.map((t) => (
                    <PricingCard key={t.name} tier={t} />
                ))}
            </div>

            <p className="mt-10 sm:mt-14 label-mono text-bone-dim max-w-3xl">
                All prices in INR. Payment in milestones — 40% to start, 40% mid‑build, 20%
                on launch. Hosting, domain & third‑party fees billed at cost.
            </p>
        </section>
    );
}

function PricingCard({ tier }) {
    const isFeatured = tier.featured;

    return (
        <article
            data-testid={`pricing-${tier.id}`}
            className={`pricing-card relative flex flex-col h-full p-6 sm:p-8 lg:p-10 transition-colors duration-500 ${
                isFeatured
                    ? "border-2 border-acid bg-ink-surface lg:-translate-y-4 lg:scale-[1.02]"
                    : "border border-ink-border bg-ink-surface hover:border-bone-dim"
            }`}
        >
            {isFeatured && (
                <div
                    data-testid="pricing-featured-tag"
                    className="absolute -top-3 left-6 sm:left-8 bg-acid text-ink-base font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] px-3 py-1.5"
                >
                    ◉ Most Popular
                </div>
            )}

            <div className="flex items-start justify-between gap-4">
                <div>
                    <span className="label-mono">Tier {tier.no}</span>
                    <h3 className="mt-3 font-display text-3xl sm:text-4xl tracking-tight leading-none">
                        {tier.name}
                    </h3>
                </div>
                <span className="font-mono text-xs text-bone-muted shrink-0 pt-2">
                    {tier.timeline}
                </span>
            </div>

            <div className="mt-8 pb-8 border-b border-ink-border">
                <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-bone-muted mb-3">
                    Investment
                </div>
                <div
                    className={`font-display text-3xl sm:text-4xl lg:text-[2.6rem] tracking-tighter leading-none ${
                        isFeatured ? "text-acid" : "text-bone"
                    }`}
                >
                    {tier.price}
                </div>
            </div>

            <p className="mt-6 text-bone-muted text-base leading-relaxed">{tier.desc}</p>

            <ul className="mt-8 space-y-3 flex-1">
                {tier.bullets.map((b) => (
                    <li
                        key={b}
                        className="flex items-start gap-3 text-bone text-sm sm:text-base leading-snug"
                    >
                        <Check
                            size={16}
                            strokeWidth={2.5}
                            className={`mt-1 shrink-0 ${isFeatured ? "text-acid" : "text-bone-muted"}`}
                        />
                        <span>{b}</span>
                    </li>
                ))}
            </ul>

            <a
                href={tier.ctaHref}
                target={tier.ctaExternal ? "_blank" : undefined}
                rel={tier.ctaExternal ? "noopener noreferrer" : undefined}
                data-testid={`pricing-cta-${tier.id}`}
                className={`mt-10 inline-flex items-center justify-between gap-4 px-6 py-4 font-mono text-xs uppercase tracking-[0.22em] group ${
                    isFeatured ? "btn-acid" : "btn-ghost"
                }`}
            >
                {tier.cta}
                <ArrowUpRight
                    size={16}
                    className="transition-transform duration-500 group-hover:rotate-45"
                />
            </a>
        </article>
    );
}
