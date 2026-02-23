import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'

const slides = [
    {
        image: '/images/satori_family.jpg',
        headline: "Energy Don't Lie",
        sub: 'The Chikara Collection — SS 2025',
        position: 'center 30%',
    },
    {
        image: '/images/1.jpg',
        headline: 'Dressed in Grace',
        sub: 'Couture rooted in Kenyan identity',
        position: 'center center',
    },
    {
        image: '/images/3.jpg',
        headline: 'The Art of Presence',
        sub: 'Handcrafted pieces for those who lead',
        position: 'center center',
    },
]

export default function Hero() {
    const [current, setCurrent] = useState(0)
    const [progress, setProgress] = useState(0)
    const slidesRef = useRef([])
    const progressRef = useRef(null)
    const intervalRef = useRef(null)
    const progressAnimRef = useRef(null)
    const isAnimating = useRef(false)
    const DURATION = 5500

    const goToSlide = useCallback((next) => {
        if (isAnimating.current) return
        isAnimating.current = true

        const currentSlide = slidesRef.current[current]
        const nextSlide = slidesRef.current[next]

        if (progressAnimRef.current) progressAnimRef.current.kill()
        setProgress(0)

        // Bring next slide on top, set invisible
        gsap.set(nextSlide, { opacity: 0, zIndex: 2 })
        gsap.set(currentSlide, { zIndex: 1 })

        // Crossfade both image + text together (they're one unit per slide)
        gsap.to(nextSlide, {
            opacity: 1,
            duration: 1.2,
            ease: 'power2.inOut',
            onComplete: () => {
                // Reset z-indexes after transition
                gsap.set(currentSlide, { opacity: 0, zIndex: 0 })
                gsap.set(nextSlide, { zIndex: 1 })
                isAnimating.current = false
                setCurrent(next)

                progressAnimRef.current = gsap.to(progressRef, {
                    current: 100,
                    duration: DURATION / 1000,
                    ease: 'none',
                    onUpdate: () => setProgress(progressRef.current),
                })
            },
        })
    }, [current])

    // Entrance animation — fade in first slide
    useEffect(() => {
        gsap.set(slidesRef.current[0], { opacity: 0, zIndex: 1 })
        // hide all others
        slidesRef.current.slice(1).forEach(s => gsap.set(s, { opacity: 0, zIndex: 0 }))

        gsap.to(slidesRef.current[0], {
            opacity: 1,
            duration: 1.6,
            ease: 'power2.out',
            delay: 0.2,
        })

        progressAnimRef.current = gsap.to(progressRef, {
            current: 100,
            duration: DURATION / 1000,
            ease: 'none',
            onUpdate: () => setProgress(progressRef.current),
        })
    }, [])

    // Auto-advance
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const next = (current + 1) % slides.length
            goToSlide(next)
        }, DURATION)
        return () => clearInterval(intervalRef.current)
    }, [current, goToSlide])

    const handleIndicatorClick = (idx) => {
        if (idx === current || isAnimating.current) return
        clearInterval(intervalRef.current)
        goToSlide(idx)
    }

    return (
        <section id="hero" className="relative w-full h-screen min-h-[500px] overflow-hidden" style={{ backgroundColor: '#DCDCDC' }}>
            {/* Slides — each slide carries its own image + text overlay */}
            {slides.map((slide, idx) => (
                <div
                    key={idx}
                    ref={(el) => (slidesRef.current[idx] = el)}
                    className="absolute inset-0 w-full h-full"
                    style={{ opacity: 0, zIndex: 0 }}
                >
                    {/* Image */}
                    <img
                        src={slide.image}
                        alt={slide.headline}
                        className="w-full h-full object-contain"
                        style={{ objectPosition: slide.position }}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                    />

                    {/* Per-slide text — positioned at bottom over a soft gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-beige via-brand-beige/80 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center text-center pb-20 px-6 gap-3">
                        <p className="font-sans text-[10px] tracking-widest-2 text-brand-brown/50 uppercase">
                            Nairobi · Kenya
                        </p>
                        <h1 className="font-serif text-brand-brown text-4xl md:text-6xl lg:text-7xl font-light leading-none">
                            {slide.headline}
                        </h1>
                        <p className="font-sans text-brand-brown/60 text-xs md:text-sm tracking-widest uppercase">
                            {slide.sub}
                        </p>
                        <a
                            href="#collection"
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="mt-3 btn-luxury text-brand-brown border-brand-brown"
                        >
                            Shop Collection
                        </a>
                    </div>
                </div>
            ))}

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleIndicatorClick(idx)}
                        className="relative h-px bg-brand-brown/20 overflow-hidden cursor-pointer transition-all duration-400"
                        style={{ width: idx === current ? '48px' : '24px' }}
                        aria-label={`Go to slide ${idx + 1}`}
                    >
                        {idx === current && (
                            <span
                                className="absolute inset-y-0 left-0 bg-brand-brown"
                                style={{ width: `${progress}%` }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Scroll cue */}
            <div className="absolute bottom-6 right-8 md:right-12 z-20 flex flex-col items-center gap-2 opacity-40">
                <span className="font-sans text-brand-brown text-[9px] tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>
                    Scroll
                </span>
                <span className="block w-px h-10 bg-brand-brown/60" />
            </div>
        </section>
    )
}
