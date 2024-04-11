import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RouteLayout() {
  const linkClass = ({ isActive, isPending }) =>
    isActive ? "nyala" : isPending ? "pending" : "";

  const styleClass = {
    padding: " 0 5px",
  };

  return (
    <>
      <NavLink to="/" className={linkClass} style={styleClass}>
        Home
      </NavLink>{" "}
      |
      <NavLink to="/blogs" className={linkClass} style={styleClass}>
        Blogs
      </NavLink>{" "}
      |
      <NavLink to="/about" className={linkClass} style={styleClass}>
        About
      </NavLink>
      <p />
      <Outlet />
    </>
  );
}

export default RouteLayout;
