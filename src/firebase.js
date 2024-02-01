// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn8HvQKHXW1E-jlMrsknFr_Flxz9ePYx8",
  authDomain: "fitway-976ef.firebaseapp.com",
  projectId: "fitway-976ef",
  storageBucket: "fitway-976ef.appspot.com",
  messagingSenderId: "962307885661",
  appId: "1:962307885661:web:8847e29c7f887b9f5a1bb4",
  measurementId: "G-55Q4Q3HSLP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, provider, storage, db };
