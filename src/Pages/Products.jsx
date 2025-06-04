import React, { useState } from 'react';
import { FaStar, FaRegStar, FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';

const categories = [
  { id: 'baby-care', name: 'Baby Care' },
  { id: 'men-care', name: 'Men Care' },
  { id: 'women-care', name: 'Women Care' },
  { id: 'old-age-care', name: 'Old Age Care' },
  { id: 'health-devices', name: 'Health Devices' },
];

const originalProducts = [
  {
    id: 1,
    name: 'Baby Diapers (Pack of 50)',
    price: 499,
    originalPrice: 599,
    rating: 4.5,
    reviews: 124,
    image: 'https://images.apollo247.in/pub/media/catalog/product/o/n/one0172_1-june23_1_.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
    category: 'baby-care',
    inStock: true,
    benefits: ['Hypoallergenic', 'Super absorbent', 'Soft on skin'],
    manufacturer: 'BabySafe',
  },
  {
    id: 2,
    name: 'Baby Shampoo - Tear Free (200ml)',
    price: 199,
    originalPrice: 249,
    rating: 4.2,
    reviews: 89,
    image: 'https://images.apollo247.in/pub/media/catalog/product/o/n/one0132_1-june23_1_.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
    category: 'baby-care',
    inStock: true,
    benefits: ['No tears formula', 'Natural ingredients', 'Gentle cleansing'],
    manufacturer: 'LittleOne',
  },
  {
    id: 3,
    name: "Men's Multivitamin (60 Tablets)",
    price: 899,
    originalPrice: 999,
    rating: 4.7,
    reviews: 210,
    image: 'https://images.apollo247.in/pub/media/catalog/product/a/p/apb0065_111.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
    category: 'men-care',
    inStock: true,
    benefits: ['Energy support', 'Muscle function', 'Immune health'],
    manufacturer: 'ManPower',
  },
  {
    id: 4,
    name: 'Beard Growth Oil (50ml)',
    price: 349,
    originalPrice: 499,
    rating: 4.3,
    reviews: 156,
    image: 'https://images.apollo247.in/pub/media/catalog/product/a/p/aph0002_1-sep2023.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
    category: 'men-care',
    inStock: true,
    benefits: ['Promotes growth', 'Reduces itchiness', 'Conditions beard'],
    manufacturer: 'BeardKing',
  },
  {
    id: 5,
    name: 'Prenatal Vitamins (90 Tablets)',
    price: 699,
    originalPrice: 799,
    rating: 4.6,
    reviews: 278,
    image: 'https://images.apollo247.in/pub/media/catalog/product/a/p/apt0020_2_.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
    category: 'women-care',
    inStock: true,
    benefits: ['Folic acid included', 'Supports pregnancy', 'Iron enriched'],
    manufacturer: 'MotherCare',
  },
  {
    id: 6,
    name: "Women's Calcium + Vitamin D3",
    price: 599,
    originalPrice: 699,
    rating: 4.4,
    reviews: 342,
    image: 'https://images.apollo247.in/pub/media/catalog/product/L/A/LAC0045_1-AUG23_1.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
    category: 'women-care',
    inStock: true,
    benefits: ['Bone health', 'Muscle function', 'Prevents deficiency'],
    manufacturer: 'FemWell',
  },
  {
    id: 7,
    name: 'Joint Pain Relief Cream (100g)',
    price: 399,
    originalPrice: 499,
    rating: 4.1,
    reviews: 187,
    image: 'https://images.apollo247.in/pub/media/catalog/product/p/e/ped0144-1.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
    category: 'old-age-care',
    inStock: true,
    benefits: ['Fast pain relief', 'Reduces inflammation', 'Easy application'],
    manufacturer: 'SeniorCare',
  },
  {
    id: 8,
    name: 'Blood Sugar Support Capsules',
    price: 799,
    originalPrice: 899,
    rating: 4.0,
    reviews: 132,
    image: 'https://online.apollopharmacy.in/pub/media/catalog/category/health_condition_sexual_health.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
    category: 'old-age-care',
    inStock: true,
    benefits: ['Supports metabolism', 'Natural ingredients', 'Clinically tested'],
    manufacturer: 'SugarBalance',
  },
  {
    id: 9,
    name: 'Digital Blood Pressure Monitor',
    price: 1299,
    originalPrice: 1599,
    rating: 4.7,
    reviews: 210,
    image: 'https://online.apollopharmacy.in/pub/media/catalog/category/speciality_nutrition.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
    category: 'health-devices',
    inStock: true,
    benefits: ['Clinically validated', 'Memory function', 'Irregular heartbeat detector'],
    manufacturer: 'CareTouch',
  },
  {
    id: 10,
    name: 'Digital Thermometer - Instant Read',
    price: 349,
    originalPrice: 499,
    rating: 4.6,
    reviews: 278,
    image: 'https://images.apollo247.in/pub/media/catalog/product/a/p/apl0091-03.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
    category: 'health-devices',
    inStock: true,
    benefits: ['Fast reading', 'Waterproof', 'Memory recall'],
    manufacturer: 'TempCheck',
  },
];

// Repeat products 3 times with unique IDs
const products = [
  ...originalProducts,
  ...originalProducts.map((p) => ({ ...p, id: p.id + 10 })),
  ...originalProducts.map((p) => ({ ...p, id: p.id + 20 })),
];

function Products() {
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (productId) => {
    console.log(`Product ${productId} added to cart`);
    // Add your cart logic here
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

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

  return (
    <div className="w-full px-4 py-3 bg-gray-100 items-center">
      <h1 className="text-2xl font-bold text-gray-600 mb-4">Healthcare Products</h1>

      {/* Categories and Products */}
      {categories.map((category) => {
        const categoryProducts = products.filter((p) => p.category === category.id);
        if (categoryProducts.length === 0) return null;

        return (
          <div key={category.id} className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h2>
            <p className="text-gray-600 text-sm mb-3">{getCategoryDescription(category.id)}</p>
            <div className="overflow-x-auto scrollbar-hide px-4">
              <div className="inline-flex space-x-4 mx-auto">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative flex-shrink-0 w-64 flex flex-col h-96"
                  >
                    <div className="relative">
                      <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
                      {!product.inStock && (
                        <div className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded">
                          Out of Stock
                        </div>
                      )}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-1 right-1 bg-white bg-opacity-80 p-1 rounded-full hover:bg-opacity-100"
                      >
                        {wishlist.includes(product.id) ? (
                          <FaHeart className="text-red-500" />
                        ) : (
                          <FaRegHeart className="text-gray-600" />
                        )}
                      </button>
                    </div>

                    <div className="p-3 flex flex-col flex-grow">
                      <h3 className="text-base font-semibold text-gray-800 mb-1">{product.name}</h3>
                      <p className="text-xs text-gray-500 mb-1">By {product.manufacturer}</p>

                      <div className="flex items-center mb-1">
                        {renderRating(product.rating)}
                        <span className="text-gray-600 text-xs ml-1">({product.rating})</span>
                        <span className="text-gray-400 text-xs ml-2">• {product.reviews} reviews</span>
                      </div>

                      <div className="flex items-center mb-2">
                        <span className="text-lg font-bold text-blue-500">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-500 line-through ml-1">₹{product.originalPrice}</span>
                        )}
                        {product.originalPrice && (
                          <span className="text-xs bg-green-100 text-green-800 ml-2 px-1 py-0.5 rounded flex items-center">
                            <MdLocalOffer className="mr-1" />
                            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                          </span>
                        )}
                      </div>

                      <div className="mb-2 flex-grow">
                        <p className="text-xs font-medium mb-1">Key Benefits:</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {product.benefits.slice(0, 2).map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-500 mr-1">•</span>
                              {benefit}
                            </li>
                          ))}
                          {product.benefits.length > 2 && (
                            <li className="text-xs text-blue-500">+{product.benefits.length - 2} more</li>
                          )}
                        </ul>
                      </div>

                      <button
                        onClick={() => addToCart(product.id)}
                        disabled={!product.inStock}
                        className={`w-full flex items-center justify-center py-1 px-2 rounded-md text-sm ${product.inStock ? 'bg-green-700 hover:bg-blue-600 text-white' : 'bg-gray-300 cursor not-allowed text-gray-500'
                          }`}
                      >
                        <FaShoppingCart className="mr-1" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Helper function for category descriptions
function getCategoryDescription(categoryId) {
  const descriptions = {
    'baby-care': 'Gentle and safe products for your little ones. From diapers to baby shampoos, we have everything to keep your baby happy and healthy.',
    'men-care': "Specialized products for men's health and wellness. Vitamins, grooming products, and more to support men's specific health needs.",
    'women-care': "Products designed for women's unique health requirements. Prenatal care, calcium supplements, and other essentials for women's wellbeing.",
    'old-age-care': 'Supportive products for senior citizens. Joint pain relief, blood sugar management, and other solutions for aging gracefully.',
    'health-devices': 'Modern healthcare devices for monitoring and maintaining your health at home. Accurate and easy-to-use medical equipment.',
  };
  return descriptions[categoryId] || '';
}

export default Products;