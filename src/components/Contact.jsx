import { useState } from 'react'

const contactInfo = [
    {
        label: 'Location',
        value: 'Nairobi, Kenya',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
        ),
    },
    {
        label: 'Email',
        value: 'hello@satoribykoba.shop',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
        ),
    },
    {
        label: 'Instagram',
        value: '@satoribykoba',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
]

const services = [
    'New Arrivals',
    'Custom Orders',
    'Wholesale Inquiry',
    'Collaboration',
    'Press & Media',
    'General Inquiry',
]

export default function Contact() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    })
    const [status, setStatus] = useState('idle') // idle | sending | success | error

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        // Simulate submission (replace with real API call if needed)
        await new Promise((r) => setTimeout(r, 1200))
        setStatus('success')
        setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' })
    }

    return (
        <section id="contact" className="bg-brand-brown-dark py-24 md:py-32">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase text-brand-beige/40 mb-4">
                        Get In Touch
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-brand-beige font-light leading-tight">
                        We'd Love to<br />
                        <em className="italic">Hear From You</em>
                    </h2>
                    <p className="mt-4 font-sans text-sm text-brand-beige/50 max-w-md mx-auto leading-relaxed">
                        Whether you have a question about our pieces, a custom request, or just want to say hello — our team is here for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

                    {/* Left — Contact Info */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        {contactInfo.map((item) => (
                            <div key={item.label} className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-beige/5 border border-brand-beige/10 flex items-center justify-center shrink-0 text-brand-beige/50">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="font-sans text-[10px] tracking-widest uppercase text-brand-beige/30 mb-1">
                                        {item.label}
                                    </p>
                                    <p className="font-sans text-sm text-brand-beige/70">{item.value}</p>
                                </div>
                            </div>
                        ))}

                        {/* Decorative quote */}
                        <div className="mt-4 border-l border-brand-beige/10 pl-5">
                            <p className="font-serif text-lg italic text-brand-beige/30 leading-relaxed">
                                "Fashion is not something that exists in dresses only. Fashion is in the sky, in the street."
                            </p>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="lg:col-span-3">
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center text-center py-20 gap-4">
                                <div className="w-14 h-14 rounded-full bg-brand-beige/10 flex items-center justify-center">
                                    <svg className="w-7 h-7 text-brand-beige" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h3 className="font-serif text-2xl text-brand-beige font-light">Message Sent</h3>
                                <p className="font-sans text-sm text-brand-beige/50">
                                    Thank you for reaching out. We'll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-4 font-sans text-xs tracking-widest uppercase text-brand-beige/40 hover:text-brand-beige border-b border-brand-beige/20 hover:border-brand-beige/60 transition-colors pb-0.5"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                {/* First Name */}
                                <div className="flex flex-col gap-2">
                                    <label className="font-sans text-[10px] tracking-widest uppercase text-brand-beige/40">
                                        First Name <span className="text-brand-beige/30">*</span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        placeholder="e.g. Amara"
                                        className="bg-brand-beige/5 border border-brand-beige/10 rounded-sm px-4 py-3 font-sans text-sm text-brand-beige placeholder:text-brand-beige/20 focus:outline-none focus:border-brand-beige/30 transition-colors"
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="flex flex-col gap-2">
                                    <label className="font-sans text-[10px] tracking-widest uppercase text-brand-beige/40">
                                        Last Name <span className="text-brand-beige/30">*</span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        placeholder="e.g. Wanjiku"
                                        className="bg-brand-beige/5 border border-brand-beige/10 rounded-sm px-4 py-3 font-sans text-sm text-brand-beige placeholder:text-brand-beige/20 focus:outline-none focus:border-brand-beige/30 transition-colors"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label className="font-sans text-[10px] tracking-widest uppercase text-brand-beige/40">
                                        Email <span className="text-brand-beige/30">*</span>
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="bg-brand-beige/5 border border-brand-beige/10 rounded-sm px-4 py-3 font-sans text-sm text-brand-beige placeholder:text-brand-beige/20 focus:outline-none focus:border-brand-beige/30 transition-colors"
                                    />
                                </div>

                                {/* Phone */}
                                <div className="flex flex-col gap-2">
                                    <label className="font-sans text-[10px] tracking-widest uppercase text-brand-beige/40">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+254 700 000 000"
                                        className="bg-brand-beige/5 border border-brand-beige/10 rounded-sm px-4 py-3 font-sans text-sm text-brand-beige placeholder:text-brand-beige/20 focus:outline-none focus:border-brand-beige/30 transition-colors"
                                    />
                                </div>

                                {/* Service Dropdown — full width */}
                                <div className="sm:col-span-2 flex flex-col gap-2">
                                    <label className="font-sans text-[10px] tracking-widest uppercase text-brand-beige/40">
                                        Inquiry Type <span className="text-brand-beige/30">*</span>
                                    </label>
                                    <select
                                        required
                                        name="service"
                                        value={form.service}
                                        onChange={handleChange}
                                        className="bg-brand-beige/5 border border-brand-beige/10 rounded-sm px-4 py-3 font-sans text-sm text-brand-beige/70 focus:outline-none focus:border-brand-beige/30 transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled className="bg-brand-brown-dark">
                                            Select an inquiry type
                                        </option>
                                        {services.map((s) => (
                                            <option key={s} value={s} className="bg-brand-brown-dark">
                                                {s}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message — full width */}
                                <div className="sm:col-span-2 flex flex-col gap-2">
                                    <label className="font-sans text-[10px] tracking-widest uppercase text-brand-beige/40">
                                        Message <span className="text-brand-beige/30">*</span>
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Tell us what's on your mind..."
                                        className="bg-brand-beige/5 border border-brand-beige/10 rounded-sm px-4 py-3 font-sans text-sm text-brand-beige placeholder:text-brand-beige/20 focus:outline-none focus:border-brand-beige/30 transition-colors resize-none"
                                    />
                                </div>

                                {/* Submit — full width */}
                                <div className="sm:col-span-2">
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full bg-brand-beige text-brand-brown-dark font-sans text-xs tracking-widest uppercase py-4 hover:bg-brand-cream transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'sending' ? 'Sending…' : 'Send Message →'}
                                    </button>
                                </div>

                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
