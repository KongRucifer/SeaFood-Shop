import Image from "next/image";

export default function Best_Sellers() {
  return (
    <div className="container mx-auto py-8 mb-10">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold mb-1 text-gray-500">BEST SELLERS</h1>
          <h2 className="text-lg font-bold mb-6 text-gray-500">
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
          <span className="text-lg font-bold text-gray-500">
            100% satisfaction guarantee
          </span>
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-4 pb-4">
        {/* Card template */}
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
            className="w-75 flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105"
          >
            <div className="overflow-hidden rounded-md relative w-full h-48">
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="mt-2">
              <h4 className="font-semibold text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <p className="text-sm text-green-500 mt-1">price: {item.price}</p>
            </div>
            <div className="flex justify-center mt-4">
              <button className="min-w-[200px] rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transform transition duration-300 hover:scale-105">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
