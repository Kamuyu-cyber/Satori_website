import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import products from '../data/products'

export default function ProductDetail() {
    const { id } = useParams()
    const product = products.find((p) => p.id === Number(id))
    const [selectedSize, setSelectedSize] = useState(null)
    const [addedToCart, setAddedToCart] = useState(false)

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-brand-beige">
                <h1 className="font-serif text-4xl text-brand-brown mb-4">Product Not Found</h1>
                <Link
                    to="/"
                    className="btn-luxury text-brand-brown border-brand-brown"
                >
                    ← Back to Home
                </Link>
            </div>
        )
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size first.')
            return
        }
        setAddedToCart(true)
        setTimeout(() => setAddedToCart(false), 2500)
    }

    return (
        <div className="min-h-screen bg-brand-beige">
            {/* Nav bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/95 backdrop-blur-md border-b border-brand-brown/10">
                <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
                    <Link
                        to="/"
                        className="font-serif text-xl md:text-2xl font-light tracking-widest-2 text-brand-brown"
                    >
                        SATORI
                    </Link>
                    <Link
                        to="/"
                        className="font-sans text-xs tracking-widest uppercase text-brand-brown hover:opacity-60 transition-opacity"
                    >
                        ← Back to Collection
                    </Link>
                </div>
            </nav>

            {/* Product Content */}
            <main className="pt-24 md:pt-32 pb-20 max-w-screen-xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    {/* Product Image */}
                    <div className="aspect-[3/4] overflow-hidden bg-[#DCDCDC]">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col gap-6 md:gap-8 md:py-8">
                        {/* Tag */}
                        <span className={`font-sans text-[10px] tracking-widest uppercase self-start px-3 py-1 ${product.soldOut
                                ? 'bg-brand-brown text-white border border-brand-brown'
                                : 'text-brand-brown/50 border border-brand-brown/20'
                            }`}>
                            {product.soldOut ? 'Sold Out' : product.tag}
                        </span>

                        {/* Name & Price */}
                        <div>
                            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-brand-brown leading-tight mb-3">
                                {product.name}
                            </h1>
                            <p className={`font-sans text-lg md:text-xl tracking-wide ${product.soldOut ? 'text-brand-brown/40 line-through' : 'text-brand-brown/70'}`}>
                                {product.price}
                            </p>
                            {product.soldOut && (
                                <p className="font-sans text-xs tracking-widest uppercase text-brand-brown/60 mt-1">This item is sold out</p>
                            )}
                        </div>

                        {/* Divider */}
                        <span className="line-accent" />

                        {/* Description */}
                        <p className="font-sans text-sm md:text-base text-brand-brown/70 leading-relaxed max-w-lg">
                            {product.description}
                        </p>

                        {/* Size Selector */}
                        <div>
                            <p className="font-sans text-xs tracking-widest uppercase text-brand-brown/50 mb-3">
                                Select Size
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-12 h-12 flex items-center justify-center font-sans text-xs tracking-wide border transition-all duration-300 ${selectedSize === size
                                            ? 'bg-brand-brown text-white border-brand-brown'
                                            : 'border-brand-brown/20 text-brand-brown hover:border-brand-brown'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <button
                            onClick={handleAddToCart}
                            disabled={product.soldOut}
                            className={`w-full md:max-w-sm font-sans text-xs tracking-widest uppercase py-4 px-8 transition-all duration-500 ${product.soldOut
                                    ? 'bg-brand-brown/20 text-brand-brown/40 border border-brand-brown/20 cursor-not-allowed'
                                    : addedToCart
                                        ? 'bg-green-800 text-white border border-green-800'
                                        : 'bg-brand-brown text-white border border-brand-brown hover:bg-transparent hover:text-brand-brown'
                                }`}
                        >
                            {product.soldOut ? 'Sold Out' : addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
                        </button>

                        {/* Wishlist */}
                        <button className="w-full md:max-w-sm font-sans text-xs tracking-widest uppercase py-4 px-8 border border-brand-brown/20 text-brand-brown hover:border-brand-brown transition-colors duration-300">
                            Add to Wishlist
                        </button>

                        {/* Details */}
                        <div className="mt-4 border-t border-brand-brown/10 pt-6">
                            <p className="font-sans text-xs tracking-widest uppercase text-brand-brown/50 mb-4">
                                Product Details
                            </p>
                            <ul className="flex flex-col gap-2">
                                {product.details.map((detail, idx) => (
                                    <li
                                        key={idx}
                                        className="font-sans text-sm text-brand-brown/60 flex items-start gap-2"
                                    >
                                        <span className="text-brand-brown/30 mt-0.5">—</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Shipping note */}
                        <div className="border-t border-brand-brown/10 pt-6 flex flex-col gap-2">
                            <p className="font-sans text-[11px] text-brand-brown/40 tracking-wide">
                                Free shipping across Kenya on orders above KES 10,000
                            </p>
                            <p className="font-sans text-[11px] text-brand-brown/40 tracking-wide">
                                Estimated delivery: 3–5 business days (Nairobi) · 5–7 days (rest of Kenya)
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
