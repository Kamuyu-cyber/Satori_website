const socialLinks = [
    {
        name: 'Instagram',
        href: 'https://instagram.com',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
    {
        name: 'TikTok',
        href: 'https://tiktok.com',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.23 8.23 0 004.81 1.55V6.82a4.85 4.85 0 01-1.04-.13z" />
            </svg>
        ),
    },
    {
        name: 'Pinterest',
        href: 'https://pinterest.com',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
        ),
    },
]

const footerLinks = {
    Shop: [
        { label: 'New Arrivals', target: '#collection' },
        { label: 'Jackets', target: '#collection' },
        { label: 'Shirts', target: '#collection' },
        { label: 'Accessories', target: '#collection' },
    ],
    Info: [
        { label: 'About Satori', target: '#about' },
        { label: 'Sustainability', target: '#about' },
        { label: 'Lookbook', target: '#lookbook' },
        { label: 'Press', target: '#contact' },
    ],
    Help: [
        { label: 'Size Guide', target: '#collection' },
        { label: 'Shipping', target: '#contact' },
        { label: 'Returns', target: '#contact' },
        { label: 'Contact', target: '#contact' },
    ],
}

const handleScrollTo = (e, target) => {
    e.preventDefault()
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
    return (
        <footer className="bg-brand-brown-dark text-brand-beige/60">
            {/* Main Footer */}
            <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                    {/* Brand column */}
                    <div className="md:col-span-2 flex flex-col gap-5">
                        <a
                            href="#hero"
                            onClick={(e) => handleScrollTo(e, '#hero')}
                            className="font-serif text-3xl text-brand-beige tracking-widest-2 font-light"
                        >
                            SATORI
                        </a>
                        <p className="font-sans text-xs leading-relaxed max-w-xs text-brand-beige/50">
                            Premium Kenyan fashion rooted in culture, crafted for the modern world. Every piece tells a story.
                        </p>
                        <div className="flex gap-4 mt-2">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    aria-label={link.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-beige/40 hover:text-brand-beige transition-colors duration-300"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="flex flex-col gap-4">
                            <h4 className="font-sans text-[10px] tracking-widest uppercase text-brand-beige/40">
                                {category}
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.target}
                                            onClick={(e) => handleScrollTo(e, link.target)}
                                            className="font-sans text-xs text-brand-beige/50 hover:text-brand-beige transition-colors duration-300 tracking-wide"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-brand-beige/5">
                <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="font-sans text-[10px] tracking-wide text-brand-beige/30">
                        © {new Date().getFullYear()} Satori. All rights reserved. Nairobi, Kenya.
                    </p>
                    <div className="flex gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                            <a
                                key={item}
                                href="#contact"
                                onClick={(e) => handleScrollTo(e, '#contact')}
                                className="font-sans text-[10px] tracking-wide text-brand-beige/30 hover:text-brand-beige/60 transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
