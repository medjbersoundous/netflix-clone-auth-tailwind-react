
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const process = {
  env: {
    REACT_APP_FIREBASE_API_KEY:"AIzaSyDQGcBr1nEhq94Y9XK7kZ9vzXZJbpIac3o",
    REACT_APP_FIREBASE_AUTH_DOMAIN:"netflix-clone-27d50.firebaseapp.com",
    REACT_APP_FIREBASE_PROJECT_ID:"netflix-clone-27d50",
    REACT_APP_FIREBASE_STORAGE_BUCKET:"netflix-clone-27d50.appspot.com",
    REACT_APP_FIREBASE_MESSAGING_SENDER:"690280285417",
    REACT_APP_APP_ID:"1:690280285417:web:3491ff43bbdcdfc16d9c78"
  }
};
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN  ,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)


