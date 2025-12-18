import Header from "./components/Header";
import Filter from "./components/FilterBar";
import USMap from "./assets/USMap.png";

function App() {
  console.log("App component rendered!");
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
        <Filter />
      </div>
      <div className="pt-36 max-w-[1400px] mx-auto px-2 lg:px-6 py-4 flex items-center justify-between">
        <div className="">
          <img src={USMap} alt="US Map" />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default App;
