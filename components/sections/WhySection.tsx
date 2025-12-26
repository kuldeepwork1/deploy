"use client";

import Image from "next/image";
import { Zap, Shield, Brain, Heart } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const benefits = [
  {
    icon: Zap,
    title: "Natural Energy",
    description:
      "Stay active all day with fresh vegetables rich in natural sugars and hydration. No artificial energy boosters needed.",
  },
  {
    icon: Shield,
    title: "Immunity",
    description:
      "Boost your body’s natural defense with vitamin-rich fruits and vegetables delivered fresh from local farms.",
  },
  {
    icon: Brain,
    title: "Focus & Mood",
    description:
      "Daily produce-rich meals improve focus, reduce stress, and help you feel balanced through the day.",
  },
  {
    icon: Heart,
    title: "Long-term Wellness",
    description:
      "Reduce lifestyle risks with farm-fresh vegetables and fruits available through the Sbzee App",
  },
];

export function WhySection() {
  return (
    <section id="why" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Sbzee Matters Every Day
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Fresh fruits and vegetables are the foundation of healthy
                living—rich in vitamins, minerals, antioxidants, and fiber. They
                power your mornings, sharpen your focus, and protect immunity
                without additives or artificial boosts.
              </p>
            </RevealOnScroll>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <RevealOnScroll key={benefit.title} delay={0.2 + index * 0.1}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg card-hover border border-gray-100">
                      <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-accent-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>

          <RevealOnScroll delay={0.3} className="lg:order-last">
            <div className="relative">
              <Image
                src="/assets/img/LadyinField.jpg"
                alt="Basket of seasonal fruits and vegetables"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
                priority
                draggable={false}
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
