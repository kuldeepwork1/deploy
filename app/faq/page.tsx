import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Sbzee",
  description:
    "Find answers to common questions about Sbzee, including delivery, payments, and account issues.",
  alternates: {
    canonical: "https://sbzee.com/faq",
  },
};

export const dynamic = "force-static";

const faqs = [
  {
    question: "When will my order be delivered?",
    answer:
      "Orders are typically delivered the next morning between 5:00 AM and 8:00 AM. You will receive a notification once your order is out for delivery.",
  },
  {
    question: "Do you offer Same-Day Delivery?",
    answer:
      "We do not offer same-day delivery; we offer next-day morning delivery between 5:00 AM and 8:00 AM for all orders.",
  },
  {
    question: "What payment method do you accept?",
    answer:
      "We only accept prepaid orders via credit/debit cards or UPI. Cash on delivery (COD) is not available.",
  },
  {
    question: "I received an OTP but cannot log in. What should I do?",
    answer:
      "If you are receiving an OTP but cannot log in, please ensure your app is updated to the latest version. If the issue persists, contact our support team.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-gray-50 section-padding min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#1FBF6A] mb-8 text-center">
          Frequently Asked Questions
        </h1>

        <dl className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <dt className="text-lg font-medium text-[#1FBF6A]">
                {faq.question}
              </dt>
              <dd className="mt-2 text-gray-700">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </main>
  );
}
