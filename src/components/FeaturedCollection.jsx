import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import products from '../data/products'

gsap.registerPlugin(ScrollTrigger)



export default function FeaturedCollection() {
    const navigate = useNavigate()
    const sectionRef = useRef(null)
    const headingRef = useRef(null)
    const gridRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading reveal
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.0,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 85%',
                    },
                }
            )

            // Cards stagger reveal
            gsap.fromTo(
                '.product-card',
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    stagger: 0.12,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 80%',
                    },
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="collection" ref={sectionRef} className="py-24 md:py-36 px-6 md:px-12 max-w-screen-xl mx-auto">
            {/* Section Header */}
            <div ref={headingRef} className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                    <p className="font-sans text-xs tracking-widest uppercase text-brand-brown/60 mb-3">
                        — SS 2025 Collection
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-brown leading-tight">
                        Featured Pieces
                    </h2>
                </div>
                <a
                    href="#collection"
                    onClick={(e) => {
                        e.preventDefault()
                        document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="font-sans text-xs tracking-widest uppercase text-brand-brown border-b border-brand-brown pb-0.5 transition-opacity hover:opacity-50 self-start md:self-auto"
                >
                    View All →
                </a>
            </div>

            {/* Product Grid */}
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="product-card group cursor-pointer"
                        onClick={() => navigate(`/product/${product.id}`)}
                    >
                        {/* Image */}
                        <div className="img-zoom-wrapper relative aspect-[3/4] bg-brand-beige overflow-hidden mb-4">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                            />
                            {/* Tag */}
                            <span className="absolute top-4 left-4 font-sans text-[10px] tracking-widest uppercase bg-brand-white/90 text-brand-brown px-3 py-1">
                                {product.tag}
                            </span>
                            {/* Hover CTA */}
                            <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                <button
                                    onClick={(e) => { e.stopPropagation(); navigate(`/product/${product.id}`) }}
                                    className="font-sans text-xs tracking-widest uppercase bg-brand-white/95 text-brand-brown px-8 py-3 hover:bg-brand-brown hover:text-white transition-colors duration-300"
                                >
                                    Quick View
                                </button>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex items-start justify-between gap-2">
                            <div>
                                <h3 className="font-serif text-lg text-brand-brown font-light leading-tight mb-1 group-hover:opacity-70 transition-opacity">
                                    {product.name}
                                </h3>
                                <p className="font-sans text-xs text-brand-brown/60 tracking-wide">
                                    {product.price}
                                </p>
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); navigate(`/product/${product.id}`) }}
                                className="mt-1 w-7 h-7 flex items-center justify-center border border-brand-brown/20 text-brand-brown/50 hover:border-brand-brown hover:text-brand-brown transition-colors text-lg font-light flex-shrink-0"
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
