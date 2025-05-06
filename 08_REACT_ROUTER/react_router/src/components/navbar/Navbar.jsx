import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //       <Link to="/about">About</Link>
    //     </li>
    //   </ul>
    // </nav>
    <nav>
      {/* <NavLinkv></NavLinkv> */}
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "nao-ativo")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "nao-ativo")}
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
