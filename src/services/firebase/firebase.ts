// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator, GoogleAuthProvider, GithubAuthProvider, TwitterAuthProvider } from "firebase/auth";
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
console.log("we are inited as app: ", app)
const analytics = getAnalytics(app);
export const firebaseAuthService = getAuth(app);
console.log(firebaseAuthService, "AUTHENTHICATION  fire compare")
export const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.addScope('profile')
googleAuthProvider.addScope('email')
googleAuthProvider.addScope('openid ')

export const githubAuthProvider = new GithubAuthProvider();
githubAuthProvider.addScope('repo')

export const twitterAuthProvider = new TwitterAuthProvider();

// connectAuthEmulator(firebaseAuthService, 'http://localhost:9099', { disableWarnings: true })