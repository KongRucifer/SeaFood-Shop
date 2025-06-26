import Image from "next/image";

export default async function Popular_Shellfish() {
  return (
    <div className="container mx-auto py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 px-4">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-gray-500">
          SHRIMP, SCALLOPS & LOBSTERS
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-6 text-gray-500">
          The most popular shellfish in the sea.
        </h2>
      </div>

      <div className="flex overflow-x-auto space-x-3 sm:space-x-4 md:space-x-6 pb-4">
        {[
          {
            title: "Scallops",
            desc: "Wild-caught from cold North waters",
            price: "$70",
            src: "/images/content3food.webp",
          },
          {
            title: "Deveined Blue Shrimp",
            desc: "Small, sweet, and tender shellfish",
            price: "$75",
            src: "/images/content3foodd.webp",
          },
          {
            title: "Deveined Shrimp",
            desc: "Sweet, and tender shellfish",
            price: "$70",
            src: "/images/content3fooddd.jpg",
          },
          {
            title: "Wild Lobster Tails",
            desc: "Served with melted butter.",
            price: "$90",
            src: "/images/content3fooddt.webp",
          },
          {
            title: "Mackerel",
            desc: "A flavorful, oily fish rich in omega-3",
            price: "$90",
            src: "/images/seafood2.jpeg",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="w-64 sm:w-72 md:w-80 lg:w-80 xl:w-[340px] flex-shrink-0 bg-white rounded-lg shadow-lg p-4 sm:p-5 transform transition duration-300 hover:scale-105"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={300}
              height={180}
              className="w-full h-36 sm:h-44 md:h-48 lg:h-52 object-cover rounded-md"
            />
            <div className="mt-2">
              <h4 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
              <p className="text-xs sm:text-sm text-green-500 mt-1">
                price: {item.price}
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <button className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] p-3 sm:p-4 rounded-lg shadow-lg cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
