import styles from "./style.module.css";
import { SignOut } from "@phosphor-icons/react";

import { NavLink } from "react-router-dom";
import { useAuthValue } from "../../context/useAuthContext";
import { useAuth } from "../../hooks/useAuth";

export const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuth();

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
          {user && (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/post/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Criar
              </NavLink>
            </>
          )}

          {!user && (
            <>
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
            </>
          )}

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>

          {user && (
            <button className={styles.logout} onClick={logout}>
              <SignOut size={18} style={{ color: "var(--primary-font)" }} />
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
};
