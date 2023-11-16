import { SerializedStore, StoreSnapshot, TLRecord, TLStore } from "@tldraw/tldraw"
import { Timestamp } from "firebase/firestore";

export type DoodleDocumentDraft = {
    documentName: string
    userId: string
    sessionId: string
    createdAt: Timestamp
    doodle: readonly TLRecord[]
    serializedStore?: SerializedStore<TLRecord>
    shot?: StoreSnapshot<TLRecord>
    metadata?: Record<string, any>

}

export type DoodleDocument = DoodleDocumentDraft&{
    id: string
}