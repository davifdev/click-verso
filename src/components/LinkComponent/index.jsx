import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

export const LinkComponent = ({ path, name }) => {
  return (
    <NavLink
      to={`/${path}`}
      className={({ isActive }) => (isActive ? styles.active : "")}
    >
      {name}
    </NavLink>
  );
};
