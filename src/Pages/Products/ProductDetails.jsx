import React from 'react';
import { FaStar, FaRegStar, FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';
import { useTheme } from '../../Auth/ThemeContext';

function ProductDetails({ product }) {
    const { styles } = useTheme();

    // Static isInWishlist for UI display
    const isInWishlist = false;

    const renderRating = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400" />);
            }
        }
        return stars;
    };

    if (!product) {
        return <div className={`w-full px-4 py-3 ${styles.container} ${styles.text}`}>No product selected</div>;
    }

    return (
        <div className={`w-full max-w-4xl mx-auto px-4 py-6 ${styles.container} ${styles.text}`}>
            <div className="flex flex-col md:flex-row gap-6">
                {/* Product Image */}
                <div className="md:w-1/2">
                    <div className="relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-96 object-contain rounded-lg"
                        />
                        {!product.inStock && (
                            <div className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                                Out of Stock
                            </div>
                        )}
                        <button
                            className={`${styles.container} bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 absolute top-2 left-2`}
                        >
                            {isInWishlist ? (
                                <FaHeart className="text-red-500 text-xl" />
                            ) : (
                                <FaRegHeart className={`${styles.text} text-xl`} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Product Details */}
                <div className="md:w-1/2 flex flex-col">
                    <h1 className={`text-2xl font-bold ${styles.text} mb-2`}>{product.name}</h1>
                    <p className={`text-sm ${styles.text} opacity-80 mb-2`}>By {product.manufacturer}</p>

                    <div className="flex items-center mb-3">
                        {renderRating(product.rating)}
                        <span className={`text-sm ${styles.text} ml-2`}>({product.rating})</span>
                        <span className={`text-sm ${styles.text} opacity-80 ml-3`}>• {product.reviews} reviews</span>
                    </div>

                    <div className="flex items-center mb-4">
                        <span className={`text-2xl font-bold ${styles.primary}`}>₹{product.price}</span>
                        {product.originalPrice && (
                            <span className={`text-sm ${styles.text} opacity-80 line-through ml-2`}>₹{product.originalPrice}</span>
                        )}
                        {product.originalPrice && (
                            <span className={`text-sm bg-green-100 text-green-800 ml-3 px-2 py-1 rounded flex items-center`}>
                                <MdLocalOffer className="mr-1" />
                                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                            </span>
                        )}
                    </div>

                    <div className="mb-4">
                        <h3 className={`text-lg font-semibold ${styles.text} mb-2`}>Key Benefits</h3>
                        <ul className={`text-sm ${styles.text} opacity-80 space-y-2`}>
                            {product.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-green-500 mr-2">•</span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button
                        disabled={!product.inStock}
                        className={`w-full flex items-center justify-center py-2 px-4 rounded-md text-base mt-auto ${product.inStock
                                ? `bg-green-700 hover:bg-blue-600 text-white`
                                : `bg-gray-300 cursor-not-allowed ${styles.text}`
                            }`}
                    >
                        <FaShoppingCart className="mr-2" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;