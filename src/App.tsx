import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import SendBatchList from "./pages/SendBatchList";

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
