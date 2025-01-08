// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ5uNPJB682s5_Ud8E9eD6b5RYgs5I3Vo",
  authDomain: "netflix-7014a.firebaseapp.com",
  projectId: "netflix-7014a",
  storageBucket: "netflix-7014a.firebasestorage.app",
  messagingSenderId: "576324973835",
  appId: "1:576324973835:web:8f1d9db5ea81fb3b1e1e0e",
  measurementId: "G-W9EYXN1D77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const  auth = getAuth();