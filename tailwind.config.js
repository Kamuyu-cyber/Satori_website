/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-brown': '#5C4033',
                'brand-brown-dark': '#3E2A20',
                'brand-beige': '#F5F5DC',
                'brand-beige-dark': '#E8E8C8',
                'brand-white': '#FFFFFF',
                'brand-cream': '#FAF8F4',
            },
            fontFamily: {
                serif: ['Cormorant Garamond', 'Georgia', 'serif'],
                sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            },
            fontSize: {
                'hero': 'clamp(3rem, 8vw, 7rem)',
                'display': 'clamp(2rem, 5vw, 4.5rem)',
                'headline': 'clamp(1.5rem, 3vw, 2.5rem)',
            },
            letterSpacing: {
                'widest-2': '0.25em',
                'widest-3': '0.35em',
            },
            transitionTimingFunction: {
                'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
            },
            transitionDuration: {
                'luxury': '800ms',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                'marquee': 'marquee 25s linear infinite',
            },
        },
    },
    plugins: [],
}
