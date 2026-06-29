import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader({ onDone }) {
    const rootRef = useRef(null);
    const barRef = useRef(null);
    const countRef = useRef(null);
    const [n, setN] = useState(0);

    useEffect(() => {
        const obj = { v: 0 };
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(rootRef.current, {
                    yPercent: -100,
                    duration: 1,
                    ease: "expo.inOut",
                    onComplete: () => {
                        if (onDone) onDone();
                    },
                });
            },
        });
        tl.to(obj, {
            v: 100,
            duration: 1.8,
            ease: "power2.inOut",
            onUpdate: () => setN(Math.round(obj.v)),
        });
        tl.to(barRef.current, { scaleX: 1, duration: 1.8, ease: "power2.inOut" }, 0);
        return () => tl.kill();
    }, [onDone]);

    return (
        <div
            ref={rootRef}
            data-testid="preloader"
            className="fixed inset-0 z-[90] flex flex-col justify-between bg-ink-base p-6 sm:p-12"
        >
            <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-bone-muted">
                    Studio Nova
                </span>
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-bone-muted">
                    2026 — Independent
                </span>
            </div>

            <div>
                <div ref={countRef} className="font-display text-[18vw] leading-[0.85] tracking-tighter">
                    {String(n).padStart(3, "0")}
                </div>
                <div className="mt-6 h-px w-full bg-ink-border">
                    <div ref={barRef} className="loader-bar h-px w-full origin-left bg-acid" style={{ transform: "scaleX(0)" }} />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-bone-muted">
                    Loading assets
                </span>
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-bone-muted">
                    v01 — 26
                </span>
            </div>
        </div>
    );
}
