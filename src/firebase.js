import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCKzOD9V_RC3q3o0nliHxkI2uZu5dvKXFY",
  authDomain: "todoapp-bfd63.firebaseapp.com",
  databaseURL: "https://todoapp-bfd63-default-rtdb.firebaseio.com",
  projectId: "todoapp-bfd63",
  storageBucket: "todoapp-bfd63.firebasestorage.app",
  messagingSenderId: "275023274489",
  appId: "1:275023274489:web:6fd40e3681d908e9ba5d28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
