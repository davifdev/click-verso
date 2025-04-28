import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvDFfpX6-YfhCBO3NRCo3Y8BXm6uKbKjw",
  authDomain: "blog-create-e92eb.firebaseapp.com",
  projectId: "blog-create-e92eb",
  storageBucket: "blog-create-e92eb.firebasestorage.app",
  messagingSenderId: "586319432940",
  appId: "1:586319432940:web:77ce4122033f2d2e2429c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
