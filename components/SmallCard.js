import Image from "next/image";

export default function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center mt-5 mr-6 space-x-4 rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition trasnform duration-200 ease-out">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image className="rounded-lg" src={img} layout="fill" />
      </div>

      {/* Right */}
      <div className="">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}
