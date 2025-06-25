export default function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto container pt-4 pb-4">
        <div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 text-white mb-20 mt-15">
           <div>
             <h3 className="mb-5 text-green-500">FULTON FISH MARKET</h3>
           <div>
            <p className="text-md">Opened in 1822, Lak 52 City’s Fulton Fish Market is one of </p>
            <p className="text-md">the oldest fish markets in the Loas. We offer the world's</p>
            <p className="text-md">largest assortment of seafood online. Order fresh, healthy and delicious </p>
            <p className="text-md">seafood direct from the market with next-day delivery to your door.</p>
           </div>
           </div>
           <div>
             <h3 className="mb-5 text-green-500">LEARN ABOUT US</h3>
           <div>
            <ul>
              <li className="cursor-" >About Shop</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
           </div>
           </div>
           <div className="-mt-10">
             <div className="mb-2 text-green-500 flex items-center gap-1"><img src="/images/star.png" alt="no image star" className="-mt-5" /><h3>SEAFOOD SHOP</h3></div>
           <div>
             <h3 className="mb-5 text-green-500">Follow us</h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/facebook.png" alt="Facebook" className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/instagram.png" alt="Instagram" className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/twitter.png" alt="Twitter" className="w-6 h-6" />
                  </a>
                </li>
               </ul>
           </div>
           </div>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Seafood Shop. All rights reserved.
        </div>
        </div>
      </div>
    </footer>
  ); }
 