export default function Page() {
  return (
    <div className="container mx-auto py-8">
        <div >

      <div>
        <h1 className="text-2xl font-bold mb-1 text-gray-500 ">BEST SELLERS</h1>
      <h1 className="text-lg font-bold mb-6 text-gray-500 ">The most loved seafoods according to our customers. </h1>
      </div>
      <div>
      <h1 className="text-lg font-bold mb-6 text-gray-500 ">100% satisfaction guarantee</h1>
      </div>
        </div>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {/* Card 1 */}
        <div className="min-w-[300px] flex-shrink-0 bg-white rounded-lg shadow-lg p-2 ">
          <img
            src="/images/kabpum.jpeg"
            alt="Seafood Dish 1"
            className="w-full h-48 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="mt-2">
            <h2 className="font-semibold text-gray-800">ປາກະພຸມ</h2>
            <p className="text-sm text-gray-600">ປາກະພຸມ ອາຫານແນວເກົາຫລີ</p>
            <p className="text-sm text-blue-500 mt-1">ຄາລາ: 100.000kip</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[200px] flex-shrink-0 bg-white rounded-lg shadow-lg p-2">
          <img
            src="/images/koobcws.jpg"
            alt="Seafood Dish 2"
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="mt-2">
            <h2 className="font-semibold text-gray-800">ປາກະພຸມ</h2>
            <p className="text-sm text-gray-600">ປາກະພຸມ ອາຫານແນວເກົາຫລີ</p>
            <p className="text-sm text-blue-500 mt-1">ຄາລາ: 100.000kip</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="min-w-[200px] flex-shrink-0 bg-white rounded-lg shadow-lg p-2">
          <img
            src="/images/kapu.jpg"
            alt="Seafood Dish 3"
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="mt-2">
            <h2 className="font-semibold text-gray-800">ປາກະພຸມ</h2>
            <p className="text-sm text-gray-600">ປາກະພຸມ ອາຫານແນວເກົາຫລີ</p>
            <p className="text-sm text-blue-500 mt-1">ຄາລາ: 100.000kip</p>
          </div>
        </div>
        {/* Card 4 */}

        <div className="min-w-[200px] flex-shrink-0 bg-white rounded-lg shadow-lg p-2">
          <img
            src="/images/kapu.jpg"
            alt="Seafood Dish 3"
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="mt-2">
            <h2 className="font-semibold text-gray-800">ປາກະພຸມ</h2>
            <p className="text-sm text-gray-600">ປາກະພຸມ ອາຫານແນວເກົາຫລີ</p>
            <p className="text-sm text-blue-500 mt-1">ຄາລາ: 100.000kip</p>
          </div>
        </div>
         {/* Card 5 */}

        <div className="min-w-[200px] flex-shrink-0 bg-white rounded-lg shadow-lg p-2">
          <img
            src="/images/kapu.jpg"
            alt="Seafood Dish 3"
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="mt-2">
            <h2 className="font-semibold text-gray-800">ປາກະພຸມ</h2>
            <p className="text-sm text-gray-600">ປາກະພຸມ ອາຫານແນວເກົາຫລີ</p>
            <p className="text-sm text-blue-500 mt-1">ຄາລາ: 100.000kip</p>
          </div>
        </div>

      </div>
    </div>
  );
}
