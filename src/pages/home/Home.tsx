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
import { Alarm } from '@mui/icons-material'
import { Alert } from '@mui/material'
import Savepopup from './Savepopup'

// ... (import statements)

const Home = track(() => {
const [showSavePopup, setShowSavePopup] = useState(false)
const [loading, setLoading] = useState(false)
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


const openSavePopup = () => {
	setShowSavePopup(true)
	console.log("saving doodle")
}
const handleSaveStore = async (name:string) => {
	const snap = store.allRecords();
	console.log("snap is : ", snap)

	
	const doodle:Omit<DoodleDocumentDraft, "createdAt"> = {
		documentName: name,
		userId: user?.id!,
		sessionId: "lone",
		doodle: snap
	}
	console.log(snap, "SNAP!!!! has doodle as : ", doodle);
	if(snap.length>6){
		try {
			setLoading(true)
			await createDoodle(doodle)
			setShowSavePopup(false)
		} catch (error) {
			
		}finally{
			setLoading(false)
		}
		
	}else{

		alert("You can't save an empty doodle. if this is a bug, please contact us or try to raise a PR that fixes the bug")
	}
	// await createDoodle(doodle)

}
const handleShowHistory = () => {
	console.log("saving to history")
	
}

const handleCreateRoom = () => {
	console.log("creating room")
	
}

	return (
		<div className="tldraw__editor">
			<Savepopup open={showSavePopup} setOpen={setShowSavePopup} handleSaveDocument={handleSaveStore} loading={loading}  />
			<Tldraw autoFocus store={store} shareZone={<Controls onHistory={handleShowHistory} onStartRoom={handleCreateRoom} onClickSave={openSavePopup} />} />
		</div>
	);
});

export default Home;
