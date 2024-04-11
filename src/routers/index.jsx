import { createBrowserRouter } from "react-router-dom";
import RouteLayout from "../layouts/RouteLayout";

import Home from "../pages/Index";
import About from "../pages/about";
import Blogs from "../pages/blogs";
import Post from "../pages/blogs/_id";

import { posts, postById } from "../apis/loaders";

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
        loader: posts,
      },
      {
        path: "/blogs/:id",
        element: <Post />,
        loader: postById,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
