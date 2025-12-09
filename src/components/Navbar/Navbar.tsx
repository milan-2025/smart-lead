// import logo from "../../assets/greenlead-logo.png";

const Navbar: React.FC = () => {
  const links = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Features",
      link: "/#Features",
    },
    {
      label: "How it Works ?",
      link: "/#HowWorks",
    },
    {
      label: "Get Started",
      link: "/",
    },
    {
      label: "Contact",
      link: "/#Contact",
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
                <li
                  key={link.label}
                  className={
                    index == 0 ? "active-link cursor-pointer" : "cursor-pointer"
                  }
                >
                  {link.label}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
