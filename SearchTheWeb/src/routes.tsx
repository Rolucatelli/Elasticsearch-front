import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
