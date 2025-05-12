import { app } from "../firebase/config";
import { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const useAuth = () => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [cleanUp, setCleanUp] = useState(false);

  const checkCleanUp = () => {
    if (cleanUp) return;
  };

  const auth = getAuth();

  const createUser = async (data) => {
    checkCleanUp();

    setLoading(true);
    setError("");

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, { displayName: data.displayName });

      setLoading(false);
    } catch (error) {
      let errorMsg;

      if (error.message.includes("email-already")) {
        errorMsg = "E-mail já cadastrado";
      } else if (error.message.includes("Password")) {
        errorMsg = "As senhas devem ter pelo menos 6 caracteres";
      } else {
        errorMsg = "Ocorreu um erro tente novamente mais tarde";
      }

      setError(errorMsg);
      setLoading(false);
    }
  };

  const logout = async () => {
    checkCleanUp();
    await signOut(auth);
  };

  const login = async (data) => {
    checkCleanUp();

    setLoading(true);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      let erroMsg;

      if (error.message.includes("invalid-credential")) {
        erroMsg = "Email ou senha incorreto";
      } else {
        erroMsg = "Ocorreu um erro tente novamente mais tarde";
      }

      setError(erroMsg);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCleanUp(true);
  }, []);

  return { createUser, auth, loading, error, logout, login };
};
