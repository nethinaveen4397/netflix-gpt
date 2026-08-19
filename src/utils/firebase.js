// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_0kB7CQbDF8cRI3CNSTR45kUSQWUVWZI",
  authDomain: "netflixgpt-72826.firebaseapp.com",
  projectId: "netflixgpt-72826",
  storageBucket: "netflixgpt-72826.firebasestorage.app",
  messagingSenderId: "903813895999",
  appId: "1:903813895999:web:f8edfdca101aeb131c658a",
  measurementId: "G-HKWZQNYW6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();