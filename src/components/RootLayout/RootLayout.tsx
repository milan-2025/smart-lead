import { Outlet } from "react-router";

import Navbar from "@/components/Navbar/Navbar";

const RootLayout: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
