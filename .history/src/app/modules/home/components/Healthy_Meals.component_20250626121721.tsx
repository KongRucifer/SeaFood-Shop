import Image from "next/image";

export default function Healthy_Meals() {
  return (
    <div className="container mx-auto py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14">
      <div  className="md:pl-10  pl-3 sm:pl-0 md:pl-0 xl:-pl-5 lg:-pl-109">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-gray-500">
          EXPERTLY CURATED BUNDLES
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-6 text-gray-500 max-w-3xl">
          Short on time? Our curated seafood bundles have everything you need
          for delicious and healthy meals.
        </h2>
      </div>

      <div className="flex overflow-x-auto space-x-3 sm:space-x-4 md:space-x-6 pb-4">
        {/* Card 1 */}
        <div className="w-56 sm:w-64 md:w-72 lg:w-80 flex-shrink-0 bg-white rounded-lg shadow-lg p-4 sm:p-5 transform transition duration-300 hover:scale-105">
          <div>
            <Image
              src="/images/shak.webp"
              alt="Seafood Dish 1"
              width={300}
              height={150} 
              className="rounded-md object-cover w-full h-36 sm:h-40 md:h-48"
            />
          </div>

          <div className="mt-2">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
              Seafood Dinner Party Bundle
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">Best seafood</p>
            <p className="text-xs sm:text-sm text-green-500 mt-1">price: $80</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] rounded-lg shadow-lg p-3 sm:p-4 cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-56 sm:w-64 md:w-72 lg:w-80 flex-shrink-0 bg-white rounded-lg shadow-lg p-4 sm:p-5 transform transition duration-300 hover:scale-105">
          <div>
            <Image
              src="/images/xaspus.webp"
              alt="Seafood Dish 2"
              width={300}
              height={150}
              className="rounded-md object-cover w-full h-36 sm:h-40 md:h-48"
            />
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
              Wild Alaska Salmon Bundle
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Commonly grilled or smoked
            </p>
            <p className="text-xs sm:text-sm text-green-500 mt-1">price: $100</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] rounded-lg shadow-lg p-3 sm:p-4 cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-56 sm:w-64 md:w-72 lg:w-80 flex-shrink-0 bg-white rounded-lg shadow-lg p-4 sm:p-5 transform transition duration-300 hover:scale-105">
          <div>
            <Image
              src="/images/xibxus.jpg"
              alt="Seafood Dish 3"
              width={300}
              height={150}
              className="rounded-md object-cover w-full h-36 sm:h-40 md:h-48"
            />
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
              Fulton&apos;s Finest Hits Bundle
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Tender and slightly sweet shellfish.
            </p>
            <p className="text-xs sm:text-sm text-green-500 mt-1">price: $200</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] rounded-lg shadow-lg p-3 sm:p-4 cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-56 sm:w-64 md:w-72 lg:w-80 flex-shrink-0 bg-white rounded-lg shadow-lg p-4 sm:p-5 transform transition duration-300 hover:scale-105">
          <div>
            <Image
              src="/images/xusxib.webp"
              alt="Seafood Dish 4"
              width={300}
              height={150}
              className="rounded-md object-cover w-full h-36 sm:h-40 md:h-48"
            />
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
              Slightly Sweet Shellfish
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">Rich and buttery meat</p>
            <p className="text-xs sm:text-sm text-green-500 mt-1">price: $230</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] rounded-lg shadow-lg p-3 sm:p-4 cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-56 sm:w-64 md:w-72 lg:w-80 flex-shrink-0 bg-white rounded-lg shadow-lg p-4 sm:p-5 transform transition duration-300 hover:scale-105">
          <div>
            <Image
              src="/images/content3food.webp"
              alt="Seafood Dish 5"
              width={300}
              height={150}
              className="rounded-md object-cover w-full h-36 sm:h-40 md:h-48"
            />
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
              Tuna
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Firm, meaty fish. Can be eaten raw
            </p>
            <p className="text-xs sm:text-sm text-green-500 mt-1">price: $50</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] rounded-lg shadow-lg p-3 sm:p-4 cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
