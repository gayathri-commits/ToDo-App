// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFnRn5yIWTklr6B5V89Axr3A8UosNKpMk",
  authDomain: "to-do-app-f2d97.firebaseapp.com",
  projectId: "to-do-app-f2d97",
  storageBucket: "to-do-app-f2d97.appspot.com",
  messagingSenderId: "373538930663",
  appId: "1:373538930663:web:54b3347dd5b648d7084742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);