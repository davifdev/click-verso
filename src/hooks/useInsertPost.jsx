import { useReducer } from "react";
import { db } from "../firebase/config";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

const initialState = {
  loading: null,
  error: null,
};

const insertReducer = (state, action) => {
  switch (action) {
    case "LOADING":
      return {
        loading: true,
        error: null,
      };
    case "INSERTED_POST":
      return {
        loading: false,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const useInsertPost = (docCollection) => {
  const [response, dispatch] = useReducer(insertReducer, initialState);
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const insertPost = async (document) => {
    checkCancelBeforeDispatch({
      type: "LOADING",
    });

    try {
      const newDocument = { ...document, createdAt: Timestamp.now() };

      const insertedDocument = await addDoc(
        collection(db, docCollection),
        newDocument
      );

      checkCancelBeforeDispatch({
        type: "INSERTED_POST",
        payload: insertedDocument,
      });
    } catch (error) {
      checkCancelBeforeDispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { insertPost, response };
};
