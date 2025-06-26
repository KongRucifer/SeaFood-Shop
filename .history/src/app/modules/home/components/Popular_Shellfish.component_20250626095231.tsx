import Image from "next/image";

export default async function Popular_Shellfish() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-2xl font-bold mb-1 text-gray-500">
          SHRIMP, SCALLOPS & LOBSTERS
        </h1>
        <h2 className="text-lg font-bold mb-6 text-gray-500">
          The most popular shellfish in the sea.
        </h2>
      </div>

      <div className="flex overflow-x-auto space-x-4 pb-4">
        {/* Card 1 */}
        <div className="w-[300px] flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
          <div>

          <Image
            src="/images/content3food.webp"
            alt="Scallops"
            width={300}
            height={192}
            className="w-full h-48 object-cover rounded-md"
          />
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">Scallops</h4>
            <p className="text-sm text-gray-600">Wild-caught from cold North waters</p>
            <p className="text-sm text-green-500 mt-1">price: $70</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300 hover:scale-105">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[300px] flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
         <div>

          <Image
            src="/images/content3foodd.webp"
            alt="Deveined Blue Shrimp"
            width={300}
            height={192}
            className="w-full h-48 object-cover rounded-md"
          />
         </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">Deveined Blue Shrimp</h4>
            <p className="text-sm text-gray-600">Small, sweet, and tender shellfish</p>
            <p className="text-sm text-green-500 mt-1">price: $75</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300 hover:scale-105">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[300px] flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
        <div>

          <Image
            src="/images/content3fooddd.jpg"
            alt="Deveined Shrimp"
            width={300}
            height={192}
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">Deveined Shrimp</h4>
            <p className="text-sm text-gray-600">Sweet, and tender shellfish</p>
            <p className="text-sm text-green-500 mt-1">price: $70</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300 hover:scale-105">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-[300px] flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
        <div>

          <Image
            src="/images/content3fooddt.webp"
            alt="Wild Lobster Tails"
            width={300}
            height={192}
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">Wild Lobster Tails</h4>
            <p className="text-sm text-gray-600">Served with melted butter.</p>
            <p className="text-sm text-green-500 mt-1">price: $90</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300 hover:scale-105">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-[300px] flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
           div
          <Image
            src="/images/seafood2.jpeg"
            alt="Mackerel"
            width={300}
            height={192}
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">Mackerel</h4>
            <p className="text-sm text-gray-600">A flavorful, oily fish rich in omega-3</p>
            <p className="text-sm text-green-500 mt-1">price: $90</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transition duration-300 hover:scale-105">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
