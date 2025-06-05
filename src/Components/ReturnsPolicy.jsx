
import React from 'react';
import { useTheme } from '../Auth/ThemeContext';

function ReturnPolicy() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${theme.background}`}>
      <div className={`max-w-4xl mx-auto ${theme.container}`}>
        <h1 className={`text-4xl font-bold text-center mb-8 ${theme.textSecondary}`}>
          Return and Refund Policy
        </h1>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
            Introduction
          </h2>
          <p className={`text-lg mb-4 ${theme.text}`}>
            Thank you for choosing SwiftlyMeds ("we," "us," or "our"). We are committed to ensuring your satisfaction with our products and services. This Return and Refund Policy outlines the conditions under which you may return products purchased from us and request a refund. Please read this policy carefully before making a purchase.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
            Eligibility for Returns
          </h2>
          <p className={`text-lg mb-4 ${theme.text}`}>
            To be eligible for a return, the following conditions must be met:
          </p>
          <ul className={`text-lg list-disc pl-6 mb-4 ${theme.text}`}>
            <li>The product must be returned within 30 days from the date of delivery.</li>
            <li>The product must be unused, in its original packaging, and in the same condition as received.</li>
            <li>You must provide proof of purchase, such as an order confirmation or receipt.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
            Return Process
          </h2>
          <p className={`text-lg mb-4 ${theme.text}`}>
            To initiate a return, please follow these steps:
          </p>
          <ul className={`text-lg list-decimal pl-6 mb-4 ${theme.text}`}>
            <li>Contact our customer support team at <a href="mailto:support@swiftlymeds.com" className={`text-blue-600 hover:underline ${theme.link}`}>support@swiftlymeds.com</a> with your order number and reason for return.</li>
            <li>Receive a Return Merchandise Authorization (RMA) number and return instructions from our team.</li>
            <li>Package the product securely and include the RMA number on the package.</li>
            <li>Ship the product to the provided return address within 7 days of receiving the RMA.</li>
          </ul>
          <p className={`text-lg mb-4 ${theme.text}`}>
            Once we receive and inspect the returned product, we will notify you via email about the approval or rejection of your return.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
            Refund Process
          </h2>
          <p className={`text-lg mb-4 ${theme.text}`}>
            If your return is approved, we will process your refund within 7 business days. Refunds will be issued to the original payment method used for the purchase. Please note:
          </p>
          <ul className={`text-lg list-disc pl-6 mb-4 ${theme.text}`}>
            <li>Refunds may take 5-10 business days to appear in your account, depending on your payment provider.</li>
            <li>Original shipping fees and return shipping costs are non-refundable unless the return is due to our error.</li>
            <li>Refunds will include the product cost and applicable taxes, if any.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
            Non-Returnable Items
          </h2>
          <p className={`text-lg mb-4 ${theme.text}`}>
            The following items are non-returnable:
          </p>
          <ul className={`text-lg list-disc pl-6 mb-4 ${theme.text}`}>
            <li>Products marked as final sale or non-returnable at the time of purchase.</li>
            <li>Opened or used consumable products, such as medications or supplements, unless defective.</li>
            <li>Gift cards or digital products.</li>
            <li>Customized or personalized items.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
            Shipping Costs
          </h2>
          <p className={`text-lg mb-4 ${theme.text}`}>
            You are responsible for the cost of return shipping unless the return is due to a damaged, defective, or incorrect item sent by us. In such cases, we will provide a prepaid shipping label or reimburse reasonable shipping costs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
            Damaged or Defective Items
          </h2>
          <p className={`text-lg mb-4 ${theme.text}`}>
            If you receive a damaged, defective, or incorrect item, please contact us within 7 days of delivery. We will arrange for a replacement or refund at no additional cost to you, provided you provide evidence (e.g., photos) of the issue.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
            Order Cancellations
          </h2>
          <p className={`text-lg mb-4 ${theme.text}`}>
            You may cancel your order before it is shipped by contacting us at support@swiftlymeds.com. If the order has already been shipped, you must follow the return process outlined above. Cancellations after shipment may incur return shipping costs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
            Changes to This Policy
          </h2>
          <p className={`text-lg mb-4 ${theme.text}`}>
            We may update this Return and Refund Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${theme.textPrimary}`}>
            Contact Us
          </h2>
          <p className={`text-lg mb-4 ${theme.text}`}>
            If you have questions or concerns about this Return and Refund Policy or need assistance with a return, please contact us at:
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

export default ReturnPolicy;