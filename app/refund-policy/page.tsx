// "use client";

// import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — Sbzee (JVFPL)",
  description:
    "Refund Policy for Sbzee Partner App, Sbzee Customer App, and Sbzee Delivery Partner App, operated by Jaharvir Fingrowth Private Limited (JVFPL).",
  robots: { index: true, follow: true },
   alternates: { canonical: "https://sbzee.com/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
     <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-12">
        <div className="mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
   
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Sbzee Refund Policy</h1>
        <p>
          At Sbzee (“Company,” “we,” “us,” “our”), we strive to provide our
          customers with fresh, high-quality products and a smooth purchasing
          experience. However, we understand that there may be instances where
          you may wish to seek a refund or replacement.
        </p>
        <p className="mt-2">
          This Refund Policy outlines the terms and conditions governing
          refunds, cancellations, and replacements for orders placed through the
          Sbzee mobile application and related services (“Platform”).
        </p>
      </header>
    
     <div className="prose prose-lg max-w-none">
      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Applicability and Scope
        </h2>
        <p>
          This policy applies to all users (“you,” “customer,” “user”) who make
          purchases through Sbzee’s Platform. It governs:
        </p>
        <ul className="list-disc pl-6 my-2">
          <li>Refunds for defective, damaged, or incorrect items;</li>
          <li>Cancellations initiated by users or by Sbzee; and</li>
          <li>Replacement eligibility.</li>
        </ul>
        <p>
          This policy is subject to the Terms of Use and other policies
          published by Sbzee. By using the Platform, you agree to the terms of
          this Refund Policy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Eligibility for Refund or Replacement
        </h2>
        <p>
          A refund or replacement request may be raised under the following
          conditions:
        </p>

        <p className="mt-3 font-semibold">a. Order Not Delivered</p>
        <p>
          In case your order was paid for but not delivered due to operational
          or logistical issues, the full amount will be refunded automatically
          to your original payment method within 5–7 business days.
        </p>

        <p className="mt-3 font-semibold">b. Quality Concerns</p>
        <p>
          Sbzee reserves the right to validate quality complaints before
          processing a refund. For perishable goods (like fruits, vegetables,
          dairy, etc.), partial refunds may be issued depending on the nature of
          the complaint and item condition at the time of delivery.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Non-Refundable Situations
        </h2>
        <p>Refunds or replacements will not be issued if:</p>
        <ul className="list-disc pl-6 my-2">
          <li>The request is raised after 24 hours from delivery.</li>
          <li>The product is consumed, used, or tampered with.</li>
          <li>
            The issue reported is subjective in nature (e.g., taste, personal
            preference).
          </li>
          <li>
            Delivery was attempted but failed due to incorrect address or
            unavailability of the customer.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Cancellation Policy
        </h2>

        <p className="font-semibold">a. Before Dispatch</p>
        <p>
          You may cancel an order from the “My Orders” section before it has
          been dispatched. No cancellation charges apply in such cases.
        </p>

        <p className="mt-3 font-semibold">b. After Dispatch</p>
        <p>
          Once an order has been dispatched or is out for delivery, cancellation
          requests will not be accepted. You may, however, refuse to accept the
          order at delivery; a nominal convenience fee may be deducted to cover
          logistics costs.
        </p>

        <p className="mt-3 font-semibold">c. Sbzee-Initiated Cancellations</p>
        <p>
          Sbzee reserves the right to cancel orders under certain conditions,
          including:
        </p>
        <ul className="list-disc pl-6 my-2">
          <li>Unavailability of items;</li>
          <li>Payment authorization issues;</li>
          <li>Delivery location outside operational limits;</li>
          <li>Suspected fraudulent activity.</li>
        </ul>
        <p>In such cases, you will receive a full refund for prepaid orders.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Refund Method and Timeline
        </h2>
        <p>All eligible refunds will be processed as follows:</p>

        <div className="overflow-x-auto mt-3">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border px-3 py-2 text-left">Payment Method</th>
                <th className="border px-3 py-2 text-left">Refund Mode</th>
                <th className="border px-3 py-2 text-left">
                  Estimated Timeline
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">UPI / Wallet</td>
                <td className="border px-3 py-2">Reversal to original mode</td>
                <td className="border px-3 py-2">2–3 business days</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Credit / Debit Card</td>
                <td className="border px-3 py-2">Reversal to same account</td>
                <td className="border px-3 py-2">5–7 business days</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Cash on Delivery</td>
                <td className="border px-3 py-2">Refund to wallet / UPI</td>
                <td className="border px-3 py-2">
                  2–3 business days post verification
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-2">
          <strong>Note:</strong> Timelines are indicative and may vary depending
          on your payment provider or bank.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Replacement Policy
        </h2>
        <p>In cases where a replacement is approved:</p>
        <ul className="list-disc pl-6 my-2">
          <li>
            Replacement items will be delivered within 24–48 hours of complaint
            resolution.
          </li>
          <li>Availability is subject to stock and delivery area limits.</li>
          <li>
            If a replacement cannot be processed, a refund will be issued
            instead.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          7. Fraudulent or Abusive Claims
        </h2>
        <p>Sbzee reserves the right to withhold or deny refunds in case of:</p>
        <ul className="list-disc pl-6 my-2">
          <li>Repeated refund claims without valid reason;</li>
          <li>Misuse of promotional offers;</li>
          <li>Evidence of fraudulent activity or policy abuse.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          8. How to Raise a Refund or Replacement Request
        </h2>
        <p>
          You can initiate a request by emailing{" "}
          <a
            href="mailto:support@sbzee.com"
            className="text-blue-600 hover:underline"
          >
            support@sbzee.com
          </a>{" "}
          with your order ID, reason for refund, and relevant proof (if
          applicable).
        </p>
        <p>
          Our customer service team will review your request and update you
          within 24 hours of submission.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          9. Changes to this Policy
        </h2>
        <p>
          Sbzee reserves the right to modify this Refund Policy from time to
          time to reflect operational or legal changes. Updates will be posted
          on our website and app with a revised “Effective Date.” Continued use
          of our Platform after such updates constitutes your acceptance of the
          revised policy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Refund Policy, please
          contact:
        </p>
        <p>
          📧{" "}
          <a
            href="mailto:support@sbzee.com"
            className="text-blue-600 hover:underline"
          >
            support@sbzee.com
          </a>
        </p>
      </section>
      </div>
  </div>
    </div>
    </div>
    </div>
  
  );
}
