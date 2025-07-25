import Image from "next/image";

export default function Fulton_Finsider() {
  return (
    <div className="relative w-full h-[40rem] overflow-hidden mb-10">
      {/* Background Image */}
      <div className="absolute w-full h-full">
        <Image
          src="/images/celender2.png"
          alt="Seafood background"
          layout="fill"
          objectFit="cover"
          quality={90}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-start h-full text-center px-4 md:px-10 text-gray-800 bg-black/30">
        {/* Card 1 */}
        <div className="max-w-sm rounded-xl p-6 m-4 shadow-lg bg-white/10">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow">
            <Image
              src="/images/puss.png"
              alt="Seafood Icon"
              width={48}
              height={48}
              className="hover-updown"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-white">Dive In & Explore</h2>
          <p className="text-sm mb-2 text-gray-300">
            Craving buttery scallops, sushi-grade tuna, or wild-caught salmon?
            We’ve got the best, chef-quality seafood ready for your table!
          </p>
          <p className="text-sm mb-4 font-medium text-white">
            Pro Tip: Not sure what to try first?
          </p>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-600 rounded hover:bg-gray-100 transition">
            OUR BEST SELLERS
          </button>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm rounded-xl p-6 m-4 shadow-lg bg-white/10">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow">
            <Image
              src="/images/pass.png"
              alt="Seafood Icon"
              width={48}
              height={48}
              className="hover-updown"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-white">Make Your Catch</h2>
          <p className="text-sm mb-2 text-gray-300">
            Love fresh seafood? Set it and forget it! Subscribe for savings, VIP
            perks, and exclusive gifts—no effort required!
          </p>
          <p className="text-sm mb-4 font-medium text-white">
            Save 15% or more on every order!
          </p>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-600 rounded hover:bg-gray-100 transition">
            SUBSCRIBE & SAVE
          </button>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm rounded-xl p-6 m-4 shadow-lg bg-white/10">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow">
            <Image
              src="/images/puss.png"
              alt="Seafood Icon"
              width={48}
              height={48}
              className="hover-updown"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-white">Reel It In</h2>
          <p className="text-sm mb-2 text-gray-300">
            Our seafood ships fast, freshly-frozen, and packed with care in
            eco-friendly materials. No more guessing how long that store-bought
            fish has been hanging around!
          </p>
          <p className="text-sm mb-4 font-medium text-white">
            Worried about cooking? Don’t be!
          </p>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-600 rounded hover:bg-gray-100 transition">
            TIPS & RECIPES
          </button>
        </div>
      </div>
    </div>
  );
}
