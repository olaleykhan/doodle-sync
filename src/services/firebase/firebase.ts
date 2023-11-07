// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKkT44_Rk56NH_fpM1wya13WO0S4ewLXg",
  authDomain: "doodle-sync.firebaseapp.com",
  projectId: "doodle-sync",
  storageBucket: "doodle-sync.appspot.com",
  messagingSenderId: "965639281039",
  appId: "1:965639281039:web:0f00a1a5b5758d970853fa",
  measurementId: "G-9M88E0RN5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("we are inited")
const analytics = getAnalytics(app);
const auth = getAuth(app);
console.log(auth, "AUTHENTHICATION")