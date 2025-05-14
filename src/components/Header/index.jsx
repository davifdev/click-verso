import styles from "./style.module.css";

import { Link, NavLink } from "react-router-dom";
import { useAuthValue } from "../../context/useAuthContext";
import { useAuth } from "../../hooks/useAuth";

import { LinkComponent } from "../LinkComponent";

export const Header = () => {
  const { user } = useAuthValue();
  const { logout } = useAuth();

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <h1>
          Click<strong>Verso</strong>
        </h1>
      </NavLink>

      <div>
        {user && <p>Olá, {user.displayName}</p>}
      </div>

      <nav className={styles.navbar}>
        <ul>
          <LinkComponent path="" name="Inicio" />
          {user && <LinkComponent path="post/create" name="Criar" />}
          {user && <LinkComponent path="dashboard" name="Dashboard" />}
          {!user && <LinkComponent path="login" name="Login" />}
          {!user && <LinkComponent path="register" name="Cadastrar" />}
          {user && <Link onClick={logout}>Sair</Link>}
        </ul>
      </nav>
    </header>
  );
};
