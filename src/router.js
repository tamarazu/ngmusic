import { createBrowserRouter } from "react-router-dom";
import LandingPage from "views/LandingPage";
import SearchPage from "views/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/search",
    element: <SearchPage/>,
  },
]);

export default router;
