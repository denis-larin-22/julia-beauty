import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "julia-magic-beauty.firebaseapp.com",
    projectId: "julia-magic-beauty",
    storageBucket: "julia-magic-beauty.appspot.com",
    messagingSenderId: "999476530396",
    appId: "1:999476530396:web:bc9ea397ddfde38890b819",
    measurementId: "G-0HK0YLK7GN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);