export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Slide Seafood Menus</h1>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {/* Card 1 */}
        <div className="min-w-[300px] flex-shrink-0 bg-white rounded-lg shadow-lg p-2">
          <img
            src="/images/kabpum.jpeg"
            alt="Seafood Dish 1"
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="mt-2">
            <h2 className="font-semibold text-gray-800">ປາກະພຸມ</h2>
            <p className="text-sm text-gray-600">ປາກະພຸມ ອາຫານແນວເກົາຫລີ</p>
            <p className="text-sm text-blue-500 mt-1">ຄາລາ: 100.000kip</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[300px] flex-shrink-0 bg-white rounded-lg shadow-lg p-2">
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
        <div className="min-w-[300px] flex-shrink-0 bg-white rounded-lg shadow-lg p-2">
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

        {/* Add more cards here... */}
      </div>
    </div>
  );
}
