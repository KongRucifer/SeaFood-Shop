export default function Content1() {
  return (
    <div className="relative container h-90 r overflow-hidden">
  {/* Image as background */}
  <img
    src="/images/food.jpg"
    alt="no image seafood"
    className="absolute inset-0 w-full h-full object-cover opacity-60"
  />
  {/* Centered text */}
  <h1 className="relative z-10 flex items-center justify-center h-full text-4xl font-bold text-black">
    Welcome to Seafood Shop
  </h1>
</div>
  );
}