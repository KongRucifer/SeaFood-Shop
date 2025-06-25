export default function Page() {
  return (
    <div className="container h-90 border">
      <h1 className="text-4xl font-bold">slide Seafood Menus</h1>
        <div className="flex flex-wrap justify-center mt-4">
            <div className="w-1/3 p-2">
            <img
                src="/images/kabpum.jpeg"
                alt="Seafood Dish 1"
                className="w-full h-auto rounded-lg shadow-lg"
            />
            <div>
                <h2>ຄາລາ: 100.000</h2>
                <h2 className="text-xl font-semibold mt-2">ປາກະພຸມ</h2>
                <p className="text-gray-600">ປາກະພຸມ ອາຫານແນວເກົາຫລີ </p>
            </div>
            </div>
            <div className="w-1/3 p-2">
            <img
                src="/images/koobcws.jpg"
                alt="Seafood Dish 2"
                className="w-full h-auto rounded-lg shadow-lg"
            />
            </div>
            <div className="w-1/3 p-2">
            <img
                src="/images/kapu.jpg"
                alt="Seafood Dish 3"
                className="w-full h-auto rounded-lg shadow-lg"
            />
            </div>
    </div>
    </div>
  );
}