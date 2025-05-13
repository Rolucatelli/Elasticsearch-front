import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import ResultsPage from "../../pages/ResultsPage";
import RootLayout from "../../components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <ResultsPage />,
      },
    ],
  },
]);

export default router;
