
import React from 'react';
import { useTheme } from '../Auth/ThemeContext';

function TermsConditions() {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${theme.background}`}>
            <div className={`max-w-4xl mx-auto ${theme.container}`}>
                <h1 className={`text-4xl font-bold text-center mb-8 ${theme.textSecondary}`}>
                    Terms and Conditions
                </h1>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Introduction
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        Welcome to SwiftlyMeds ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our website, services, and any related products or content provided by SwiftlyMeds. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Acceptance of Terms
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        By creating an account, accessing our website, or using our services, you confirm that you are at least 18 years old (or the legal age in your jurisdiction) and have the legal capacity to enter into a binding agreement. You also agree to comply with these Terms and any applicable laws or regulations.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Description of Services
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        SwiftlyMeds provides an online platform for [describe services, e.g., ticket management, customer support, or other services relevant to SwiftlyMeds]. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        User Responsibilities
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        As a user, you agree to:
                    </p>
                    <ul className={`text-lg list-disc pl-6 mb-4 ${theme.text}`}>
                        <li>Provide accurate, complete, and up-to-date information when creating an account or using our services.</li>
                        <li>Maintain the confidentiality of your account credentials and notify us immediately of any unauthorized access.</li>
                        <li>Use our services only for lawful purposes and in accordance with these Terms.</li>
                        <li>Not engage in any activity that disrupts, damages, or interferes with our services, including hacking, spamming, or distributing malware.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Intellectual Property
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        All content, trademarks, logos, and intellectual property on our website and services are owned by SwiftlyMeds or our licensors. You may not copy, reproduce, distribute, or create derivative works without our prior written consent, except as permitted by law.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Payment and Fees
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        Certain services may require payment. All fees are non-refundable unless otherwise stated. You agree to provide accurate payment information and authorize us to charge applicable fees. We may update pricing at any time, and continued use of our services constitutes acceptance of updated pricing.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Limitation of Liability
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        To the fullest extent permitted by law, SwiftlyMeds, its affiliates, and their respective officers, directors, employees, or agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount you paid us, if any, for the services.
                    </p>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        Our services are provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to fitness for a particular purpose or non-infringement.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Termination
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        We may suspend or terminate your access to our services at our sole discretion, with or without notice, for reasons including but not limited to violation of these Terms, fraudulent activity, or inactivity. Upon termination, your right to use our services will cease immediately, and any data associated with your account may be deleted.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Governing Law and Dispute Resolution
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        These Terms are governed by the laws of [insert jurisdiction, e.g., Delaware, USA]. Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of [insert arbitration body, e.g., the American Arbitration Association]. You agree to waive any right to participate in a class action lawsuit or class-wide arbitration.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Changes to These Terms
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        We may update these Terms from time to time. Changes will be posted on this page with an updated effective date. Your continued use of our services after changes are posted constitutes acceptance of the updated Terms.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Contact Us
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        If you have questions or concerns about these Terms, please contact us at:
                    </p>
                    <ul className={`text-lg list-none mb-4 ${theme.text}`}>
                        <li>Email: <a href="mailto:support@swiftlymeds.com" className={`text-blue-600 hover:underline ${theme.link}`}>support@swiftlymeds.com</a></li>
                        <li>Address: SwiftlyMeds, 123 Business Avenue, City, Country</li>
                    </ul>
                </section>

                <p className={`text-sm text-center ${theme.textMuted}`}>
                    Effective Date: June 5, 2025
                </p>
            </div>
        </div>
    );
}

export default TermsConditions;