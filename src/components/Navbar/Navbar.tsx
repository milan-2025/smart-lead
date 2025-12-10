// import logo from "../../assets/greenlead-logo.png";

import { NavLink } from "react-router-dom";

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
  return (
    <>
      <nav className="flex w-full bg-bg-navbar py-3 justify-center">
        <div className="flex md:w-10/12 w-11/12 justify-between">
          {/* <img src={logo} alt="logo" id="logo" /> */}
          <h1 className="text-lg">Smart Lead</h1>
          <ul className="flex space-x-8 text-text-navbar font-medium">
            {/* <li className="active-link cursor-pointer">Home</li>
            <li>Features</li>
            <li>How it Works?</li>
            <li>Get Started</li>
            <li>Contact</li> */}
            {links.map((link, index) => {
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
    </>
  );
};

export default Navbar;
