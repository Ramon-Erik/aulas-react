import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo}>
        <span>Anuntio Vobis</span>
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "" )}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "" )}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
