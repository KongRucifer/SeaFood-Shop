export default function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto p-4">
        <div>
          h3
           <div>
            Opened in 1822, New York City’s Fulton Fish Market is one of the oldest fish markets in the United States. We offer the world's largest assortment of seafood online. Order fresh, healthy and delicious seafood direct from the market with next-day delivery to your door.
           </div>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Seafood Shop. All rights reserved.
        </div>
      </div>
    </footer>
  ); }
 