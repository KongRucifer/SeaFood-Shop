import Image from "next/image";

export default function Best_Sellers() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 md:px-8 mb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-500">
            BEST SELLERS
          </h1>
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-500 mt-1">
            The most loved seafoods according to our customers.
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <div>
          <Image
            src="/images/firstCheer.png"
            alt="Satisfaction Guarantee"
            width={28}
            height={28}
          />
          </div>
          <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-500">
            100% satisfaction guarantee
          </span>
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-4 pb-4">
        {[
          {
            title: "Lobster",
            desc: "Rich and buttery meat.",
            price: "$30",
            img: "/images/kabpum.jpeg",
          },
          {
            title: "Shrimp",
            desc: "Small, sweet, and tender shellfish.",
            price: "$20",
            img: "/images/koobcws.jpg",
          },
          {
            title: "Lobster",
            desc: "Often boiled or grilled.",
            price: "$30",
            img: "/images/kapu.jpg",
          },
          {
            title: "Wild Atlantic Cod Portion",
            desc: "Oily fish rich in omega-3.",
            price: "$40",
            img: "/images/fishwhite.webp",
          },
          {
            title: "Wild Colossal Blue Shrimp",
            desc: "Small, sweet, and tender shellfish.",
            price: "$50",
            img: "/images/food.jpg",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="min-w-[240px] sm:min-w-[260px] md:min-w-[280px] lg:min-w-[300px] bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105"
          >
            <div className="overflow-hidden rounded-md relative w-full h-40 sm:h-44 md:h-48 lg:h-52">
             div
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="mt-2">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <p className="text-sm text-green-500 mt-1">
                price: {item.price}
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <button className="w-full sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] rounded-lg shadow-md p-3 sm:p-4 bg-green-500 hover:bg-green-700 text-white transition-transform duration-300 hover:scale-105">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
