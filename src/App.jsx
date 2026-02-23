import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCollection from './components/FeaturedCollection'
import AboutBrand from './components/AboutBrand'
import Lookbook from './components/Lookbook'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ProductDetail from './components/ProductDetail'

gsap.registerPlugin(ScrollTrigger)

function HomePage() {
    useEffect(() => {
        // Lenis smooth scroll setup
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
            smoothTouch: false,
        })

        // Sync Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update)
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })
        gsap.ticker.lagSmoothing(0)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <div className="min-h-screen bg-brand-cream">
            <Navbar />
            <main>
                <Hero />

                {/* "As Seen" Marquee Banner */}
                <div className="bg-brand-beige border-y border-brand-brown/10 py-4 overflow-hidden">
                    <div className="flex whitespace-nowrap animate-marquee gap-12">
                        {[...Array(6)].fill(['Nairobi', '·', 'Handcrafted', '·', 'Premium Quality', '·', 'Kenyan Luxury', '·', 'SS 2025', '·']).flat().map((word, i) => (
                            <span key={i} className="font-sans text-[10px] tracking-widest uppercase text-brand-brown/40">
                                {word}
                            </span>
                        ))}
                    </div>
                </div>

                <FeaturedCollection />
                <AboutBrand />
                <Lookbook />
                <Newsletter />
            </main>
            <Footer />
        </div>
    )
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    )
}
