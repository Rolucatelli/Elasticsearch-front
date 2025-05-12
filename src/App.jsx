import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ResultsPage from "./pages/ResultsPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <ResultsPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
