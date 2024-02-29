import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "julia-magic-beauty.firebaseapp.com",
    projectId: "julia-magic-beauty",
    storageBucket: "julia-magic-beauty.appspot.com",
    messagingSenderId: "999476530396",
    appId: "1:999476530396:web:bc9ea397ddfde38890b819",
    measurementId: "G-0HK0YLK7GN"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage();