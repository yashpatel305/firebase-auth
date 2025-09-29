// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTILkx-gEWizgOKxrjcjb5lzDSxkU5WEI",
  authDomain: "user-auth-9b6bb.firebaseapp.com",
  projectId: "user-auth-9b6bb",
  storageBucket: "user-auth-9b6bb.firebasestorage.app",
  messagingSenderId: "974478738586",
  appId: "1:974478738586:web:f9667e37496477c8e0cb23",
  measurementId: "G-J0W9HEM702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getDatabase(app)
// Authentication
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()