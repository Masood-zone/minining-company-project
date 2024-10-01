import { RouterProvider } from "react-router-dom";
import routes from "./pages";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
