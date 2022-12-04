import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCASzC7vvUVnOBJquyI_ksGGcvlEZg_MRQ",
  authDomain: "maltimart-435e4.firebaseapp.com",
  projectId: "maltimart-435e4",
  storageBucket: "maltimart-435e4.appspot.com",
  messagingSenderId: "1007111433733",
  appId: "1:1007111433733:web:132714cbc3db47d839b66c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
