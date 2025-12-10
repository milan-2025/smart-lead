// import logo from "../../assets/greenlead-logo.png";

import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarDrawer from "./NavbarDrawer";

const Navbar: React.FC = () => {
  const links = [
    {
      label: "Add-leads",
      link: "/",
    },
    {
      label: "Leads",
      link: "/all-leads",
    },
  ];

  const [openNavbar, setIsOpenNavbar] = useState(false);
  const handleClose = () => {
    setIsOpenNavbar(false);
  };
  return (
    <>
      <nav className="flex w-full bg-bg-navbar py-3 justify-center">
        <div className="flex md:w-10/12 w-11/12 justify-between">
          {/* <img src={logo} alt="logo" id="logo" /> */}
          <h1 className="text-lg">Smart Lead</h1>
          <MenuIcon
            onClick={() => {
              setIsOpenNavbar(true);
            }}
            // color="#99a1af"
            className="cursor-pointer md:hidden"
          />
          <ul className="md:flex space-x-8 hidden text-text-navbar font-medium">
            {links.map((link) => {
              return (
                <NavLink
                  to={link.link}
                  key={link.label}
                  className={({ isActive }) => {
                    return isActive
                      ? "active-link cursor-pointer"
                      : "cursor-pointer";
                  }}
                >
                  <li>{link.label}</li>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </nav>
      <NavbarDrawer
        isOpen={openNavbar}
        setIsOpen={setIsOpenNavbar}
        handleClose={handleClose}
        links={links}
      />
    </>
  );
};

export default Navbar;
