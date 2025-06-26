'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/lets-icons_shop.png"
              alt="Seafood Shop Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="text-xl font-semibold dark:text-white">
              Seafood Shop
            </span>
          </div>

          {/* Hamburger Button (sm only) */}
          <div className="sm:hidden sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-white focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex gap-4 md:gap-6 items-center">
            <Link href="/" className="hover:text-green-500 transition">Home</Link>
            <Link href="/" className="hover:text-green-500 transition">About Shop</Link>
            <Link href="/" className="hover:text-green-500 transition">Contact Us</Link>
            <Link href="/" className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 transition">Sign Up</Link>
            <Link href="/" className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 transition">Sign In</Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="sm:hidden flex flex-col justify-center items-center space-y-3 pb-4 text-gray-700 dark:text-white">
            <Link href="/" className="hover:text-green-500 transition">Home</Link>
            <Link href="/" className="hover:text-green-500 transition">About Shop</Link>
            <Link href="/" className="hover:text-green-500 transition">Contact Us</Link>
            <Link href="/" className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 transition">Sign Up</Link>
            <Link href="/" className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 transition">Sign In</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
