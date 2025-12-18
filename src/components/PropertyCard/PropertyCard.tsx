import { useState } from "react";
import { Property } from "../../types/property";
import { Eye, Heart } from "../Icons";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [favorited, setFavorited] = useState(false);

  return (
    <article className="relative flex flex-col w-full max-w-sm rounded-3xl overflow-hidden bg-white shadow-lg">
      <div className="relative">
        <img src={property.images} alt={property.address ?? "Property"} className="w-full h-64 md:h-72 object-cover" />
        {property.daysOnHouzeo > 0 && (
          <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-medium text-gray-800 shadow-md">
            {property.daysOnHouzeo} days on Houzeo
          </div>
        )}
        {/* Favorite Heart */}
        <button
          type="button"
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
          onClick={(e) => {
            e.stopPropagation();
            setFavorited((prev) => !prev);
          }}
          className="absolute top-4 right-4"
        >
          <span
            className={`text-3xl select-none transition-colors duration-200 ${
              favorited ? "text-red-500" : "text-gray-400"
            }`}
          >
            <Heart />
          </span>
        </button>

        {/* Dots Indicator (carousel) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white/80" : "bg-white/40"}`}></div>
          ))}
        </div>
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center gap-2 rounded-full px-2 py-1.5 text-xs font-normal text-black border border-[#0000001A]">
            <span className=" w-3 h-3 rounded-full bg-green-500 "></span>
            {property.type}
          </span>
          <span className="text-gray-500 font-normal text-xs flex items-center gap-1">
            <Eye />
            2.3K
          </span>
        </div>

        <div className="flex justify-between items-center flex-wrap">
          <div className="text-lg font-semibold text-[#0B5AA5] mb-2">{property.price}</div>
          <div className="flex gap-4 text-base text-[#00000080] mb-3">
            <span className="font-medium text-xs">
              <span className="text-sm text-[#0B5AA5] font-semibold">{property.beds} </span>
              Beds
            </span>
            <span className="font-medium text-xs">
              <span className="text-sm text-[#0B5AA5] font-semibold">{property.baths} </span>
              Baths
            </span>
            <span className="font-medium text-xs">
              <span className="text-sm text-[#0B5AA5] font-semibold">{property.sqft} </span>
              sqft
            </span>
          </div>
        </div>

        <div className="mb-1">
          <span className="text-xs font-medium text-gray-900">{property.homeAddress} </span>
          <span className="text-xs font-normal">{property.address}</span>
        </div>

        {property.source && <div className="text-xs text-gray-500 font-normal">{property.source}</div>}
      </div>
    </article>
  );
};

export default PropertyCard;
