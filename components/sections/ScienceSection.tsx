"use client";

import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const sciencePoints = [
  {
    title: "Vitamin retention",
    description:
      "Vitamin C degrades after cutting; fresher produce delivers more.",
  },
  {
    title: "Antioxidants",
    description:
      "Lycopene, polyphenols, and flavonoids are higher in fresh, ripe produce.",
  },
  {
    title: "Fiber quality",
    description:
      "Intact fiber supports a healthier gut and better nutrient absorption.",
  },
  {
    title: "Hydration",
    description:
      "Water-rich fruits like watermelon and oranges help maintain fluid balance.",
  },
];

export function ScienceSection() {
  return (
    <section id="science" className="section-padding bg-soft">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <RevealOnScroll>
            <div className="relative">
              <Image
                src="/assets/img/LadyFreshSbzeeBasket.jpg"
                alt="Illustration of nutrients in fresh produce"
                width={600}
                height={400}
                draggable={false}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                The Science Behind Sbzee
              </h2>
            </RevealOnScroll>

            <div className="space-y-6">
              {sciencePoints.map((point, index) => (
                <RevealOnScroll key={point.title} delay={0.2 + index * 0.1}>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {point.title}:
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
