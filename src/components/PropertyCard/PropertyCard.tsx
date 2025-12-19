import { useState } from "react";
import { Property } from "../../types/property";
import { Eye, Heart, RightArrow } from "../Icons";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [favorited, setFavorited] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <article className="relative flex flex-col w-full max-w-sm lg:max-w-none rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-200">
      <div className="relative group">
        <img
          src={property.images[index]}
          alt={property.address ?? "Property"}
          className="w-full h-64 md:h-72 object-cover"
          loading="lazy"
        />
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
            className={`text-3xl select-none transition-colors duration-200 hover:animate-pulse ${
              favorited ? "text-red-500" : "text-gray-400"
            }`}
          >
            <Heart />
          </span>
        </button>

        {/* Nav Arrows */}
        <button
          type="button"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            setIndex((i) => (i - 1 + property.images.length) % property.images.length);
          }}
          className="py-2 px-2.5 absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <RightArrow className="rotate-180" />
        </button>

        <button
          type="button"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            setIndex((i) => (i + 1) % property.images.length);
          }}
          className="py-2 px-2.5 absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <RightArrow />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {property.images.map((_, i) => (
            <button
              key={i}
              aria-label={`View image ${i + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              className={`w-2 h-2 rounded-full ${i === index ? "bg-white/90" : "bg-white/40"}`}
            />
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
            {property.views ?? "—"}
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
