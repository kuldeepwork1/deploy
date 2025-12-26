"use client";

import { useEffect, useRef } from "react";
import { throttle } from "@/lib/utils";

interface UseParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
}

export function useParallax<T extends HTMLElement = HTMLDivElement>({
  speed = 0.5,
  direction = "down",
}: UseParallaxOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = throttle(() => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      const yPos = direction === "up" ? rate : -rate;

      element.style.transform = `translateY(${yPos}px)`;
    }, 16);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, direction]);

  return ref;
}
