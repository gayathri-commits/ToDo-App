// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN9BM6B4oXz89uuty4sgdUz_6Lgrgt7mE",
  authDomain: "to-do-app-307fc.firebaseapp.com",
  projectId: "to-do-app-307fc",
  storageBucket: "to-do-app-307fc.appspot.com",
  messagingSenderId: "59578622126",
  appId: "1:59578622126:web:c3ddc4bc5fa3c42860cd3f",
  measurementId: "G-FZ3CHPB70S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);