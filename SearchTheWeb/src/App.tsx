import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import "./index.css";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
