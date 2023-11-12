import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { fireBaseApp } from "./firebase";


export const firestoreDB = getFirestore(fireBaseApp);


