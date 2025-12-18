import Group from "../../assets/Group.png";
import { navItems } from "../../utils/navItems";
import { Hamburger, UserIcon } from "../Icons";

const Header: React.FC = () => {
  return (
    <header className="bg-white border border-b-gray-300">
      <div className="max-w-[1400px] mx-auto px-3 lg:px-6 py-4 flex items-center justify-between">
        <button className="lg:hidden text-gray-700">
          <Hamburger />
        </button>

        <div className="flex-shrink-0">
          <img src={Group} alt="Houzeo" className="h-8" />
        </div>

        <nav className="hidden lg:flex items-center space-x-4 text-sm">
          {navItems.map((item) =>
            item.type === "button" ? (
              <button
                key={item.key}
                className="font-normal text-sm text-black hover:text-gray-700 flex items-center gap-1"
              >
                {item.label}
                {item.icon}
              </button>
            ) : (
              <a
                key={item.key}
                href={item.href}
                className="text-nowrap font-normal text-sm text-black hover:text-gray-700"
              >
                {item.label}
              </a>
            )
          )}
          <div className="max-w-14">
            <div className="font-normal text-sm text-black overflow-hidden text-nowrap text-ellipsis">
              (844) 448-0110
            </div>
            <div className="font-normal text-xs text-black overflow-hidden text-nowrap text-ellipsis">
              (9am to 6pm CST, Mon-Sat)
            </div>
          </div>
        </nav>

        {/* Right Side - Phone & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-gradient-to-l from-[#0E5293] to-[#2876C1] hover:opacity-90 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition duration-200 ease-in-out">
            Start Free Listing
          </button>
        </div>
        <button className="lg:hidden text-gray-700">
          <UserIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
