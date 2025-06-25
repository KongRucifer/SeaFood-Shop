export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="text-center text-gray-500 dark:text-gray-400">
          © © {new Date().getFullYear()} Seafood Shop. All rights reserved.
        </div>
      </div>
    </footer>
  ); }
   <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Seafood Shop. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Developed by <a href="