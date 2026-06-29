import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "sonner";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const ref = useRef(null);
    const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", brief: "" });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-mega span", {
                yPercent: 110,
                duration: 1.2,
                ease: "expo.out",
                stagger: 0.04,
                scrollTrigger: { trigger: ".contact-mega", start: "top 80%" },
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.brief) {
            toast.error("Please fill in name, email and a short brief.");
            return;
        }
        toast.success("Brief received. We'll be in touch within 48h.", {
            description: `Thanks, ${form.name.split(" ")[0]}.`,
        });
        setForm({ name: "", email: "", company: "", budget: "", brief: "" });
    };

    const set = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

    return (
        <section
            id="contact"
            ref={ref}
            data-testid="contact-section"
            className="section-pad container-x"
        >
            <span className="label-mono">[ 06 / Contact ]</span>

            <h2 className="contact-mega mt-6 font-display uppercase tracking-tighter leading-[0.88] text-[13vw] sm:text-[14vw] lg:text-[12vw]">
                <span className="reveal-mask block">
                    <span className="block">Let’s build</span>
                </span>
                <span className="reveal-mask block">
                    <span className="block">
                        something <em className="not-italic text-acid">real.</em>
                    </span>
                </span>
            </h2>

            <div className="mt-20 grid grid-cols-12 gap-y-12 gap-x-6">
                <div className="col-span-12 lg:col-span-4 space-y-10">
                    <div>
                        <div className="label-mono mb-3">New business</div>
                        <a
                            href="mailto:deepakdass1326@gmail.com"
                            data-testid="contact-email"
                            className="font-display text-xl sm:text-2xl tracking-tight link-reveal break-all"
                        >
                            deepakdass1326@gmail.com
                        </a>
                    </div>
                    <div>
                        <div className="label-mono mb-3">WhatsApp</div>
                        <a
                            href="mailto:press@studionova.co"
                            className="font-display text-lg sm:text-2xl tracking-tight text-bone-muted link-reveal"
                        >
                            +91 7827709125 ↗
                        </a>
                    </div>
                    <div>
                        <div className="label-mono mb-3">BASED IN</div>
                        <ul className="space-y-2 text-bone text-base">
                            <li>New Delhi,India</li>
                            <li>Remote · Async‑friendly</li>
                            <li>Available now</li>
                        </ul>
                    </div>
                </div>

                <form
                    onSubmit={onSubmit}
                    data-testid="contact-form"
                    className="col-span-12 lg:col-span-8 lg:pl-12 space-y-10"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <Field
                            label="01 — Your name"
                            placeholder="Jane Doe"
                            value={form.name}
                            onChange={set("name")}
                            testid="field-name"
                        />
                        <Field
                            label="02 — Email"
                            type="email"
                            placeholder="jane@studio.com"
                            value={form.email}
                            onChange={set("email")}
                            testid="field-email"
                        />
                        <Field
                            label="03 — Company"
                            placeholder="Halcyon Labs"
                            value={form.company}
                            onChange={set("company")}
                            testid="field-company"
                        />
                        <Field
                            label="04 — Budget (USD)"
                            placeholder="$60k — $250k"
                            value={form.budget}
                            onChange={set("budget")}
                            testid="field-budget"
                        />
                    </div>

                    <div>
                        <label className="label-mono block mb-3">05 — The brief</label>
                        <textarea
                            data-testid="field-brief"
                            rows={4}
                            value={form.brief}
                            onChange={set("brief")}
                            placeholder="Tell us what you’re building and the rough timeline…"
                            className="w-full bg-transparent border-0 border-b border-ink-border focus:border-acid focus:outline-none py-3 text-bone text-lg sm:text-xl placeholder:text-bone-dim resize-none transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        data-testid="contact-submit"
                        className="group inline-flex items-center gap-4 btn-acid px-8 py-5 font-mono text-xs uppercase tracking-[0.22em]"
                    >
                        Send brief
                        <ArrowUpRight
                            size={18}
                            className="transition-transform duration-500 group-hover:rotate-45"
                        />
                    </button>
                </form>
            </div>
        </section>
    );
}

function Field({ label, type = "text", placeholder, value, onChange, testid }) {
    return (
        <div>
            <label className="label-mono block mb-3">{label}</label>
            <input
                data-testid={testid}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full bg-transparent border-0 border-b border-ink-border focus:border-acid focus:outline-none py-3 text-bone text-lg sm:text-xl placeholder:text-bone-dim transition-colors"
            />
        </div>
    );
}
