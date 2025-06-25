export default function Page() {
  return (
    <div className="container h-90 border">
      <h1 className="text-4xl font-bold">slide Seafood Menus</h1>
        <div className="flex flex-wrap justify-center mt-4">
            <div className="w-1/3 p-2">
            <img
                src="/images/kabpum.jpg"
                alt="Seafood Dish 1"
                className="w-full h-auto rounded-lg shadow-lg"
            />
            </div>
            <div className="w-1/3 p-2">
            <img
                src="/images/food2.jpg"
                alt="Seafood Dish 2"
                className="w-full h-auto rounded-lg shadow-lg"
            />
            </div>
            <div className="w-1/3 p-2">
            <img
                src="/images/food3.jpg"
                alt="Seafood Dish 3"
                className="w-full h-auto rounded-lg shadow-lg"
            />
            </div>
    </div>
    </div>
  );
}