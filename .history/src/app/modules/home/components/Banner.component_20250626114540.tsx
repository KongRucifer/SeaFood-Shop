import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full overflow-hidden mb-10
                    h-[300px]       // base height for xs
                    sm:h-[400px]    // small screens
                    md:h-[480px]    // medium screens
                    lg:h-[520px]    // large screens
                    xl:h-[600px]    // extra large screens
                  ">
      <Image
        src="/images/food.jpg"
        alt="no image seafood"
        layout="fill"
        objectFit="cover"
        className="opacity-60"
        priority
      />
      <h1 className="relative z-10 flex items-center justify-center h-full
                    text-2xl        // base font size
                    sm:text-3xl     // small
                    md:text-4xl     // medium
                    lg:text-5xl     // large
                    xl:text-6xl     // xl
                    font-bold text-gray-700
                  ">
        Welcome to Seafood Shop
      </h1>
    </div>
  );
}
