import Image  from "next/image";
export default async function Best_Sellers() {
  return (
    <div className="container mx-auto py-8 mb-10">
      <div className="flex  justify-between ">
        <div>
          <h1 className="text-2xl font-bold mb-1 text-gray-500 ">
            BEST SELLERS
          </h1>
          <h2 className="text-lg font-bold mb-6 text-gray-500 ">
            The most loved seafoods according to our customers.{" "}
          </h2>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6 text-gray-500 flex  ">
            <img  src="/images/firstCheer.png"  alt="no image" className="w-7" />
            100% satisfaction guarantee
          </h2>
        </div>
      </div>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {/* Card 1 */}
        <div className="w-70 flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
          <div className="overflow-hidden rounded-md">
            <img 
              src="/images/kabpum.jpeg"
               alt="Seafood Dish 1" 
              className="w-full h-48 object-cover  rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">Lobster</h4>
            <p className="text-sm text-gray-600">Rich and buttery meat. </p>
            <p className="text-sm text-green-500 mt-1">price: $30</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] flex-shrink-0  rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transform transition duration-300 hover:scale-105">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-70 flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
          <div>
            <img 
              src="/images/koobcws.jpg"
               alt="Seafood Dish 2"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">Shrimp</h4>
            <p className="text-sm text-gray-600">Small, sweet, and tender shellfish.</p>
            <p className="text-sm text-green-500 mt-1">price: $20</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] flex-shrink-0  rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transform transition duration-300 hover:scale-105">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-70 flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
          <div>
            <img 
              src="/images/kapu.jpg"
               alt="Seafood Dish 3"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">Lobster</h4>
            <p className="text-sm text-gray-600">Often boiled or grilled.</p>
            <p className="text-sm text-green-500 mt-1">price: $30</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] flex-shrink-0  rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transform transition duration-300 hover:scale-105">
              Add To Cart
            </button>
          </div>
        </div>
        {/* Card 4 */}

        <div className="w-70 flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
          <div>
            <img 
              src="/images/fishwhite.webp"
               alt="Seafood Dish 3"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">Wild Atlantic Cod Portion</h4>
            <p className="text-sm text-gray-600">oily fish rich in omega-3.</p>
            <p className="text-sm text-green-500 mt-1">price: $40</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="min-w-[200px] flex-shrink-0  rounded-lg shadow-lg p-5 cursor-pointer bg-green-500 hover:bg-green-700 text-white transform transition duration-300 hover:scale-105">
              Add To Cart
            </button>
          </div>
        </div>
        {/* Card 5 */}

        <div className="w-70 flex-shrink-0 bg-white rounded-lg shadow-lg p-5 transform transition duration-300 hover:scale-105">
          <div>
            <img 
              src="/images/food.jpg"
               alt="Seafood Dish 3"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">Wild Colossal Blue Shrimp</h4>
            <p className="text-sm text-gray-600">Small, sweet, and tender shellfish.</p>
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
