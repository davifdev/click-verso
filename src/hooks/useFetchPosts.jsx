import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { query, orderBy, onSnapshot, where, collection } from "firebase/firestore";

export const useFetchPosts = (docColletion, search = null, uid = null) => {
  const [posts, setPosts] = useState("");
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      if (cancelled) return;

      setLoading(true);

      const collectionRef = await collection(db, docColletion);

      try {
        let q;

        if (search) {
          q = await query(
            collectionRef,
            where("tagsArray", "array-contains", search),
            orderBy("createdAt", "desc")
          );
        } else if (uid) {
          q = await query(
            collectionRef,
            where("uid", "==", uid),
            orderBy("createdAt", "desc")
          );
        } else {
          q = await query(collectionRef, orderBy("createdAt", "desc"));
        }

        await onSnapshot(q, (querySnapshot) => {
          setPosts(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });

        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    loadData();
  }, [cancelled, docColletion, search, uid]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { loading, error, posts };
};
