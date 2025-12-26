"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  MapPin,
  Clock,
} from "lucide-react";

// export const metadata: Metadata = {
//   title: "Contact Us — Sbzee",
//   description:
//     "Get in touch with Sbzee. Send us a message or reach us via email and phone for any queries.",
//   alternates: { canonical: "/contact" },
// };

export default function ContactClient() {
  return (
    <div className=" bg-gray-50 section-padding">
      <div className="container-custom">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 1] }}
          className="max-w-3xl mx-auto mb-8 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Contact Us
          </h1>
          <p className="text-gray-600">
            We’d love to hear from you. Fill the form or use the details below
            to reach us.
          </p>
        </motion.header>

        <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.2, 0.65, 0.3, 1],
            }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-shadow"
                    placeholder="Your name"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-shadow"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-shadow"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <div className="relative mt-1">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={13}
                    required
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-shadow resize-none"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-accent w-full md:w-auto flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.2, 0.65, 0.3, 1],
            }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            <h2 className="text-xl font-semibold mb-4">Reach Us</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-600 mt-0.5" />
                <div>
                  <div className="font-medium">Email</div>
                  <a
                    href="mailto:contact@jvfpl.co"
                    className="text-accent-600 hover:text-accent-700"
                  >
                    contact@jvfpl.co
                  </a>
                </div>
              </li>
              {/* <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-600 mt-0.5" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div>+91 98765 43210</div>
                </div>
              </li> */}
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-600 mt-0.5" />
                <div>
                  <div className="font-medium">Address</div>
                  <div>
                    Unacademy Center, Infinity Technopark, Unit no 502 5Th Floor
                    56A/16, Block-C, Phase 2, Sector 62, Noida, Uttar Pradesh
                    201309
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent-600 mt-0.5" />
                <div>
                  <div className="font-medium">Hours</div>
                  <div>Mon–Sat, 10:00 AM – 6:00 PM IST</div>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <iframe
                title="Sbzee Location"
                className="w-full h-64 rounded-xl border"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.946706470184!2d77.289!3d28.572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v0000000000000"
              />
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
