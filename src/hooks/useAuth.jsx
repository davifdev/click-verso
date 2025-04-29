import { app } from "../firebase/config";
import { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  signOut,
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
      console.log(error.message);

      setLoading(false);
    }
  };


  const logout = async () => {
    checkCleanUp();
    await signOut(auth);
  }

  useEffect(() => {
    return () => setCleanUp(true);
  }, []);

  return { createUser, auth, loading, error, logout };
};
