import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        const xTo = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3" });
        const yTo = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3" });
        const rxTo = gsap.quickTo(ring, "x", { duration: 0.55, ease: "power3" });
        const ryTo = gsap.quickTo(ring, "y", { duration: 0.55, ease: "power3" });

        const onMove = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
            rxTo(e.clientX);
            ryTo(e.clientY);
        };
        window.addEventListener("mousemove", onMove);

        const hoverables = document.querySelectorAll(
            "a, button, [data-cursor='hover'], input, textarea, label, [role='button']",
        );
        const enter = () => {
            gsap.to(ring, { scale: 2.4, borderColor: "#D3FF24", duration: 0.35, ease: "power3" });
            gsap.to(dot, { scale: 0, duration: 0.25 });
        };
        const leave = () => {
            gsap.to(ring, { scale: 1, borderColor: "#F5F5F0", duration: 0.35, ease: "power3" });
            gsap.to(dot, { scale: 1, duration: 0.25 });
        };
        hoverables.forEach((el) => {
            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);
        });

        return () => {
            window.removeEventListener("mousemove", onMove);
            hoverables.forEach((el) => {
                el.removeEventListener("mouseenter", enter);
                el.removeEventListener("mouseleave", leave);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="cursor-dot pointer-events-none fixed left-0 top-0 z-[100] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-acid mix-blend-difference"
                aria-hidden
            />
            <div
                ref={ringRef}
                className="cursor-ring pointer-events-none fixed left-0 top-0 z-[100] -ml-4 -mt-4 h-8 w-8 rounded-full border border-bone mix-blend-difference"
                aria-hidden
            />
        </>
    );
}
