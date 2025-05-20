import styles from "./style.module.css";

import { useAuthValue } from "../../context/useAuthContext";
import { useAuth } from "../../hooks/useAuth";

import { Link, NavLink } from "react-router-dom";
import { LinkComponent } from "../LinkComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Header = () => {
  const { user } = useAuthValue();
  const { logout } = useAuth();
  const [toggle, setToggle] = useState(false);

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <h1>
          Click<strong>Verso</strong>
        </h1>
      </NavLink>

      <div>
        {user && (
          <p>
            <strong className={styles.userName}>Olá, {user.displayName}</strong>
          </p>
        )}
      </div>

      <FontAwesomeIcon
        icon={faBars}
        className={styles.menu}
        onClick={() => setToggle(!toggle)}
      />

      <nav className={toggle ? styles.navbarMobileBlock : styles.none}>
        <ul>
          <LinkComponent path="" name="Inicio" />
          {user && <LinkComponent path="post/create" name="Criar" />}
          {user && <LinkComponent path="dashboard" name="Dashboard" />}
          {!user && <LinkComponent path="login" name="Login" />}
          {!user && <LinkComponent path="register" name="Cadastrar" />}
          {user && <Link onClick={logout}>Sair</Link>}
        </ul>
      </nav>

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
