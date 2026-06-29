import { CLIENTS } from "../lib/site";

export default function Marquee() {
    // Duplicate the list so the marquee can loop seamlessly. Use a stable
    // composite key (client + cycle) so React's reconciler doesn't get
    // confused by duplicate names across the two halves.
    const row = [
        ...CLIENTS.map((c) => ({ c, cycle: "a" })),
        ...CLIENTS.map((c) => ({ c, cycle: "b" })),
    ];
    return (
        <section
            data-testid="marquee-section"
            className="border-y border-ink-border bg-ink-base py-6 sm:py-8 overflow-hidden"
        >
            <div className="marquee-track">
                {row.map(({ c, cycle }) => (
                    <div
                        key={`${cycle}-${c}`}
                        className="flex items-center gap-12 sm:gap-20 px-6 sm:px-10 shrink-0"
                    >
                        <span className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight whitespace-nowrap">
                            {c}
                        </span>
                        <span className="text-acid text-2xl sm:text-4xl">✦</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
