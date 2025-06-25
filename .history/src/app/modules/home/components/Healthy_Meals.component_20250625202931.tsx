import Image from "next/image";
export default async function Healthy_Meals() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-2xl font-bold mb-1 text-gray-500 ">
          EXPERTLY CURATED BUNDLES
        </h1>
        <h2 className="text-lg font-bold mb-6 text-gray-500 ">
          Short on time? Our curated seafood bundles have everything you need
          for delicious and healthy meals.
        </h2>
      </div>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {/* Card 1 */}
        <div className="min-w-[200px] flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
          <div>
            <img
              src="/images/shak.webp"
              alt="Seafood Dish 1"
              className="w-full h-48 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">Seafood Dinner Party Bundle</h4>
            <p className="text-sm text-gray-600">best seafood</p>
            <p className="text-sm text-green-500 mt-1">price: $80</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] flex-shrink-0  rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transform transition duration-300 hover:scale-105">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[200px] flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
          <div>
            <img
              src="/images/xaspus.webp"
              alt="Seafood Dish 2"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">Wild Alaska Salmon Bundle, Small</h4>
            <p className="text-sm text-gray-600">Commonly grilled or smoked</p>
            <p className="text-sm text-green-500 mt-1">ຄາລາ: 100.000kip</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] flex-shrink-0  rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transform transition duration-300 hover:scale-105">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="min-w-[200px] flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
          <div>
            <img
              src="/images/xibxus.jpg"
              alt="Seafood Dish 3"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">ປາກະພຸມ</h4>
            <p className="text-sm text-gray-600">ປາກະພຸມ ອາຫານແນວເກົາຫລີ</p>
            <p className="text-sm text-green-500 mt-1">ຄາລາ: 100.000kip</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] flex-shrink-0  rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transform transition duration-300 hover:scale-105">
              Add To Cart
            </button>
          </div>
        </div>
        {/* Card 4 */}

        <div className="min-w-[200px] flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
          <div>
            <img
              src="/images/xusxib.webp"
              alt="Seafood Dish 3"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">ປາກະພຸມ</h4>
            <p className="text-sm text-gray-600">ປາກະພຸມ ອາຫານແນວເກົາຫລີ</p>
            <p className="text-sm text-green-500 mt-1">ຄາລາ: 100.000kip</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] flex-shrink-0  rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transform transition duration-300 hover:scale-105">
              Add To Cart
            </button>
          </div>
        </div>
        {/* Card 5 */}

        <div className="min-w-[200px] flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
          <div>
            <img
              src="/images/content3food.webp"
              alt="Seafood Dish 3"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">ປາກະພຸມ</h4>
            <p className="text-sm text-gray-600">ປາກະພຸມ ອາຫານແນວເກົາຫລີ</p>
            <p className="text-sm text-green-500 mt-1">ຄາລາ: 100.000kip</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] flex-shrink-0  rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transform transition duration-300 hover:scale-105">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
