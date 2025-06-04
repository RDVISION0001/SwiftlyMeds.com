import React from 'react';
import { useTheme } from '../Auth/ThemeContext';

function NewsLetter() {
    const { styles } = useTheme();

    return (
        <div className={`${styles.background} flex flex-col md:flex-row items-center justify-between p-6`}>
            <div className={`${styles.text} mb-4 md:mb-0`}>
                <div className="font-bold text-xl">
                    Join Our Newsletter & Get $10 Discount For Your First Order!
                </div>
                <div className="text-sm">
                    Get E-mail updates about our latest shop and special offers.
                </div>
            </div>
            <div className="flex items-center w-full md:w-auto">
                <input
                    type="email"
                    placeholder="Your email address"
                    className={`${styles.input} p-2 rounded-l-lg focus:outline-none w-full md:w-64`}
                />
                <button className={`${styles.button} p-2 rounded-r-lg bg-amber-800`}>
                    Subscribe
                </button>
            </div>
        </div>
    );
}

export default NewsLetter;