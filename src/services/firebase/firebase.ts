// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator, GoogleAuthProvider, GithubAuthProvider, TwitterAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "doodle-sync.firebaseapp.com",
  projectId: "doodle-sync",
  storageBucket: "doodle-sync.appspot.com",
  messagingSenderId: "965639281039",
  appId: "1:965639281039:web:0f00a1a5b5758d970853fa",
  measurementId: "G-9M88E0RN5B",
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireBaseApp);
export const firebaseAuthService = getAuth(fireBaseApp);
export const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.addScope('profile')
googleAuthProvider.addScope('email')
googleAuthProvider.addScope('openid ')

export const githubAuthProvider = new GithubAuthProvider();
githubAuthProvider.addScope('user')

export const twitterAuthProvider = new TwitterAuthProvider();

// connectAuthEmulator(firebaseAuthService, 'http://localhost:9099', { disableWarnings: true })