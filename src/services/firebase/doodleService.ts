import {collection, getDoc, getDocs, doc, setDoc, Timestamp} from "firebase/firestore";


import { firestoreDB } from "./firestore";
import { DoodleDocumentDraft, DoodleDocument } from "@/bl/doodle/types";

const doodleRef = collection(firestoreDB, "doodles");
export async function createDoodle(doodle: Omit<DoodleDocumentDraft, "createdAt"> ) {
    doodle = {...doodle, createdAt: Timestamp.now()} as DoodleDocumentDraft ;
   
    try {
        const docRef = await setDoc(doc(doodleRef),doodle);
        console.log(docRef, "uselexsxxss");
    } catch (error) {

        console.log(error, "error creating doodle");
        
    }
   
}

export const getAllDoodles = async (): Promise<DoodleDocument[]> => {
    const querySnapshot = await getDocs(doodleRef);
    const data: DoodleDocument[] = [];

    querySnapshot.forEach((doc) => {
        const doodleDocument: DoodleDocument = addIdToDoodleDocument(doc.data() as DoodleDocumentDraft, doc.id);
        data.push(doodleDocument);
    });

    return data;
};

// Utility function to add ID to DoodleDocumentDraft
const addIdToDoodleDocument = (draft: DoodleDocumentDraft, id: string): DoodleDocument => {
    return { ...draft, id };
};


// export async function getAllUsers() {
    
//     const querySnapshot = await getDocs(usersRef);
//     const data: UserProfile[] = []
//     querySnapshot.forEach((doc) => {
//         data.push(doc.data() as UserProfile)
//     })

//     return data;
// }