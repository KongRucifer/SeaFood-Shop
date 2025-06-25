import Link from "next/link";
import Image from "next/image";
export default async function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto">
        <div className=" flex flex-wrap items-center justify-between  p-4">
          <div className="flex items-center">
           <Image
        src="/images/food.jpg"
        alt="Seafood Banner"
        layout="fill"
        objectFit="cover"
        className="opacity-60"
        priority // Ensures it loads quickly
      />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Seafood Shop
            </span>
          </div>
          <div className="flex justify-center items-center md:order-2 gap-10">
            <Link
              href="/"
              className="-pb-1 border-b-2 border-transparent hover:border-green-500 transition"
            >
              Home
            </Link>
            <Link
              href="/"
              className="-pb-1 border-b-2 border-transparent hover:border-green-500 transition"
            >
              About Shop
            </Link>
            <Link
              href="/"
              className="-pb-1 border-b-2 border-transparent hover:border-green-500 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 transition"
            >
              Sign Up
            </Link>
            <Link
              href="/"
              className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
