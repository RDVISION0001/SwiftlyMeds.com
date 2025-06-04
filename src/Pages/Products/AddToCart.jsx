import React from 'react';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import { useTheme } from '../../Auth/ThemeContext';
import { Link } from 'react-router-dom';

function AddToCart() {
    const { styles } = useTheme();

    // Static sample cart items for UI display
    const sampleCartItems = [
        {
            id: 1,
            name: 'Baby Diapers (Pack of 50)',
            price: 499,
            quantity: 2,
            image: 'https://images.apollo247.in/pub/media/catalog/product/o/n/one0172_1-june23_1_.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
            manufacturer: 'BabySafe',
        },
        {
            id: 2,
            name: 'Digital Thermometer - Instant Read',
            price: 349,
            quantity: 1,
            image: 'https://images.apollo247.in/pub/media/catalog/product/a/p/apl0091-03.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
            manufacturer: 'TempCheck',
        },
    ];

    // Static total price for UI display
    const totalPrice = sampleCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className={`container mx-auto px-4 py-8 ${styles.container} ${styles.text}`}>
            <h2 className={`text-2xl font-bold ${styles.primary} mb-6`}>Your Cart</h2>

            {sampleCartItems.length === 0 ? (
                <div className="text-center">
                    <p className={`text-lg ${styles.text} opacity-80 mb-4`}>Your cart is empty</p>
                    <Link
                        to="/"
                        className={`inline-flex items-center px-4 py-2 bg-green-700 hover:bg-blue-600 text-white rounded-md ${styles.text}`}
                    >
                        <FaShoppingCart className="mr-2" />
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col gap-6">
                    {/* Cart Items */}
                    <div className="space-y-4">
                        {sampleCartItems.map((item) => (
                            <div
                                key={item.id}
                                className={`flex items-center gap-4 p-4 rounded-lg shadow-md ${styles.container} hover:shadow-lg transition-shadow duration-300`}
                            >
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                                <div className="flex-grow">
                                    <h3 className={`text-base font-semibold ${styles.text}`}>{item.name}</h3>
                                    <p className={`text-sm ${styles.text} opacity-80`}>By {item.manufacturer}</p>
                                    <p className={`text-lg font-bold ${styles.primary}`}>
                                        ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        className={`px-2 py-1 rounded-md ${item.quantity === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
                                    >
                                        -
                                    </button>
                                    <span className={`text-sm ${styles.text}`}>{item.quantity}</span>
                                    <button className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-md">
                                        +
                                    </button>
                                    <button className="text-red-500 hover:text-red-700">
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className={`p-4 rounded-lg shadow-md ${styles.container}`}>
                        <h3 className={`text-lg font-semibold ${styles.text} mb-2`}>Cart Summary</h3>
                        <p className={`text-sm ${styles.text} opacity-80`}>
                            Total Items: {sampleCartItems.reduce((sum, item) => sum + item.quantity, 0)}
                        </p>
                        <p className={`text-lg font-bold ${styles.primary} mt-2`}>Total: ₹{totalPrice}</p>
                        <button
                            className={`w-full mt-4 flex items-center justify-center py-2 px-4 rounded-md text-base bg-green-700 hover:bg-blue-600 text-white ${styles.text}`}
                        >
                            <FaShoppingCart className="mr-2" />
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddToCart;