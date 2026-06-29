export default function Footer() {
    return (
        <footer
            data-testid="footer"
            className="border-t border-ink-border bg-ink-base"
        >
            <div className="container-x py-16 sm:py-20">
                <div className="grid grid-cols-12 gap-y-10">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="label-mono">— Studio Nova / Index 26</div>
                        <h3 className="mt-6 font-display text-[11vw] sm:text-[10vw] lg:text-[8vw] leading-[0.9] tracking-tighter uppercase break-words">
                            Studio<span className="text-acid">.</span>Nova
                        </h3>
                    </div>
                    <div className="col-span-6 lg:col-span-2">
                        <div className="label-mono mb-4">Sitemap</div>
                        <ul className="space-y-2 text-bone text-sm">
                            <li>
                                <a href="#work" className="link-reveal">
                                    Work
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="link-reveal">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="link-reveal">
                                    Studio
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="link-reveal">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6 lg:col-span-3">
                        <div className="label-mono mb-4">Elsewhere</div>
                        <ul className="space-y-2 text-bone text-sm">
                            <li>
                                <a href="#" className="link-reveal">
                                    Instagram ↗
                                </a>
                            </li>
                            <li>
                                <a href="#" className="link-reveal">
                                    Are.na ↗
                                </a>
                            </li>
                            <li>
                                <a href="#" className="link-reveal">
                                    Read.cv ↗
                                </a>
                            </li>
                            <li>
                                <a href="#" className="link-reveal">
                                    LinkedIn ↗
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-6 border-t border-ink-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-bone-muted">
                    <span>© 2026 Studio Nova — Independent Studio</span>
                    <span>Crafted in New Delhi · Built with care</span>
                    
                </div>
            </div>
        </footer>
    );
}
