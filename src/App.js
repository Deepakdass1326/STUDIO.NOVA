import { Suspense, lazy, useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";

// Lazy-loaded below-the-fold sections
const Marquee = lazy(() => import("@/components/Marquee"));
const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Work = lazy(() => import("@/components/Work"));
const Process = lazy(() => import("@/components/Process"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => (
    <div className="h-[40vh] w-full grid place-items-center text-bone-muted font-mono text-xs tracking-[0.22em] uppercase">
        Loading…
    </div>
);

function Home() {
    const [booting, setBooting] = useState(true);

    useEffect(() => {
        if (!booting) document.body.style.overflow = "";
        else document.body.style.overflow = "hidden";
    }, [booting]);

    return (
        <div className="App grain min-h-screen bg-ink-base text-bone" data-testid="home">
            {booting && <Preloader onDone={() => setBooting(false)} />}
            <CustomCursor />
            <SmoothScroll>
                <Navbar />
                <main>
                    <Hero />

                    <Suspense fallback={<SectionFallback />}>
                        <Marquee />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <About />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <Services />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <Work />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <Process />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <Pricing />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <Contact />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <Footer />
                    </Suspense>
                </main>
            </SmoothScroll>
            <Toaster
                position="bottom-right"
                theme="dark"
                toastOptions={{
                    style: {
                        background: "#0E0E0E",
                        color: "#F5F5F0",
                        border: "1px solid #262626",
                        borderRadius: 0,
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "12px",
                    },
                }}
            />
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
