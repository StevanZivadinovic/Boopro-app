
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDxum3htS7GwTXAYl1MXSI35apQHAwZfxE",
  authDomain: "boopro-5f670.firebaseapp.com",
  projectId: "boopro-5f670",
  storageBucket: "boopro-5f670.appspot.com",
  messagingSenderId: "256156358568",
  appId: "1:256156358568:web:2706ff4a35c4b8b3a1af9d",
  measurementId: "G-YK3PGWQ0NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);