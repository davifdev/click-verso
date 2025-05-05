import styles from "./style.module.css";
import { SignOut } from "@phosphor-icons/react";

import { NavLink } from "react-router-dom";
import { useAuthValue } from "../../context/useAuthContext";
import { useAuth } from "../../hooks/useAuth";

import { LinkComponent } from "../LinkComponent";

export const Header = () => {
  const { user } = useAuthValue();
  const { logout } = useAuth();

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        Tech<strong>Blog</strong>
      </NavLink>

      <nav className={styles.navbar}>
        <ul>
          {user && <LinkComponent path="post/create" name="Criar" />}
          {user && <LinkComponent path="dashboard" name="Dashboard" />}
          {!user && <LinkComponent path="login" name="Login" />}
          {!user && <LinkComponent path="register" name="Cadastrar" />}
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
