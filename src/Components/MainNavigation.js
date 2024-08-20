import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/studentlogin"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Student
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/facultylogin"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Faculty
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/adminlogin"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/query"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Add query
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
