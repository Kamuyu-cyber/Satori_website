import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const galleryItems = [
    {
        image: '/images/2.jpg',
        alt: 'Satori lookbook 1',
        title: 'The Chikara Edit',
        description:
            'A study in structured ease — the Chikara jacket layered over a relaxed knit and wide-leg trousers. Shot in natural light to capture the depth of the tapestry weave. This look is about confidence with ease.',
    },
    {
        image: '/images/4.jpg',
        alt: 'Satori lookbook 2',
        title: 'Urban Silhouette',
        description:
            'Two bodies, one energy. This editorial explores the Satori co-ord worn two ways — the Chikara 12 Denim set styled for an evening moment in the city. The oversized silhouette creates a natural authority.',
    },
    {
        image: '/images/chikara_12.jpg',
        alt: 'Satori lookbook 4',
        title: 'Chikara Street',
        description:
            'The Chikara Tapestry Jacket styled for the Nairobi street. Bold, worn-in, and unmistakably Satori. The denim base lets the jacket do the talking, grounding the look in everyday luxury.',
    },
    {
        image: '/images/Chikara_snow(sw).jpg',
        alt: 'Satori lookbook 5',
        title: 'Snow Edit — Limited Edition',
        description:
            'The Chikara Snow Jacket. A limited-edition piece featuring a pristine white tapestry with intricate floral patterns, individually cut and hand-finished in our Nairobi studio. Only a few remain.',
    },
    {
        image: '/images/satori_12(2).jpg',
        alt: 'Satori lookbook 6',
        title: 'Heritage Craft',
        description:
            'Rooted in craft. This frame captures the Satori ethos — the intersection of Kenyan heritage, modern tailoring, and intentional dressing. Every stitch tells a story.',
    },
    {
        image: '/images/satori_family(2).jpg',
        alt: 'Satori family lookbook',
        title: 'The Satori Family',
        description:
            'The full cast, the full collection. This is what Satori looks like when every piece comes together — each model wearing a different story, united by the same energy. Family first.',
    },
]

function LookbookModal({ item, onClose }) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKey)
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
    }, [onClose])

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 md:p-10"
            onClick={onClose}
        >
            <div
                className="relative bg-[#FAF8F4] w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center text-brand-brown/70 hover:text-brand-brown transition-colors duration-200"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden flex-shrink-0">
                    <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* Text content */}
                <div className="flex flex-col justify-center px-8 md:px-12 py-10 md:py-16 w-full md:w-1/2">
                    <p className="font-sans text-xs tracking-widest uppercase text-brand-brown/50 mb-4">
                        — The Lookbook
                    </p>
                    <h3 className="font-serif text-3xl md:text-4xl font-light text-brand-brown mb-6 leading-snug">
                        {item.title}
                    </h3>
                    <div className="w-8 h-px bg-brand-brown/30 mb-6" />
                    <p className="font-sans text-sm text-brand-brown/70 leading-relaxed">
                        {item.description}
                    </p>
                    <a
                        href="#collection"
                        onClick={(e) => {
                            e.preventDefault()
                            onClose()
                            setTimeout(() => {
                                document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth' })
                            }, 300)
                        }}
                        className="btn-luxury text-brand-brown border-brand-brown mt-10 self-start"
                    >
                        Shop the Look
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function Lookbook() {
    const sectionRef = useRef(null)
    const headingRef = useRef(null)
    const [activeItem, setActiveItem] = useState(null)

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
                        className="gallery-item img-zoom-wrapper group relative overflow-hidden cursor-pointer aspect-[4/5]"
                        onClick={() => setActiveItem(item)}
                    >
                        <img
                            src={item.image}
                            alt={item.alt}
                            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/30 transition-all duration-500 flex items-center justify-center">
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

            {/* Lightbox Modal */}
            {activeItem && (
                <LookbookModal item={activeItem} onClose={() => setActiveItem(null)} />
            )}
        </section>
    )
}
