import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const galleryItems = [
    { image: '/images/2.jpg', span: 'tall', alt: 'Satori lookbook 1' },
    { image: '/images/4.jpg', span: 'normal', alt: 'Satori lookbook 2' },
    { image: '/images/Chikara_12.jpg', span: 'normal', alt: 'Satori lookbook 3' },
    { image: '/images/chikara_12.jpg', span: 'tall', alt: 'Satori lookbook 4' },
    { image: '/images/Chikara_snow(sw).jpg', span: 'normal', alt: 'Satori lookbook 5' },
    { image: '/images/satori_12(2).jpg', span: 'normal', alt: 'Satori lookbook 6' },
]

export default function Lookbook() {
    const sectionRef = useRef(null)
    const headingRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 1.0, ease: 'power3.out',
                    scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
                }
            )

            gsap.fromTo(
                '.gallery-item',
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, stagger: 0.1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: '.gallery-grid', start: 'top 80%' },
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="lookbook" ref={sectionRef} className="py-24 md:py-36 px-6 md:px-12 max-w-screen-xl mx-auto">
            {/* Header */}
            <div ref={headingRef} className="mb-16 text-center">
                <p className="font-sans text-xs tracking-widest uppercase text-brand-brown/60 mb-3">
                    — Visual Stories
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-brown">
                    The Lookbook
                </h2>
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {galleryItems.map((item, idx) => (
                    <div
                        key={idx}
                        className={`gallery-item img-zoom-wrapper group relative overflow-hidden cursor-pointer ${item.span === 'tall' ? 'row-span-2' : ''
                            }`}
                        style={{ aspectRatio: item.span === 'tall' ? '3/4' : '4/5' }}
                    >
                        <img
                            src={item.image}
                            alt={item.alt}
                            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/25 transition-all duration-500 flex items-center justify-center">
                            <span className="font-sans text-xs tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/70 px-5 py-2">
                                View
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
                <a
                    href="#collection"
                    onClick={(e) => {
                        e.preventDefault()
                        document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="btn-luxury text-brand-brown border-brand-brown"
                >
                    Shop the Look
                </a>
            </div>
        </section>
    )
}
