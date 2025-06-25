import Image from "next/image";
export default async function Content4() {
  return (
    <div className="relative w-full h-160 r overflow-hidden mb-10">
      <img
        src="/images/imgfood.png"
        alt="no image seafood"
        className="absolute inset-0 w-full h-full object-cover "
      />
      <div className="relative z-10 flex items-center justify-center h-full text-4xl font-bold text-gray-700">
        <div>
          <div className="c">
            <img src="/images/puss.png" alt="no image pus" />
          </div>
          <h2>Dive In & Explore</h2>
          <h3>
            Craving buttery scallops, sushi-grade tuna, or wild-caught salmon?
            We’ve got the best, chef-quality seafood ready for your table!
          </h3>
          <h3>Pro Tip: Not sure what to try first?</h3>
          <button>OUR BEST SELLERS</button>
        </div>
      </div>
    </div>
  );
}
