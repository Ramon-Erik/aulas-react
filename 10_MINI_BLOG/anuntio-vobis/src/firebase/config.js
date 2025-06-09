// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from  "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrknuFGwZJRtonvM3d87LYQ8NqE1hKwgA",
  authDomain: "mini-blog-2b8e3.firebaseapp.com",
  projectId: "mini-blog-2b8e3",
  storageBucket: "mini-blog-2b8e3.firebasestorage.app",
  messagingSenderId: "685389565450",
  appId: "1:685389565450:web:52952a09e5080f607b99f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }