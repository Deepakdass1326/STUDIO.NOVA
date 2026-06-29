import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // anchor links
        const handleAnchor = (e) => {
            const a = e.target.closest("a[href^='#']");
            if (!a) return;
            const id = a.getAttribute("href");
            if (id && id.length > 1) {
                const el = document.querySelector(id);
                if (el) {
                    e.preventDefault();
                    lenis.scrollTo(el, { offset: -40, duration: 1.4 });
                }
            }
        };
        document.addEventListener("click", handleAnchor);

        return () => {
            document.removeEventListener("click", handleAnchor);
            lenis.destroy();
        };
    }, []);

    return children;
}
