import React from 'react';
import { useTheme } from '../Auth/ThemeContext'

function PrivacyPolicy() {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${theme.background}`}>
            <div className={`max-w-4xl mx-auto ${theme.container}`}>
                <h1 className={`text-4xl font-bold text-center mb-8 ${theme.textSecondary}`}>
                    Privacy Policy
                </h1>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Introduction
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        Welcome to SwiftlyMeds ("we," "us," or "our"). We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how and why we collect and use, and share your personal information when you visit our website, use our services, or interact with us.
                    </p>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        By using our services, you agree to the collection and use, and disclosure of your information as described in this policy. If you do not agree, please do not use our services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Information We Collect
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        We collect the following types of information:
                    </p>
                    <ul className={`text-lg list-disc pl-6 mb-4 ${theme.text}`}>
                        <li><strong>Personal Information:</strong> Information you provide, such as your name, email address, phone number, and billing details when you create an account or contact us.</li>
                        <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP addresses, browser types, pages visited, and timestamps.</li>
                        <li><strong>Device Information:</strong> Data about the device you use to access our services, such as device type, operating system, and unique device identifiers.</li>
                        <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your experience and analyze usage patterns. See our <a href="/cookies" className={`text-blue-600 hover:underline ${theme.link}`}>Cookie Policy</a> for details.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        How We Use Your Information
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        We use your information for the following purposes:
                    </p>
                    <ul className={`text-lg list-disc pl-6 mb-4 ${theme.text}`}>
                        <li>To provide and maintain our services, including processing transactions and responding to inquiries.</li>
                        <li>To personalize user experience, such as tailoring content and recommendations.</li>
                        <li>To communicate with you, including sending transactional emails, updates, and promotional materials.</li>
                        <li>To analyze and improve our services, website performance, and user engagement.</li>
                        <li>To comply with legal obligations and protect our rights and safety.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Sharing Your Information
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        We may share your information with:
                    </p>
                    <ul className={`text-lg mb-4 list-disc pl-6 ${theme.text}`}>
                        <li><strong>Service Providers:</strong> Third-party vendors who assist with payment processing, email delivery, and customer support.</li>
                        <li><strong>Legal Authorities:</strong> When required by law or to respond to legal processes, such as subpoenas.</li>
                        <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or other business transactions.</li>
                    </ul>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        We do not sell your personal information to third parties for marketing purposes.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Cookies and Tracking Technologies
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        We use cookies to improve your experience, track usage, and deliver personalized content. You can manage cookie preferences through your browser settings. Disabling cookies may affect your ability to use certain features of our website.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Data Security
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        We implement industry-standard security measures, such as encryption and secure servers, to protect your information. However, no system is completely secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Your Rights
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        Depending on your jurisdiction, you may have the following rights:
                    </p>
                    <ul className={`text-lg list-disc pl-6 mb-4 ${theme.text}`}>
                        <li><strong>Access:</strong> Request a copy of your personal information.</li>
                        <li><strong>Correction:</strong> Update or correct inaccurate information.</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations.</li>
                        <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications or opt out of certain data processing.</li>
                    </ul>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        To exercise these rights, please contact us at the details provided below.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        International Data Transfers
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        Your information may be transferred to and processed in countries other than your own, where data protection laws may differ. We ensure appropriate safeguards are in place to protect your data.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Changes to This Policy
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
                        Contact Us
                    </h2>
                    <p className={`text-lg mb-4 ${theme.text}`}>
                        If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicy;