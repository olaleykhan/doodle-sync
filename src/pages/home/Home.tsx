import { useEffect, useState } from 'react'
import {
	InstancePresenceRecordType,
	TLAnyShapeUtilConstructor,
	TLInstancePresence,
	TLRecord,
	TLStoreWithStatus,
	computed,
	createPresenceStateDerivation,
	createTLStore,
	defaultShapeUtils,
	defaultUserPreferences,
	getUserPreferences,
	react,
	transact,
	track,
	Tldraw
} from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { DEFAULT_STORE } from '@/bl/doodle/default_store'

import UserCorner from '../components/UserCorner'
import Controls from './Controls'
import { DoodleDocumentDraft } from '@/bl/doodle/types'
import { createDoodle } from '@/services/firebase/doodleService'
import { useAuth } from '@/contexts/AuthContext'

// ... (import statements)

const Home = track(() => {

	const { user } = useAuth()
	const [store] = useState(() => {
		const store = createTLStore({
			shapeUtils: defaultShapeUtils,
		})
		store.loadSnapshot(DEFAULT_STORE)
		return store
	})

// useEffect(()=>{
// 	console.log("store for the TLDRAW is : ",store.getSnapshot()," typeof store is : ", typeof store.getSnapshot(), "type of store is : ", typeof store )
// }, [store])


const handleSaveStore = async () => {
	const snap = store.allRecords();
	const doodle:Omit<DoodleDocumentDraft, "createdAt"> = {
		documentName: "My first doodle bybAlaf",
		userId: user?.id!,
		sessionId: "lone",
		doodle: snap
	}
	await createDoodle(doodle)

}
const handleShowHistory = () => {
	console.log("saving to history")
	
}

const handleCreateRoom = () => {
	console.log("creating room")
	
}

	return (
		<div className="tldraw__editor">
			<Tldraw autoFocus store={store} shareZone={<Controls onHistory={handleShowHistory} onStartRoom={handleCreateRoom} onClickSave={handleSaveStore} />} />
		</div>
	);
});

export default Home;
