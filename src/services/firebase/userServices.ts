import {collection, getDoc, getDocs, doc, setDoc} from "firebase/firestore";

import { firestoreDB } from "./firestore";
import { UserProfile } from "@/bl/users";


const usersRef = collection(firestoreDB, "users");

export async function createUser(user: UserProfile ) {
    // delete id from user
    const docRef = await setDoc(doc(usersRef, user.id!),user);
    console.log("Document written with ID: ", docRef);
    
    console.log("all users =>  ", await getAllUsers())
}

export async function getAllUsers() {
    
    const querySnapshot = await getDocs(usersRef);
    console.log(querySnapshot)
    const data: UserProfile[] = []
    querySnapshot.forEach((doc) => {
        data.push(doc.data())
    })

    return data;
}

export async function getUserById(id: string) {
    const docRef = doc(usersRef, id)
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}