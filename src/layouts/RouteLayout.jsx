import { Link, Outlet } from "react-router-dom";

function RouteLayout() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/blogs">Blogs</Link> |
      <Link to="/about">About</Link>
      <p />
      <Outlet />
    </>
  );
}

export default RouteLayout;
