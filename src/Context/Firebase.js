// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV9SndhxiBGlqvMf-LOsh9WSSbvOfvPeA",
  authDomain: "prepai-fc8fb.firebaseapp.com",
  projectId: "prepai-fc8fb",
  storageBucket: "prepai-fc8fb.firebasestorage.app",
  messagingSenderId: "1074153671473",
  appId: "1:1074153671473:web:e26520ea18eb47a2983e10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)