// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMa70BiMbJrqQS-UFTVw6wr6-U9cWBdrA",
  authDomain: "xelpmoc-ll.firebaseapp.com",
  projectId: "xelpmoc-ll",
  storageBucket: "xelpmoc-ll.appspot.com",
  messagingSenderId: "43153787408",
  appId: "1:43153787408:web:56ca71e0d24f2c77f05895",
  measurementId: "G-11VD6FM8RV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);