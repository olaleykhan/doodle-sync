import { TLRecord, StoreSnapshot } from "@tldraw/tldraw"

export type userSession = {
    documentName: string
    documentId: string
    userId: string
    sessionId: string
    createdAt: string
    document: StoreSnapshot<TLRecord>
}