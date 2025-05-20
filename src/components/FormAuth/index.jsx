import styles from "./style.module.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export const FormAuth = ({ title, isLogin, btnName }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, login, error: authError, loading } = useAuth();

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin) {
      if (password !== confirmPassword) {
        setError("As senhas precisam ser iguais");
        return;
      }
    }

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
            placeholder="Digite seu nome"
            value={displayName}
            required
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
      )}
      <label>
        <strong>E-mail</strong>
        <input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <strong>Senha</strong>
        <input
          type="password"
          name="password"
          placeholder="Sua senha"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {!isLogin && (
        <label>
          <strong>Confirmar Senha</strong>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar senha"
            value={confirmPassword}
            required
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
      {error && <p className={styles.errorMessage}>{error}</p>}
    </form>
  );
};
