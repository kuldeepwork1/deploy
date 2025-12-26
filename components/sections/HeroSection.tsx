import { Download, ArrowRight } from "lucide-react";
import { ParallaxSection } from "@/components/ui/ParallaxSection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import Image from "next/image";
import { MobileCarousel } from "../ui/MobileCarousel";

export function HeroSection() {
  const slides = [
    "/assets/img/slide1.png",
    "/assets/img/slide2.png",
    "/assets/img/slide3.png",
  ];

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ParallaxSection
      backgroundImage="/assets/img/backgroundNew.png"
      className="min-h-screen flex items-center text-white"
    >
      <div className="container-custom mt-20 py-8 flex flex-col lg:flex-row items-center justify-between ">
        <div className="max-w-3xl px-3 lg:px-0">
          <RevealOnScroll distance={0}>
            <h1 className="font-black leading-tight mb-6">
              <span className="text-black text-2xl md:text-4xl lg:text-5xl sm:text-3xl">
                Sbzee Fuels Life - Order Fresh
              </span>
              <span className="text-accent-500 text-xl block md:text-4xl lg:text-5xl sm:text-2xl mt-2 ">
                Vegetables & Fruits Online
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} distance={0}>
            <p className="text-md leading-relaxed mb-8 text-gray-600 w-[75%] lg:text-lg">
              Experience the joy of farm-fresh produce with Sbzee App, Your
              local best online grocery app for healthy living. Order online and
              enjoy freshness at your doorstep.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4} distance={0}>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex gap-4">
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.jvfpl.sbzee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-[120px] lg:w-[200px] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
                >
                  {/* Normal image */}
                  <Image
                    src="/assets/img/google_store.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={45}
                    draggable={false}
                    className="rounded-lg shadow-sm w-[120px] lg:w-[200px]"
                  />

                  {/* Hover image */}
                  <Image
                    src="/assets/img/google_store_active.png"
                    alt="Download on the Play Store Hover"
                    width={200}
                    height={45}
                    draggable={false}
                    className="w-full absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  />
                </a>

                {/* Apple App Store */}
                <a
                  href="https://apps.apple.com/in/app/sbzee/id6752216196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-[120px] lg:w-[200px] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
                >
                  {/* Normal image */}
                  <Image
                    src="/assets/img/app_store.png"
                    alt="Download on the App Store"
                    width={200}
                    height={45}
                    draggable={false}
                    className="w-full block transition-opacity duration-300 hover:opacity-0"
                  />

                  {/* Hover image */}
                  <Image
                    src="/assets/img/app_store_active.png"
                    alt="Download on the App Store Hover"
                    width={200}
                    height={45}
                    draggable={false}
                    className="w-full absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <div className="flex flex-1 items-center justify-around">
          <MobileCarousel slides={slides} />
        </div>
      </div>
    </ParallaxSection>
  );
}
