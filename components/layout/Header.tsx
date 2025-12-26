import Link from "next/link";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { HeaderClient } from "../ui/HeaderClient";

const navigation = [
  { name: "Ghar", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white duration-300">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-14 lg:h-20 pl-2">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-1 items-center space-x-2 font-bold text-xl lg:text-2xl"
          >
            <Image
              src="/assets/img/LogoGreen.png"
              alt="Sbzee Logo"
              width={100}
              height={30}
              draggable={false}
            />
            <span className="sr-only">Sbzee</span>
          </Link>

          <HeaderClient navigation={navigation} />
        </div>
      </nav>
    </header>
  );
}
