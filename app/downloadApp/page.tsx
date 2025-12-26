"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DownloadApp() {
  const router = useRouter();
  useEffect(() => {
    const ua = navigator.userAgent;

    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|Mac|iPod/i.test(ua);

    const androidUrl =
      "https://play.google.com/store/apps/details?id=com.jvfpl.sbzee";
    const iosUrl = "https://apps.apple.com/in/app/sbzee/id6752216196";

    const fallbackUrl = "https://sbzee.com";
    setTimeout(() => {
      router.push("/");
      window.location.href = isAndroid
        ? androidUrl
        : isIOS
        ? iosUrl
        : fallbackUrl;
    }, 2000);
  }, []);

  return (
    <p className="h-screen text-center flex items-center justify-center text-xl">
      Redirecting…
    </p>
  );
}
