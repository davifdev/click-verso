import styles from "./style.module.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export const FormComponent = ({ title, isLogin, btnName }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { createUser, login, error, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const objCreateUser = {
      displayName,
      email,
      password,
    };

    const objLogin = {
      email,
      password,
    };

    isLogin ? await login(objLogin) : await createUser(objCreateUser);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {!isLogin && (
        <label>
          <strong>Nome</strong>
          <input
            type="text"
            name="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
      )}
      <label>
        <strong>E-mail</strong>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <strong>Senha</strong>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {!isLogin && (
        <label>
          <strong>Confirmar Senha</strong>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
      )}

      {isLogin && (
        <div className={styles.createCount}>
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </div>
      )}

      {loading && (
        <button type="submit" disabled>
          Aguarde...
        </button>
      )}

      {!loading && <button type="submit">{btnName}</button>}
      {error && <p className={styles.error_message}>{error}</p>}
    </form>
  );
};
