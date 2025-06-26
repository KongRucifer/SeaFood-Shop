import Image from "next/image";

export default function Fulton_Finsider() {
  return (
    <div className="relative w-full h-auto lg:h-[40rem] overflow-hidden mb-10">
      {/* Background Image */}
      <div className="absolute w-full h-full">
        <Image
          src="/images/celender2.png"
          alt="Seafood background"
          layout="fill"
          quality={90}
          objectFit="cover"
          
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col md:flex-row flex-wrap justify-center items-center h-full text-center px-4 sm:px-6 md:px-10 text-gray-800 bg-black/30 py-10">
        {/* Card Template */}
        {[
          {
            title: "Dive In & Explore",
            icon: "/images/puss.png",
            desc:
              "Craving buttery scallops, sushi-grade tuna, or wild-caught salmon? We've got the best, chef-quality seafood ready for your table!",
            tip: "Pro Tip: Not sure what to try first?",
            button: "OUR BEST SELLERS",
          },
          {
            title: "Make Your Catch",
            icon: "/images/pass.png",
            desc:
              "Love fresh seafood? Set it and forget it! Subscribe for savings, VIP perks, and exclusive gifts—no effort required!",
            tip: "Save 15% or more on every order!",
            button: "SUBSCRIBE & SAVE",
          },
          {
            title: "Reel It In",
            icon: "/images/puss.png",
            desc:
              "Our seafood ships fast, freshly-frozen, and packed with care in eco-friendly materials. No more guessing how long that store-bought fish has been hanging around!",
            tip: "Worried about cooking? Don’t be!",
            button: "TIPS & RECIPES",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="w-full sm:w-[20rem] md:w-[22rem] lg:w-[24rem] xl:w-[26rem] bg-white/10 rounded-xl p-6 m-4 shadow-lg backdrop-blur-sm"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow">
              <Image
                src={card.icon}
                alt="Seafood Icon"
                width={48}
                height={48}
                className="hover-updown"
              />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white">
              {card.title}
            </h2>
            <p className="text-sm sm:text-base mb-2 text-gray-300">{card.desc}</p>
            <p className="text-sm sm:text-base mb-4 font-medium text-white">{card.tip}</p>
            <button className="px-4 py-2 sm:px-5 sm:py-2 bg-white border border-gray-300 text-gray-600 rounded hover:bg-gray-100 transition">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
