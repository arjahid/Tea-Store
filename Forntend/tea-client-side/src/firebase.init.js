// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEhBaQMH5x8WdIBFpF83lP0hNgOoWL52Q",
  authDomain: "tea-stall-7e757.firebaseapp.com",
  projectId: "tea-stall-7e757",
  storageBucket: "tea-stall-7e757.firebasestorage.app",
  messagingSenderId: "551775358643",
  appId: "1:551775358643:web:16f2e40d4a3b2d45e8eac6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);