import { createBrowserRouter } from "react-router-dom";
import LandingPage from "views/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/search",
    element: <div>Page Search</div>,
  },
]);

export default router;
