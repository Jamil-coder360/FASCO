import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const auth = getAuth(app);
export { auth};