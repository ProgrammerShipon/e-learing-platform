import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import SideNav from "./Sidebar";

const barsIcon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 300) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
  }, []);

  return (
    <div>
      <nav className="flex justify-between items-center shadow-primary rounded-b-2xl px-4 z-20 top-0 min-w-full sticky bg-white">
        <div>
          <Link
            className="text-xl md:text-2xl lg:text-[1.6rem] py-5 px-3"
            to="/"
          >
            <span className="text-[#30BEEC] px-3 font-bold">E-</span>Learning
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-5">
          <NavItems />
        </ul>

        {/* toggle button */}
        <button onClick={toggle} className="lg:hidden text-blue py-5 px-3">
          <span className="text-3xl">{barsIcon}</span>
        </button>

        {/* side navbar */}
        <SideNav isOpen={isOpen} toggle={toggle} />
      </nav>
    </div>
  );
};

export default Header;
