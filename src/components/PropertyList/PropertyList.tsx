import { Property } from "../../types/property";
import { DownArrow } from "../Icons";
import PropertyCard from "../PropertyCard";

interface PropertyListProps {
  properties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div>
      {/* Title & Count */}
      <div className="mb-6 lg:text-left">
        <h1 className="text-lg font-semibold text-black">Austin, TX real estate & homes for sale</h1>
        <div className="flex justify-between items-center">
          <p className="text-sm mt-2 font-medium text-[#00000066]">2,010 Homes</p>
          <div className="relative text-[#00000066] font-medium text-sm">
            Sort by:
            <select
              id="listing"
              name="listing"
              className="text-[#0B5AA5] ml-2 pr-6 bg-transparent appearance-none cursor-pointer"
            >
              <option value={"newListing"}>New Listing</option>
              <option value={"oldListing"}>Old Listing</option>
            </select>
            <button className="text-[#0B5AA5] cursor-pointer absolute right-0 -top-0.5">
              <DownArrow />
            </button>
          </div>
        </div>
      </div>
      {/* Grid of Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id || property.address} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
