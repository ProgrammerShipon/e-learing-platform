import { NavLink } from "react-router-dom";

const NavItems = () => {
  const navbarData = [
    {
      label: "Home",
      route: "/",
      icons: null,
    },
    {
      label: "Courses",
      route: "/courses",
      icons: null,
    },
    {
      label: "Contact Us",
      route: "/contact-us",
      icons: null,
    },
    {
      label: "About Us",
      route: "/about-us",
      icons: null,
    },
    {
      label: "Profile",
      route: "/profile",
      icons: null,
    },
  ];

  return (
    <>
      {/* <ul className="flex flex-col md:flex-row justify-end items-center gap-3"> */}
      {navbarData &&
        navbarData.map((item, idx) => (
          <li key={idx}>
            <NavLink
              className={({ isActive }) =>
                `py-5 px-3 block border-b-2 transition duration-300 ${
                  isActive ? "border-[#30BEEC]" : "border-transparent"
                }`
              }
              to={item?.route}
            >
              <span> {item.label} </span>
            </NavLink>
          </li>
        ))}
      {/* </ul> */}
    </>
  );
};

export default NavItems;
