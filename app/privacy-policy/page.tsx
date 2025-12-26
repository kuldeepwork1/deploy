import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Sbzee (JVFPL)",
  description:
    "Privacy Policy for Sbzee Partner App, Sbzee Customer App, and Sbzee Delivery Partner App, operated by Jaharvir Fingrowth Private Limited (JVFPL).",
  robots: { index: true, follow: true },
   alternates: { canonical: "https://sbzee.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-12">
        <div className=" mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-600 mb-2">
                <strong>Last Updated:</strong> 1 Sep, 2025
              </p>
              <p className="text-gray-700 leading-relaxed">
                Jaharvir Fingrowth Private Limited ("<strong>JVFPL</strong>", "
                <strong>we</strong>", "<strong>us</strong>", or "
                <strong>our</strong>") built the
                <strong> Sbzee Partner App</strong>,
                <strong> Sbzee Customer App</strong>, and
                <strong> Sbzee Delivery Partner App</strong> (collectively, the
                "<strong>Platform</strong>"). This service is provided by JVFPL
                at no cost and is intended for use as is.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing or using the Platform, you ("<strong>you</strong>
                  " or "<strong>user</strong>") agree to the collection and use
                  of information as described in this Privacy Policy ("
                  <strong>Policy</strong>"). The personal data we collect is
                  used to provide and improve the Platform. We will not use or
                  share your information except as described in this Policy.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This Policy is incorporated into and should be read with our
                  Terms of Use. Capitalised terms not defined here shall have
                  the meanings given in the Terms. We value the trust you place
                  in us and maintain reasonable security practices to protect
                  your information and transactions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  What We Collect
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may browse some parts of the Platform without creating an
                  account. Certain features require registration.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Personal Data you provide
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>
                    Identity & contact: full name, mobile number, email, date of
                    birth, gender/age, addresses.
                  </li>
                  <li>
                    KYC/ID: PAN, passport, driving licence, voter ID, or other
                    government-issued IDs as required.
                  </li>
                  <li>
                    Account security: passwords/PINs (stored/processed
                    securely).
                  </li>
                  <li>
                    Payment data: bank account/UPI/card details (processed via
                    compliant payment partners).
                  </li>
                  <li>
                    Other info you voluntarily provide (support queries,
                    feedback, survey responses).
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Transactional & usage data
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Orders, payments, refunds, delivery preferences, order
                  history, number of transactions; in-app interactions,
                  preferences, and communications with us.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Location & device data
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Approximate or precise location (if you grant device
                  permissions) for delivery, address suggestions, fraud
                  prevention, and service availability; IP address, device
                  identifiers, OS, browser, telecom operator, connection
                  type/speed. You can withdraw location permission at any time
                  in your device settings (some features may not work without
                  it).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    We have appointed a Grievance Officer under applicable law:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Name:</strong> Miss. Cheena Bhatt
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:contact@jvfpl.co"
                        className="text-accent-500 hover:text-accent-600"
                      >
                        contact@jvfpl.co
                      </a>
                    </p>
                    <p>
                      <strong>Additional contact (legal):</strong>{" "}
                      <a
                        href="mailto:legal@jvfpl.co"
                        className="text-accent-500 hover:text-accent-600"
                      >
                        legal@jvfpl.co
                      </a>
                    </p>
                    <p>
                      <strong>Address:</strong> 25a/47TF IV/1959/1 Gali No 14,
                      Bhola Nath Nagar, Shahdara, Delhi – 110032
                    </p>
                    <p>
                      <strong>Hours:</strong> Monday to Saturday, 10:00 AM to
                      6:00 PM IST (excluding public holidays)
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
