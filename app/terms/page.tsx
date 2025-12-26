import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Sbzee (JVFPL)",
  description:
    "Official Terms & Conditions for Sbzee, operated by Jaharvir Fingrowth Private Limited (JVFPL). Read roles and responsibilities for customers, suppliers, and delivery partners.",
  robots: { index: true, follow: true },
   alternates: { canonical: "https://sbzee.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-12">
        <div className="mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sbzee Platform Terms and Conditions
              </h1>
              <p className="text-gray-600">
                Operated by Jaharvir FinGrowth Private Limited (JVFPL) —
                Effective: 1 September 2025
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to the Sbzee platform (the "Platform"), operated by
                  Jaharvir FinGrowth (the "Company", "we", "us", or "our").
                  These Terms and Conditions ("Terms") govern the use of our
                  Platform and the services provided through it. By registering,
                  accessing, or using the Platform (including by downloading our
                  app or using our website), you agree to be bound by these
                  Terms. If you do not agree, do not use the Platform.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Scope:</strong> Our Platform is a technology service
                  that connects:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>
                    <strong>Customers/Users</strong> using the Platform to order
                    Products.
                  </li>
                  <li>
                    <strong>Suppliers/Sellers</strong> offering or supplying
                    Products via the Platform.
                  </li>
                  <li>
                    <strong>Delivery Partners</strong> who pick up and deliver
                    orders.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We operate in select service areas (currently Delhi and Noida)
                  and may expand to other locations at our discretion. By using
                  the Platform, you confirm our services are available in your
                  area and that you are eligible to enter into this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Platform Services and Role of the Company
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Facilitator Only:</strong> We function solely as an
                  intermediary enabling transactions between Users, Suppliers,
                  and Delivery Partners. We are not the seller or manufacturer
                  of the Products. The sales contract is between the User and
                  Supplier; delivery services are provided by Delivery Partners.
                  Title to goods passes from Supplier to User; we do not assume
                  ownership.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>No Agency or Employment:</strong> Nothing here creates
                  agency, partnership, joint venture, or employment between the
                  Company and any Supplier or Delivery Partner. They act on a
                  principal-to-principal basis and are not authorized to make
                  representations on our behalf.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Service Availability:</strong> Currently in Delhi and
                  Noida; we may restrict/expand areas.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  User Accounts and Responsibilities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Account Registration:</strong> Provide accurate
                  information, keep credentials confidential, and notify us of
                  unauthorized access. You are responsible for all activities
                  under your account.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Eligibility:</strong> You must be 18+ and capable of
                  contracting. Minors may use only with a parent/guardian who
                  accepts these Terms on their behalf.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>User Conduct — You agree NOT to:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>
                    Violate laws/regulations or post unlawful/abusive/obscene
                    content.
                  </li>
                  <li>
                    Impersonate, misrepresent identity, or engage in fraud.
                  </li>
                  <li>
                    Attempt unauthorized access, introduce malware, or overload
                    systems.
                  </li>
                  <li>Use automation/scrapers without permission.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Personal Use Only:</strong> Not for resellers/bulk
                  commercial purchases. We may cancel orders and/or terminate
                  accounts in such cases.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Governing Law & Disputes
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This Policy is governed by Indian law. Courts at
                  <strong> New Delhi</strong> shall have exclusive jurisdiction,
                  subject to any applicable dispute resolution terms in our
                  Terms of Use.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
