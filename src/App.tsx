import Header from "./components/Header";
import Filter from "./components/FilterBar";
import PropertyList from "./components/PropertyList";
import PropertyMap from "./components/PropertyMap/PropertyMap";
import { properties } from "./utils/property";
import { MapIcon } from "./components/Icons";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <Header />
        <Filter />
      </div>

      <div className="pt-44 md:pt-44 lg:pt-36 flex flex-col lg:flex-row gap-6 max-w-screen-2xl mx-auto px-4 lg:px-6 py-8">
        <div className="hidden lg:block lg:w-1/2 xl:w-2/4 flex-shrink-0">
          <PropertyMap />
        </div>

        {/* Right: Listings Section */}
        <div className="pt-12 w-full lg:w-1/2 xl:w-2/4">
          <PropertyList properties={properties} />
        </div>
      </div>

      <button className="lg:hidden fixed left-1/2 -translate-x-1/2 bottom-6 z-40 bg-[#0E5293] text-white px-5 py-3 rounded-full flex items-center gap-3 shadow-lg hover:scale-105 transform transition duration-200">
        <span className="font-semibold">Map</span>
        <MapIcon />
      </button>
    </div>
  );
}

export default App;
