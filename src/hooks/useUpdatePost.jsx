import { useReducer, useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

const updateReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        error: null,
      };
    case "UPTADE_DOC":
      return {
        loading: false,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useUpdatePost = (docCollection) => {
  const [response, dispatch] = useReducer(updateReducer, initialState);
  const [cancelled, setCancelled] = useState(false);

  const checkCancellBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const updateDocument = async (id, data) => {
    checkCancellBeforeDispatch({
      type: "LOADING",
    });

    try {
      const docRef = await doc(db, docCollection, id);
      const updatedDocument = await updateDoc(docRef, data);

      checkCancellBeforeDispatch({
        type: "UPDATE_DOC",
        payload: updatedDocument,
      });
    } catch (error) {
      checkCancellBeforeDispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { updateDocument, response };
};
