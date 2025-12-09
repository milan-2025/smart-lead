import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import SendBatchList from "./pages/SendBatchList";
import AllLeads from "./pages/AllLeads";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <SendBatchList />,
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
