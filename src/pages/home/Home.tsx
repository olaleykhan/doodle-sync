import {  useState } from 'react'
import { 
	TLRecord,
	createTLStore,
	defaultShapeUtils,
	Tldraw,
	useEditor,
	Editor,
	TLShape,
	TLStore,
} from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { DEFAULT_STORE } from '@/bl/doodle/default_store'
import { Box } from '@mui/material'
import Controls from './Controls'
import { DoodleDocumentDraft } from '@/bl/doodle/types'
import { createDoodle } from '@/services/firebase/doodleService'
import { useAuth } from '@/contexts/AuthContext'
import Savepopup from './Savepopup'


const Home = () => {
const [showSavePopup, setShowSavePopup] = useState(false)
const [loading, setLoading] = useState(false)
const [currentShapes, setCurrentShapes] = useState<TLShape[]>([])
const editor = useEditor();
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
}
const handleSaveStore = async (name:string, s:TLStore) => {
	const snap:TLRecord[] = store.allRecords();
	
	const doodle:Omit<DoodleDocumentDraft, "createdAt"> = {
		documentName: name,
		userId: user?.id!,
		sessionId: "lone",
		doodle: snap,
		serializedStore:store.serialize(),
		shot: store.getSnapshot(),
		// store:s,
	}
	console.log(snap, "SNAP!!!! has doodle as : ", doodle);
	if(snap.length>6){
		
		try {
			setLoading(true)
			console.log("we got here")
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

const handleCreateRoom = (s:TLStore) => {
	
	console.log("creating room")
	console.log(store, "store");
	console.log(s, "store from editor");
	const ser =store.serialize();
	const snapp = store.getSnapshot()

	// CREATE  STORE WITH  SERIALIZED TLRecord
	// const newStore =  createTLStore({
	// 	shapeUtils: defaultShapeUtils,
	// 	initialData: ser
	// })

	// get image of store. we use 
	    //  getSvg(shapes: TLShape[] | TLShapeId[], opts?: Partial<{
    //      scale: number;
    //      background: boolean;
    //      padding: number;
    //      darkMode?: boolean | undefined;
    //      preserveAspectRatio: React.SVGAttributes<SVGSVGElement>['preserveAspectRatio'];
    //  }>): Promise<SVGSVGElement | undefined>;
    //  /**
// but, how do we TLShape[]?



	// console.log(ser, "serialized")
	// // console.log(newStore, "new store")
	// const shapes = 	editor.currentPageShapes;
	// console.log(shapes, "shapes")
	// console.log(currentShapes, "shapes in mount")
	
}

const handleMount = (editor:Editor) => {
	const shapes = 	editor.currentPageShapes;
	setCurrentShapes(shapes);
	console.count("mounting")
	// console.log(shapes, "shapes in mount")
	// console.log(currentShapes, "shapes in mount")
	
	
	
}

	return (
		<div className="tldraw__editor">
			
			<Tldraw autoFocus store={store} onMount={handleMount} shareZone={<Inside />} >
			<Box sx={{
				position: 'absolute',
				top: 0,
				right: 0,
				zIndex: 999,
				p: 1

			}} >
				<Savepopup open={showSavePopup} setOpen={setShowSavePopup} handleSaveDocument={handleSaveStore} loading={loading}  />

<Controls onHistory={handleShowHistory} onStartRoom={handleCreateRoom} onClickSave={openSavePopup} />
				
			</Box>
			</Tldraw>
		</div>
	);
};

export default Home;


const Inside = () => {
	
	
	return <Box sx={{
		backgroundColor: 'transparent',
		pointerEvents: 'all',
		height: 60
	}}/>
}
