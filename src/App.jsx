import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./app/config/routes.jsx";
import SearchContextProvider from "./store/search-context.jsx";

function App() {
  return (
    <SearchContextProvider>
      <RouterProvider router={router} />
    </SearchContextProvider>
  );
}

export default App;
