import { useEffect, useRef, useState } from 'react'

const navLinks = [
    { label: 'Collection', href: '#collection' },
    { label: 'About', href: '#about' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const target = document.querySelector(href)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
                        ? 'bg-brand-cream/95 backdrop-blur-md border-b border-brand-brown/10'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a
                        href="/"
                        className={`font-serif text-xl md:text-2xl font-light tracking-widest-2 transition-colors duration-500 ${scrolled ? 'text-brand-brown' : 'text-white'
                            }`}
                    >
                        SATORI
                    </a>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:opacity-60 ${scrolled ? 'text-brand-brown' : 'text-white'
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#collection"
                            onClick={(e) => handleNavClick(e, '#collection')}
                            className={`hidden md:inline-block font-sans text-xs tracking-widest uppercase border px-5 py-2 transition-all duration-500 ${scrolled
                                    ? 'border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white'
                                    : 'border-white text-white hover:bg-white hover:text-brand-brown'
                                }`}
                        >
                            Shop
                        </a>
                        <button
                            className={`md:hidden flex flex-col gap-[5px] cursor-pointer p-1 transition-colors ${scrolled ? 'text-brand-brown' : 'text-white'
                                }`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 bg-brand-cream flex flex-col items-center justify-center transition-all duration-500 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <ul className="flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="font-serif text-3xl font-light text-brand-brown tracking-wide"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#collection"
                            onClick={(e) => handleNavClick(e, '#collection')}
                            className="btn-luxury text-brand-brown border-brand-brown mt-4"
                        >
                            Shop Collection
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
