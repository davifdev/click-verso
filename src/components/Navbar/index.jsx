import styles from "./style.module.css";

import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        Tech<strong>Blog</strong>
      </NavLink>

      <nav className={styles.navbar}>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Entrar
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Cadastrar-se
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
