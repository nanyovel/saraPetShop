// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCKZRj5ztLDsbQit_XF1IWCdWYMR-dNjqs",
//   authDomain: "sarapetshop.firebaseapp.com",
//   projectId: "sarapetshop",
//   storageBucket: "sarapetshop.firebasestorage.app",
//   messagingSenderId: "651885978639",
//   appId: "1:651885978639:web:d2ffc0e17bbbb5a1b86f7a",
//   measurementId: "G-KBNBDXRCBB",
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//
export const autenticar = getAuth(app);
logEvent(analytics, "notification_received");
const db = getFirestore(app);
export const storage = getStorage(app);
export default db;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics, logEvent } from "firebase/analytics";
// import {getAuth} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore';
// import {getStorage} from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
//   measurementId: import.meta.env.VITE_MEASUREMENTID
// };

// export const app = initializeApp(firebaseConfig);
// export const autenticar = getAuth(app);
// const analytics = getAnalytics(app);
// logEvent(analytics, 'notification_received');
// const db = getFirestore(app);
// export const storage=getStorage(app);
// export default db;
