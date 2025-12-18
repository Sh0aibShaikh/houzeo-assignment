// src/App.tsx
import Header from "./components/Header";
import Filter from "./components/FilterBar";
import PropertyList from "./components/PropertyList";
import { properties } from "./utils/property";
import USMap from "./assets/USMap.png"; // Keep your map image

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <Header />
        <Filter />
      </div>

      <div className="pt-44 md:pt-44 lg:pt-36 flex flex-col lg:flex-row gap-8 max-w-screen-2xl mx-auto px-4 lg:px-8 py-8">
        <div className="hidden lg:block lg:w-1/2 xl:w-2/4 flex-shrink-0">
          <div className="">
            <img src={USMap} alt="US Map with property markers" className="w-full shadow-lg object-cover" />
          </div>
        </div>

        {/* Right: Listings Section */}
        <div className="pt-12 w-full lg:w-1/2 xl:w-2/4">
          <PropertyList properties={properties} />
        </div>
      </div>
    </div>
  );
}

export default App;
