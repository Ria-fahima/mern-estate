// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b3fd7.firebaseapp.com",
  projectId: "mern-estate-b3fd7",
  storageBucket: "mern-estate-b3fd7.appspot.com",
  messagingSenderId: "257736083574",
  appId: "1:257736083574:web:afb9a22ad87beadd4ab757"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);