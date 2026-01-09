import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// TODO: REPLACE WITH YOUR FIREBASE CONFIG KEYS
const firebaseConfig = {
  apiKey: "AIzaSyA1RCHxY5KIggROE3asVfEP7uuOpB_tNBs",
  authDomain: "smart-canteen-9391d.firebaseapp.com",
  projectId: "smart-canteen-9391d",
  storageBucket: "smart-canteen-9391d.firebasestorage.app",
  messagingSenderId: "178028484856",
  appId: "1:178028484856:web:f9853f092e53a742d0c30d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };