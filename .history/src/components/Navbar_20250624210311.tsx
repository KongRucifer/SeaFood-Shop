import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="images/lets-icons_shop.png"
            className="h-8 mr-3"
            alt="Seafood Shop Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Seafood Shop
          </span>
        </a>
        <div className="flex md:order-2 gap-10">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Foods</Link>
          <Link href="/" className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 transition">
            Sign Up
          </Link>
          <Link href="/" className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 transition">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
