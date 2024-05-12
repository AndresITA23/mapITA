import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI1ZMJ6XOYkQ2w02SUzsoinrbTotXJq9o",
  authDomain: "cabaapp-1af62.firebaseapp.com",
  projectId: "cabaapp-1af62",
  storageBucket: "cabaapp-1af62.appspot.com",
  messagingSenderId: "48197427222",
  appId: "1:48197427222:web:2e7e0f49ef1905de11d537"
};


export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);