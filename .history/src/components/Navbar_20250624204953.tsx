
export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="/img"
            className="h-8 mr-3"
            alt="Seafood Shop Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Seafood Shop
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
}