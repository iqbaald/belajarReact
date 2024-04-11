import { createBrowserRouter } from "react-router-dom";
import RouteLayout from "../layouts/RouteLayout";

import Home from "../pages/Index";
import About from "../pages/about";
import Blogs from "../pages/blogs";
import Post from "../pages/blogs/_id";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <Post />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
