import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";

import AllLeads from "./pages/AllLeads";
import AddLeads from "./pages/AddLeads";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <AddLeads />,
        },
        {
          path: "all-leads",
          element: <AllLeads />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
