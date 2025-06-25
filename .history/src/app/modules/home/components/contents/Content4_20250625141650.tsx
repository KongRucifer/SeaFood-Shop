import Image from "next/image";
export default async function Content4() {
  return (
    <div className="relative w-full h-[40rem] overflow-hidden mb-10">
      <img
        src="/images/imgfood.png"
        alt="Seafood background"
        className="absolute  w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-start h-full text-center px-4 md:px-10 text-gray-800 bg-black/30 ">
        <div className="max-w-sm  rounded-xl p-6 m-4 shadow-lg">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow ">
            <img
              src="/images/puss.png"
              alt="Seafood Icon"
              className="w-12 h-12 hover-updown"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">Dive In & Explore</h2>
          <p className="text-sm mb-2">
            Craving buttery scallops, sushi-grade tuna, or wild-caught salmon?
            We’ve got the best, chef-quality seafood ready for your table!
          </p>
          <p className="text-sm mb-4 font-medium text-white">
            Pro Tip: Not sure what to try first?
          </p>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-600 rounded hover:bg-gray-100 transition">
            OUR BEST SELLERS
          </button>
        </div>

        <div
            key={index}
            className="max-w-sm  rounded-xl p-6 m-4 shadow-lg"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow ">
              <img
                src="/images/puss.png"
                alt="Seafood Icon"
                className="w-12 h-12 hover-updown"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">Dive In & Explore</h2>
            <p className="text-sm mb-2">
              Craving buttery scallops, sushi-grade tuna, or wild-caught salmon?
              We’ve got the best, chef-quality seafood ready for your table!
            </p>
            <p className="text-sm mb-4 font-medium text-white">
              Pro Tip: Not sure what to try first?
            </p>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-600 rounded hover:bg-gray-100 transition">
              OUR BEST SELLERS
            </button>
          </div>

          <div
            key={index}
            className="max-w-sm  rounded-xl p-6 m-4 shadow-lg"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow ">
              <img
                src="/images/puss.png"
                alt="Seafood Icon"
                className="w-12 h-12 hover-updown"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">Dive In & Explore</h2>
            <p className="text-sm mb-2">
              Craving buttery scallops, sushi-grade tuna, or wild-caught salmon?
              We’ve got the best, chef-quality seafood ready for your table!
            </p>
            <p className="text-sm mb-4 font-medium text-white">
              Pro Tip: Not sure what to try first?
            </p>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-600 rounded hover:bg-gray-100 transition">
              OUR BEST SELLERS
            </button>
          </div>
      </div>
    </div>
  );
}
