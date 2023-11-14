import {collection, getDoc, getDocs, doc, setDoc} from "firebase/firestore";

import { firestoreDB } from "./firestore";
import { UserProfile } from "@/bl/users";


const usersRef = collection(firestoreDB, "users");

export async function createUser(user: UserProfile ) {
    const docRef = await setDoc(doc(usersRef, user.id!),user);
}

export async function getAllUsers() {
    
    const querySnapshot = await getDocs(usersRef);
    const data: UserProfile[] = []
    querySnapshot.forEach((doc) => {
        data.push(doc.data() as UserProfile)
    })

    return data;
}

export async function getUserById(id: string): Promise<UserProfile|null> {
    const docRef = doc(usersRef, id)
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) {
        const temp = docSnap.data()
        return {
            ...temp,
            id
        }
    } else {
        return null;
    }
}