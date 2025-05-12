import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState, useEffect } from "react";

export const useFetchPost = (docCollection, id) => {
  const [post, setPost] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      if (cancelled) return;

      setLoading(true);
      setError("");

      try {
        const docRef = await doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);

        setPost(docSnap.data());
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    loadData();
  }, [cancelled, id, docCollection]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { error, loading, post };
};
