import Image  from 'next/image';
export default async function Content4() {
  return (
    <div className="relative w-full h-160 r overflow-hidden mb-10">
  <img 
    src="/images/imgfood.png"
    alt="no image seafood" 
    className="absolute inset-0 w-full h-full object-cover "
  />
  <div className="relative z-10 flex items-center justify-center h-full text-4xl font-bold text-gray-700">
    Welcome to Seafood Shop
  </div>
</div>
  );
}