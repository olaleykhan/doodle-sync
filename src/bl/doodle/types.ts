import { TLRecord } from "@tldraw/tldraw"
import { Timestamp } from "firebase/firestore";

export type DoodleDocumentDraft = {
    documentName: string
    userId: string
    sessionId: string
    createdAt: Timestamp
    doodle: readonly TLRecord[]
}

export type DoodleDocument = DoodleDocumentDraft&{
    id: string
}