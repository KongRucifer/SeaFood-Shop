import Link from "next/link";
import Image from "next/image";

export default async function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/lets-icons_shop.png"
              alt="Seafood Shop Logo"
              width={32}
              height={32}
              className="mr-2 sm:mr-3"
            />
            <span className="text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Seafood Shop
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-3 sm:gap-6 md:gap-8 md:order-2 mt-4 sm:mt-0">
            <Link
              href="/"
              className="text-sm md:text-base border-b-2 border-transparent hover:border-green-500 transition"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-sm md:text-base border-b-2 border-transparent hover:border-green-500 transition"
            >
              About Shop
            </Link>
            <Link
              href="/"
              className="text-sm md:text-base border-b-2 border-transparent hover:border-green-500 transition"
            >
              Contact Us
            </Link>

            {/* Buttons */}
            <Link
              href="/"
              className="text-sm md:text-base border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 transition"
            >
              Sign Up
            </Link>
            <Link
              href="/"
              className="text-sm md:text-base border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
