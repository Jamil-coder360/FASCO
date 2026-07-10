// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ_Ba9EwgGilm9w3bd76fSACTwYXjnu_I",
  authDomain: "fasco-4d080.firebaseapp.com",
  projectId: "fasco-4d080",
  storageBucket: "fasco-4d080.firebasestorage.app",
  messagingSenderId: "711314687474",
  appId: "1:711314687474:web:f19e21c5fd89088909176b",
  measurementId: "G-CNT4E04ZGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);