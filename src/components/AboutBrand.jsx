import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutBrand() {
    const sectionRef = useRef(null)
    const imageRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image parallax
            gsap.fromTo(
                imageRef.current,
                { yPercent: 5, opacity: 0 },
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                }
            )

            // Content reveal
            gsap.fromTo(
                contentRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.18,
                    duration: 0.9,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 80%',
                    },
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-24 md:py-36 bg-brand-beige"
        >
            <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                {/* Image */}
                <div ref={imageRef} className="img-zoom-wrapper aspect-[3/4] overflow-hidden">
                    <img
                        src="/images/satori_family(2).jpg"
                        alt="Satori brand identity"
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                    />
                </div>

                {/* Content */}
                <div ref={contentRef} className="flex flex-col gap-6 md:gap-8">
                    <p className="font-sans text-xs tracking-widest uppercase text-brand-brown/60">
                        — Our Story
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-brown leading-tight">
                        Where Africa<br />
                        <em>Meets Elegance</em>
                    </h2>
                    <span className="line-accent" />
                    <p className="font-sans text-sm md:text-base text-brand-brown/70 leading-relaxed max-w-sm">
                        Satori was born on the streets of Nairobi with one conviction — that luxury has always existed here. We craft premium pieces that honour African artistry while speaking the language of international fashion.
                    </p>
                    <p className="font-sans text-sm md:text-base text-brand-brown/70 leading-relaxed max-w-sm">
                        Each garment is a story of culture, confidence, and craft. Designed in Kenya. Worn by those who lead.
                    </p>
                    <div className="pt-2">
                        <a
                            href="#lookbook"
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#lookbook')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="btn-luxury text-brand-brown border-brand-brown"
                        >
                            Discover More
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-8 border-t border-brand-brown/10 mt-4">
                        {[
                            { value: '2021', label: 'Founded' },
                            { value: '18+', label: 'Designs' },
                            { value: 'NBI', label: 'Origin' },
                        ].map((item) => (
                            <div key={item.label} className="text-center">
                                <p className="font-serif text-2xl md:text-3xl text-brand-brown font-light">{item.value}</p>
                                <p className="font-sans text-[10px] tracking-widest uppercase text-brand-brown/50 mt-1">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
