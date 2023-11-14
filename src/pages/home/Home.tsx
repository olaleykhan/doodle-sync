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
import { DEFAULT_STORE } from '@/bl/sessions/default_store'

import UserCorner from '../components/UserCorner'
import Controls from './Controls'

// ... (import statements)

const Home = track(() => {
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


const handleSaveStore = () => {
	const snap = store.getSnapshot('all')
	console.log("store for the TLDRAW is : ",snap )
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
