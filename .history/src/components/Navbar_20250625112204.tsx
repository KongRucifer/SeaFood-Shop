import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto">
      <div className=" flex flex-wrap items-center justify-between  p-4">
        <a href="/" className="flex items-center">
          <img
            src="/images/lets-icons_shop.png"
            className="h-8 mr-3"
            alt="Seafood Shop Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Seafood Shop
          </span>
        </a>
        <div className="flex justify-center items-center md:order-2 gap-10">
          <Link href="/" className="-pb-1 border-b-2 border-transparent hover:border-green-500 transition">Home</Link>
          <Link href="/" className="-pb-1 border-b-2 border-transparent hover:border-green-500 transition">About Us</Link>
          <Link href="/" className="-pb-1 border-b-2 border-transparent hover:border-green-500 transition">Contact Us</Link>
          <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
          <Link href="/" className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 transition">
            Sign Up
          </Link>
          <Link href="/" className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 transition">
            Sign In
          </Link>
        </div>
      </div>
      </div>
    </nav>
  );
}
