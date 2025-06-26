import Image from "next/image";

export default function Healthy_Meals() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-2xl font-bold mb-1 text-gray-500">
          EXPERTLY CURATED BUNDLES
        </h1>
        <h2 className="text-lg font-bold mb-6 text-gray-500">
          Short on time? Our curated seafood bundles have everything you need
          for delicious and healthy meals.
        </h2>
      </div>

      <div className="flex overflow-x-auto space-x-4 pb-4">
        {/* Card 1 */}
        <div className="w-72 flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
          <Image
            src="/images/shak.webp"
            alt="Seafood Dish 1"
            width={300}
            height={200}
            className="rounded-md object-cover w-full h-48"
          />

          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">
              Seafood Dinner Party Bundle
            </h4>
            <p className="text-sm text-gray-600">Best seafood</p>
            <p className="text-sm text-green-500 mt-1">price: $80</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-72 flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
          <Image
            src="/images/xaspus.webp"
            alt="Seafood Dish 2"
            width={300}
            height={200}
            className="rounded-md object-cover w-full h-48"
          />
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">
              Wild Alaska Salmon Bundle
            </h4>
            <p className="text-sm text-gray-600">Commonly grilled or smoked</p>
            <p className="text-sm text-green-500 mt-1">price: $100</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-72 flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
        
          <Image
            src="/images/xibxus.jpg"
            alt="Seafood Dish 3"
            width={300}
            height={200}
            className="rounded-md object-cover w-full h-48"
          />
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">
              Fulton&apos;s Finest Hits Bundle
            </h4>
            <p className="text-sm text-gray-600">
              Tender and slightly sweet shellfish.
            </p>
            <p className="text-sm text-green-500 mt-1">price: $200</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-72 flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
          <Image
            src="/images/xusxib.webp"
            alt="Seafood Dish 4"
            width={300}
            height={200}
            className="rounded-md object-cover w-full h-48"
          />
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">
              Slightly Sweet Shellfish
            </h4>
            <p className="text-sm text-gray-600">Rich and buttery meat</p>
            <p className="text-sm text-green-500 mt-1">price: $230</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-72 flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
          <Image
            src="/images/content3food.webp"
            alt="Seafood Dish 5"
            width={300}
            height={200}
            className="rounded-md object-cover w-full h-48"
          />
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">Tuna</h4>
            <p className="text-sm text-gray-600">
              Firm, meaty fish. Can be eaten raw
            </p>
            <p className="text-sm text-green-500 mt-1">price: $50</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
