// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuayn38j3TpkcHqUESKpD4C-UtvPn8sIc",
  authDomain: "somativa2-6487b.firebaseapp.com",
  projectId: "somativa2-6487b",
  storageBucket: "somativa2-6487b.appspot.com",
  messagingSenderId: "909100522338",
  appId: "1:909100522338:web:3a1f726a95a9caccca2a3b",
  measurementId: "G-MNLEP2LY07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);