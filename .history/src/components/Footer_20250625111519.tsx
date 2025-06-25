export default function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto p-4">
        <div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 text-white">
           <div>
             <h3>FULTON FISH MARKET</h3>
           <div>
            <h4> Opened in 1822, New York City’s Fulton Fish Market is one of </h4>
            <h4>the oldest fish markets in the United States. We offer the world's</h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
           
            
             largest assortment of seafood online. Order fresh, healthy and delicious 
             seafood direct from the market with next-day delivery to your door.
           </div>
           </div>
           <div>
             <h3>LEARN ABOUT US</h3>
           <div>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
           </div>
           </div>
           <div>
             <h3>SEAFOOD SHOP</h3>
           <div>
             <h3>Follow us</h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
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
 