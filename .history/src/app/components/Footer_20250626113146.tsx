import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 text-white mb-10">
          {/* About Section */}
          <div >
            <h3 className="mb-4 text-green-500 text-lg sm:text-xl">FULTON FISH MARKET</h3>
            <div className="text-sm sm:text-base space-y-2">
              <p>
                Opened in 1822, Lak 52 City don&apos;t s Fulton Fish Market is one of
              </p>
              <p>the oldest fish markets in Laos. We offer the world&apos;s</p>
              <p>
                largest assortment of seafood online. Order fresh, healthy, and delicious
              </p>
              <p>
                seafood directly from the market with next-day delivery to your door.
              </p>
            </div>
          </div>

          {/* Learn About Us */}
          <div className="xl:ml-30 lg:ml-30 sm:ml-30 md:-ml-20">
            <h3 className="mb-4 text-green-500 text-lg sm:text-xl">LEARN ABOUT US</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                { label: "Home", href: "/" },
                { label: "About Shop", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
              ].map(({ label, href }, index) => (
                <li key={index}>
                  <Link href={href} className="hover:text-gray-300 transition block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Logo */}
          <div className="flex flex-col gap-3 xl:-mt-5 lg:-mt-5 sm:mt-5  xl:ml-30 lg:ml-30">
            <div className="flex items-center gap-2">
              <div>
              <Image
                src="/images/star.png"
                alt="Star Logo"
                width={54}
                height={54}
                
              />
              </div>
              <h3 className="text-green-500 text-lg sm:text-xl">SEAFOOD SHOP</h3>
            </div>

            <h3 className="text-green-500 mt-2 mb-1 text-base sm:text-lg">Follow us</h3>
            <ul className="flex space-x-4">
              {[
                { src: "/images/facebook.png", alt: "Facebook", link: "https://www.facebook.com" },
                { src: "/images/instagram.png", alt: "Instagram", link: "https://www.instagram.com" },
                { src: "/images/twitter.png", alt: "Twitter", link: "https://www.twitter.com" },
              ].map(({ src, alt, link }, index) => (
                <li key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Image src={src} alt={alt} width={24} height={24} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center text-sm sm:text-base text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Seafood Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
