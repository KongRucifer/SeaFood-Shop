import Image from "next/image";

export default function Banner() {
  return (
    <div
      className="relative w-full overflow-hidden mb-10
                    h-[300px]       
                    sm:h-[400px]    
                    md:h-[480px]    
                    lg:h-[520px]
                    xl:h-[600px]    
                  "
    >
      <Image
        src="/images/food.jpg"
        alt="no image seafood"
        layout="fill"
        objectFit="cover"
        className="opacity-60"
        priority
      />
      <h1
        className="relative z-10 flex items-center justify-center h-full  text-2xl   sm:text-3xl   
                    md:text-4xl  
                    lg:text-5xl    
                    xl:text-6xl   
                    font-bold text-gray-700
                  "
      >
        Welcome to Seafood Shop
      </h1>
    </div>
  );
}
