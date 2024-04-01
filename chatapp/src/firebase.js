// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADuDQDHQHAevt0NEXuqCyYVeFGMEggnZk",
  authDomain: "chat-ed896.firebaseapp.com",
  projectId: "chat-ed896",
  storageBucket: "chat-ed896.appspot.com",
  messagingSenderId: "945942520401",
  appId: "1:945942520401:web:5758cdb4a88f72ebb78e70",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
