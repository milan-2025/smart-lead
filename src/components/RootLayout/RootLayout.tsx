import { Outlet } from "react-router";

import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "../ui/sonner";

const RootLayout: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
        <Toaster />
      </main>
    </>
  );
};

export default RootLayout;
