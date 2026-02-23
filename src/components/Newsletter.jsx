import { useRef, useState } from 'react'

export default function Newsletter() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.trim()) {
            setSubmitted(true)
        }
    }

    return (
        <section
            id="contact"
            className="py-24 md:py-36 bg-brand-brown relative overflow-hidden"
        >
            {/* Decorative background text */}
            <div
                className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
                aria-hidden="true"
            >
                <span className="font-serif text-[20vw] font-light text-white/[0.04] whitespace-nowrap leading-none">
                    SATORI
                </span>
            </div>

            <div className="relative z-10 max-w-xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-6">
                <p className="font-sans text-xs tracking-widest uppercase text-brand-beige/50">
                    — Stay Connected
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-beige leading-tight">
                    Join the <em>Inner Circle</em>
                </h2>
                <p className="font-sans text-sm text-brand-beige/60 leading-relaxed max-w-sm">
                    Be the first to access new collections, exclusive drops, and behind-the-scenes moments from our Nairobi studio.
                </p>

                {submitted ? (
                    <div className="flex flex-col items-center gap-3 py-4">
                        <span className="font-serif text-2xl text-brand-beige italic">You're in.</span>
                        <p className="font-sans text-xs text-brand-beige/50 tracking-wide">Welcome to Satori — we'll be in touch soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="w-full max-w-sm mt-4">
                        <div className="relative flex items-center border-b border-brand-beige/30 pb-px focus-within:border-brand-beige transition-colors duration-300">
                            <input
                                ref={inputRef}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                required
                                className="flex-1 bg-transparent font-sans text-sm text-brand-beige placeholder-brand-beige/30 outline-none py-3 pr-4 tracking-wide"
                            />
                            <button
                                type="submit"
                                className="font-sans text-[10px] tracking-widest uppercase text-brand-beige hover:text-white transition-colors duration-300 whitespace-nowrap"
                            >
                                Subscribe →
                            </button>
                        </div>
                        <p className="font-sans text-[10px] text-brand-beige/30 tracking-wide mt-3 text-center">
                            No spam. Unsubscribe at any time.
                        </p>
                    </form>
                )}

                {/* Divider */}
                <div className="w-12 h-px bg-brand-beige/20 mt-4" />
                <p className="font-sans text-[10px] tracking-widest uppercase text-brand-beige/30">
                    Nairobi, Kenya
                </p>
            </div>
        </section>
    )
}
