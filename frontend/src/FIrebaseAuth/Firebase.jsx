import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tradehive---zerodha.firebaseapp.com",
  projectId: "tradehive---zerodha",
  storageBucket: "tradehive---zerodha.firebasestorage.app",
  messagingSenderId: "1062816576",
  appId: "1:1062816576:web:7b1e80fdefb05d5d2508a5",
};

export const app = initializeApp(firebaseConfig);
