import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-[520px] overflow-hidden mb-10">
      <Image
        src="/images/food.jpg"
        alt="no image seafood"
        layout="fill"
        objectFit="cover"
        className="opacity-60"
        priority
      />
      <h1 className="relative z-10 flex items-center justify-center h-full text-4xl font-bold text-gray-700">
        Welcome to Seafood Shop
      </h1>
    </div>
  );
}
