"use client";

import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import {
  shouldShowModal,
  markModalAsShown,
  markUserAsSubscribed,
  hasUserSubscribed,
} from "@/lib/subscription";
import Image from "next/image";

interface SubscriptionModalProps {
  delay?: number;
  showOnce?: boolean;
}

export function SubscriptionModal({
  delay = 5000,
  showOnce = true,
}: SubscriptionModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState<string>("");
  const [touched, setTouched] = useState(false);

  const isValidEmail = (value: string) => {
    const v = value.trim();
    // Simple, resilient email check
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v);
  };

  const canSubmit = isValidEmail(email) && !isSubmitting;

  useEffect(() => {
    // if (!shouldShowModal()) {
    //   return;
    // }

    if (hasUserSubscribed()) {
      return;
    }
    const pageTitle = document.title;

    // if it's the 404 page, do not show modal
    if (pageTitle.includes("404")) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      if (showOnce) {
        markModalAsShown();
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, showOnce]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://dev.api.fruggies.co.in/api/v1/admin/live-app-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            email,
          }),
        }
      );

      if (res.status === 400) {
        setErrMsg("This email is already registered");
        return;
      }
      if (!res.ok) {
        setErrMsg("Something went wrong");
        return;
      }

      markUserAsSubscribed(email);

      setIsSubmitted(true);

      setTimeout(() => {
        setIsOpen(false);
        setEmail("");
        setIsSubmitted(false);
        setEmailError("");
        setTouched(false);
      }, 2000);
    } catch (error) {
      console.error("Subscription error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setEmail("");
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        size="sm"
        showCloseButton={false}
        closeOnBackdropClick={false}
        closeOnEscape={false}
      >
        <div className="text-center py-4">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Thank You!
          </h3>
          <p className="text-gray-600">
            You've successfully subscribed to our updates.
          </p>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="sm"
      closeOnBackdropClick={true}
      closeOnEscape={true}
    >
      <div className="text-center">
        <Image
          src="/assets/img/LogoGreen.png"
          alt="Sbzee Logo"
          width={100}
          height={40}
          draggable={false}
          className="block mx-auto mb-2"
        />

        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Stay Updated with Sbzee!
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <input
              type="text"
              value={fullName}
              onChange={(e) => {
                const val = e.target.value;
                setFullName(val);
              }}
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors border-gray-300 focus:ring-accent-500 focus:border-accent-500"
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                const val = e.target.value.toLowerCase();
                setErrMsg("");
                setEmail(val);
                if (touched) {
                  setEmailError(
                    isValidEmail(val)
                      ? ""
                      : "Please enter a valid email address."
                  );
                }
              }}
              onBlur={() => {
                setTouched(true);
                setEmailError(
                  isValidEmail(email)
                    ? ""
                    : "Please enter a valid email address."
                );
              }}
              placeholder="Email address"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                emailError
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-accent-500 focus:border-accent-500"
              }`}
              aria-invalid={!!emailError}
              aria-describedby={emailError ? "email-error" : undefined}
              required
              disabled={isSubmitting}
            />
            {emailError && (
              <p id="email-error" className="mt-2 text-sm text-red-600">
                {emailError}
              </p>
            )}
          </div>
          {errMsg && <p className="mt-2 text-sm text-red-600">{errMsg}</p>}

          <button
            type="submit"
            disabled={!canSubmit}
            aria-disabled={!canSubmit}
            className={`w-full py-3 px-4 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors disabled:cursor-not-allowed ${
              canSubmit
                ? "bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500"
                : "bg-gray-300 text-gray-600 focus:ring-gray-400"
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span className="">Subscribing...</span>
              </div>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>
    </Modal>
  );
}
