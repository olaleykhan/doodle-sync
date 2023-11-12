import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import initilassed app from firebase
import { fireBaseApp } from "./firebase";


// Initialize Firebase


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(fireBaseApp);
