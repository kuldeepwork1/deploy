import React from "react";

export const metadata = {
  title: "Sbzee — Grievance Redressal Policy",
  description:
    "Sbzee's grievance redressal policy ensures fair, transparent, and timely resolution of customer issues related to transactions, delivery, refunds, and services.",
     alternates: { canonical: "https://sbzee.com/grievance-policy" },
};

export default function GrievancePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-12">
        <div className="mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
           
              <header className="mb-6">
                <h1 className="text-2xl font-semibold mb-2">
                  Sbzee — Grievance Redressal Policy
                </h1>
                <p className="text-gray-600">
                  Committed to fair, transparent and timely resolution of
                  customer grievances related to transactions, product quality,
                  delivery, refunds and related services.
                </p>
              </header>
              <div className="prose prose-lg max-w-none">
                <section id="purpose" className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">
                    1. Purpose and Commitment
                  </h2>
                  <p>
                    At Sbzee, we are committed to providing our customers with
                    high-quality service and a transparent, fair resolution
                    process for any complaints or concerns. This Grievance
                    Redressal Policy outlines the framework for handling user
                    grievances related to transactions, product quality,
                    delivery experience, refund issues, or any other aspect of
                    our services.
                  </p>
                  <p className="mt-2">
                    We value customer trust and strive to ensure that all
                    grievances are acknowledged, investigated, and resolved
                    promptly in accordance with applicable laws, including the
                    Consumer Protection Act, 2019 and the Information Technology
                    (Intermediary Guidelines and Digital Media Ethics Code)
                    Rules, 2021.
                  </p>
                </section>

                <section id="scope" className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">2. Scope</h2>
                  <p>This policy applies to:</p>
                  <ul className="list-disc pl-6">
                    <li>
                      All users of the Sbzee mobile app and related platforms;
                    </li>
                    <li>
                      All transactions, deliveries, and interactions carried out
                      through Sbzee’s platform;
                    </li>
                    <li>
                      Issues arising from product quality, service experience,
                      payment, refunds, and data privacy.
                    </li>
                  </ul>
                  <p className="mt-2">
                    <strong>Exclusion:</strong> This policy does not cover
                    grievances unrelated to Sbzee’s services, or issues
                    involving third-party platforms unaffiliated with Sbzee.
                  </p>
                </section>

                <section id="definition" className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">3. Definition</h2>
                  <p>
                    A “Grievance” means any complaint, concern, or feedback
                    raised by a user relating to:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Product or service quality;</li>
                    <li>Delay or non-delivery;</li>
                    <li>Refund or payment discrepancies;</li>
                    <li>
                      Misconduct or unprofessional behaviour by delivery
                      partners;
                    </li>
                    <li>Data privacy or account-related issues;</li>
                    <li>
                      Any other act that adversely affects the user’s experience
                      or rights.
                    </li>
                  </ul>
                </section>

                <section id="mechanism" className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">
                    4. Grievance Redressal Mechanism
                  </h2>

                  <h3 className="font-semibold mt-4">
                    Step 1 – Registering a Grievance
                  </h3>
                  <p>
                    Users may raise their grievance by emailing{" "}
                    <a
                      href="mailto:support@sbzee.com"
                      className="text-blue-600"
                    >
                      support@sbzee.com
                    </a>{" "}
                    with your order ID, reason for your grievance, and relevant
                    proof (if applicable).
                  </p>
                  <p className="mt-2">
                    When raising a grievance, please provide:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Order ID or transaction reference;</li>
                    <li>Description of the issue;</li>
                    <li>Relevant proof (images, receipts, etc.);</li>
                    <li>Preferred mode of communication for response.</li>
                  </ul>

                  <h3 className="font-semibold mt-4">
                    Step 2 – Acknowledgment
                  </h3>
                  <ul className="list-disc pl-6">
                    <li>
                      Acknowledge receipt within <strong>48 hours</strong>; and
                    </li>
                    <li>
                      Assign a unique Grievance Reference Number for tracking.
                    </li>
                  </ul>

                  <h3 className="font-semibold mt-4">
                    Step 3 – Review and Resolution
                  </h3>
                  <p>
                    Our Grievance Team will assess the issue and coordinate with
                    the concerned departments (e.g., logistics, merchant,
                    payment gateway) to resolve it.
                  </p>

                  <table className="w-full border border-gray-200 border-collapse mt-3 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-2 border border-gray-200">
                          Type of Issue
                        </th>
                        <th className="text-left p-2 border border-gray-200">
                          Expected Resolution Time
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-gray-200">
                          Product / Quality / Delivery
                        </td>
                        <td className="p-2 border border-gray-200">
                          Within 3 working days
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-gray-200">
                          Payment / Refund / Wallet Issues
                        </td>
                        <td className="p-2 border border-gray-200">
                          Within 5 working days
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-gray-200">
                          Data Privacy / Account Issues
                        </td>
                        <td className="p-2 border border-gray-200">
                          Within 7 working days
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <p className="bg-gray-50 border-l-4 border-gray-300 p-3 mt-3 text-gray-700">
                    If additional time is needed, we will inform you of the
                    reason and provide an extended resolution timeline.
                  </p>
                </section>

                <section id="responsibilities" className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">
                    5. Responsibilities
                  </h2>
                  <ul className="list-disc pl-6">
                    <li>
                      <strong>Users:</strong> Provide accurate and complete
                      details when raising grievances to ensure timely
                      resolution.
                    </li>
                    <li>
                      <strong>Sbzee Team:</strong> Maintain confidentiality,
                      fairness, and transparency throughout the redressal
                      process.
                    </li>
                  </ul>
                </section>

                <section id="confidentiality" className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">
                    6. Confidentiality
                  </h2>
                  <p>
                    All grievances, along with user details, will be handled
                    with strict confidentiality. Information shared will only be
                    used for verification and resolution purposes and will not
                    be disclosed to third parties except as required by law.
                  </p>
                </section>

                <section id="updates" className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">
                    7. Policy Updates
                  </h2>
                  <p>
                    Sbzee reserves the right to modify or update this policy
                    from time to time to reflect operational or legal
                    requirements. The updated version will be published on the
                    Sbzee website and app. Your continued use of Sbzee’s
                    services after such changes constitutes acceptance of the
                    revised policy.
                  </p>
                </section>

                <section id="contact" className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">
                    8. Contact Information
                  </h2>
                  <p>
                    For any queries regarding this Grievance Redressal Policy,
                    please contact:
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:grievance@sbzee.com"
                      className="text-blue-600"
                    >
                      grievance@sbzee.com
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
