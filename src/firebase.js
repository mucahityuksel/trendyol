// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBvPhy-07CGk-Lg5LFmEozbDggsL_7OzfY",
  authDomain: "trendyol-d72cb.firebaseapp.com",
  projectId: "trendyol-d72cb",
  storageBucket: "trendyol-d72cb.appspot.com",
  messagingSenderId: "1066611079657",
  appId: "1:1066611079657:web:053c10b2357682a8b63378",
  measurementId: "G-M133G91RWB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)

const analytics = getAnalytics(app);