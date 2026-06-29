import { useEffect, useState } from "react";
import { NAV_LINKS } from "../lib/site";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                data-testid="navbar"
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? "bg-ink-base/70 backdrop-blur-xl border-b border-ink-border"
                        : "bg-transparent"
                }`}
            >
                <div className="container-x flex h-16 items-center justify-between sm:h-20">
                    <a
                        data-testid="logo-link"
                        href="#top"
                        className="font-display text-base sm:text-lg tracking-tight"
                    >
                        STUDIO<span className="text-acid">.</span>NOVA
                    </a>

                    <nav className="hidden items-center gap-9 md:flex">
                        {NAV_LINKS.map((l, i) => (
                            <a
                                key={l.href}
                                href={l.href}
                                data-testid={`nav-link-${l.label.toLowerCase()}`}
                                className="font-mono text-xs uppercase tracking-[0.22em] text-bone-muted hover:text-bone link-reveal"
                            >
                                <span className="text-acid mr-1">0{i + 1}</span>
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            data-testid="nav-cta"
                            className="font-mono text-xs uppercase tracking-[0.22em] px-4 py-2 btn-acid"
                        >
                            Start a project ↗
                        </a>
                    </div>

                    <button
                        data-testid="menu-toggle"
                        onClick={() => setOpen((v) => !v)}
                        className="md:hidden p-2 -mr-2 text-bone"
                        aria-label="menu"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </header>

            {open && (
                <div
                    data-testid="mobile-menu"
                    className="fixed inset-0 z-40 bg-ink-base pt-24 px-6 md:hidden"
                >
                    <nav className="flex flex-col gap-6">
                        {NAV_LINKS.map((l, i) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                                className="font-display text-3xl tracking-tight"
                            >
                                <span className="text-acid font-mono text-sm mr-3 align-middle">
                                    0{i + 1}
                                </span>
                                {l.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            data-testid="mobile-nav-cta"
                            className="mt-6 inline-block btn-acid px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] w-fit"
                        >
                            Start a project ↗
                        </a>
                    </nav>
                </div>
            )}
        </>
    );
}
