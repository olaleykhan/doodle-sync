import {collection, getDoc, getDocs, doc, setDoc} from "firebase/firestore";

import { firestoreDB } from "./firestore";
import { UserProfile } from "@/bl/users";


const usersRef = collection(firestoreDB, "users");

export async function createUser(user: UserProfile ) {
    const docRef = await setDoc(doc(usersRef, user.id!),user);
    console.log("Document written with ID: ", docRef);
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

export async function getUserById(id: string): Promise<UserProfile|null> {
    const docRef = doc(usersRef, id)
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) {
        return docSnap.data()
    } else {
        return null;
    }
}