import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto container pt-4 pb-4 sm:items-center">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 text-white mb-20 mt-15">
            <div>
              <h3 className="mb-5 text-green-500">FULTON FISH MARKET</h3>
              <div className="text-md space-y-1">
                <p>
                  Opened in 1822, Lak 52 City don&apos;t s Fulton Fish Market is one of
                </p>
                <p>the oldest fish markets in Laos. We offer the world&apos;s</p>
                <p>
                  largest assortment of seafood online. Order fresh, healthy,
                  and delicious
                </p>
                <p>
                  seafood directly from the market with next-day delivery to
                  your door.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-green-500">LEARN ABOUT US</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/"
                    className="hover:text-gray-300 transition block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-gray-300 transition block"
                  >
                    About Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-gray-300 transition block"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-gray-300 transition block"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="hover:text-gray-300 transition block"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div className="xl:-mt-10 lg:-mt-10 sm:mt-10 md:-mt-13">
              <div className="mb-2 text-green-500 flex items-center gap-1">
                <div>

                <Image
                  src="/images/star.png"
                  alt="Star Logo"
                  width={54}
                  height={54}
                  className="-mt-5"
                />
                </div>
                <h3>SEAFOOD SHOP</h3>
              </div>
              <h3 className="mb-5 text-green-500">Follow us</h3>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/facebook.png"
                      alt="Facebook"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/instagram.png"
                      alt="Instagram"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/twitter.png"
                      alt="Twitter"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Seafood Shop. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
