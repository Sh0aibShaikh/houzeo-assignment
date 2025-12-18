import { Property } from "../../types/property";
import { Eye } from "../Icons";
import Heart from "../Icons/Heart";

interface Props {
  data: Property;
}

export default function PropertyCard({ data }: Props) {
  const { images, daysOnHouzeo, type, price, beds, baths, sqft, address, mlsInfo, views } = data;

  return (
    <div className="bg-white rounded-xl overflow-hidden border hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-56">
        <img src={images[0]} alt={address} loading="lazy" className="w-full h-full object-cover" />

        {/* Days badge */}
        <span className="absolute top-3 left-3 bg-white text-sm px-3 py-1 rounded-full shadow">
          {daysOnHouzeo} days on Houzeo
        </span>

        {/* Heart */}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full group">
          {/* <Heart size={18} className="text-gray-700 group-hover:animate-pulse" /> */}
        </button>

        {/* Slider dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"}`} />
          ))}
        </div>

        {/* MLS badge */}
        <div className="absolute bottom-3 right-3 bg-white px-2 py-1 rounded">
          <span className="text-xs font-semibold text-blue-600">TRIANGLE MLS</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Type + Views */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm border rounded-full px-3 py-1">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            {type}
          </span>

          <span className="flex items-center gap-1 text-sm text-gray-500">
            {/* <Eye size={16} /> */}
            {views}
          </span>
        </div>

        {/* Price & Specs */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <span className="text-sm text-gray-600">
            <b>{beds}</b> Beds
          </span>
          <span className="text-sm text-gray-600">
            <b>{baths}</b> Baths
          </span>
          <span className="text-sm text-gray-600">
            <b>{sqft}</b> sqft.
          </span>
        </div>

        {/* Address */}
        <p className="text-sm font-medium">{address}</p>

        {/* MLS */}
        <p className="text-xs text-gray-500">{mlsInfo}</p>
      </div>
    </div>
  );
}
