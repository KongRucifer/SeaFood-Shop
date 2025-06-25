export default function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto p-4">
        <div>
           <div>
            ຮ້ານອາຫານທະເເລ
           </div>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Seafood Shop. All rights reserved.
        </div>
      </div>
    </footer>
  ); }
 