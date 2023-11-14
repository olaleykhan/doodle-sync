import {collection,Timestamp, doc, setDoc} from "firebase/firestore";


import { firestoreDB } from "./firestore";
import { DoodleDocumentDraft } from "@/bl/doodle/types";

const doodleRef = collection(firestoreDB, "doodles");
export async function createDoodle(doodle: Omit<DoodleDocumentDraft, "createdAt"> ) {
    doodle = {...doodle, createdAt: Timestamp.now()} as DoodleDocumentDraft ;
    const docRef = await setDoc(doc(doodleRef),doodle);
}